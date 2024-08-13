import { chatApi } from "@/lib/api/chat/chatApi";
import { SocketContext } from "@/lib/socket/SocketProvider";
import { useAppDispatch } from "@/lib/store/hooks";
import { useContext, useEffect } from "react";
import { toast } from "react-toastify";
import { Message } from "../types/message/message.type";

const useSocketSetup = () => {
  const socket = useContext(SocketContext);
  const dispatch = useAppDispatch();

  useEffect(() => {
    socket.connect();

    socket.on("response", (data: Message) => {
      //toast(data.content);
      dispatch(
        chatApi.util.updateQueryData(
          "getChat",
          data.chat as string,
          (draft) => {
            draft?.messages.push(data);
          }
        )
      );
    });

    socket.on("message_sent", (data: Message) => {
      dispatch(
        chatApi.util.updateQueryData(
          "getChat",
          data.chat as string,
          (draft) => {
            draft?.messages.push({
              _id: data._id,
              content: data.content,
              chat: data.chat,
              sender: data.sender,
            });
          }
        )
      );
    });

    return () => {
      socket.disconnect();
    };
  }, [socket]);
};

export { useSocketSetup };
