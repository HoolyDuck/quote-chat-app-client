import { SocketContext } from "@/lib/socket/SocketProvider";
import { useContext, useEffect } from "react";
import { Message } from "../types/message/message.type";
import { useUpdateChats } from "./useUpdateChats";
import { useNewMessageToast } from "./useNewMessageToast";

const useSocketSetup = () => {
  const socket = useContext(SocketContext);
  const { addMessageToChat } = useUpdateChats();
  const { newMessageToast } = useNewMessageToast();

  useEffect(() => {
    // check if socket is connected
    if (socket.connected) return;

    socket.connect();

    socket.on("response", (data: Message) => {
      newMessageToast(data);
      addMessageToChat(data);
    });

    socket.on("message_sent", (data: Message) => {
      addMessageToChat(data);
    });

    return () => {
      socket.disconnect();
    };
  }, [socket]);

  return { socket };
};

export { useSocketSetup };
