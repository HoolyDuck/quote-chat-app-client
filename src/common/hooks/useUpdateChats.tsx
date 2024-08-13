import { useAppDispatch } from "@/lib/store/hooks";
import { Message } from "../types/message/message.type";
import { chatApi } from "@/lib/api/chat/chatApi";

export const useUpdateChats = () => {
  const dispatch = useAppDispatch();

  const addMessageToChat = (message: Message) => {
    dispatch(
      chatApi.util.updateQueryData("getChat", message.chat._id, (draft) => {
        draft?.messages.push(message);
      })
    );
    dispatch(
        chatApi.util.updateQueryData("getChats", undefined, (draft) => {
          const chatIndex = draft?.chats.findIndex(
            (chat) => chat._id === message.chat._id
          );
          if (chatIndex !== -1) {
            draft?.chats[chatIndex].messages.push(message);
          }
        })
      );
  };


  return { addMessageToChat };
};
