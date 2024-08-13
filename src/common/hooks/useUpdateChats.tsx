import { useAppDispatch } from "@/lib/store/hooks";
import { Message } from "../types/message/message.type";
import { chatApi } from "@/lib/api/chat/chatApi";

export const useUpdateChats = () => {
  const dispatch = useAppDispatch();

  const addMessageToChat = (message: Message) => {
    dispatch(
      chatApi.util.updateQueryData(
        "getChat",
        message.chat as string,
        (draft) => {
          draft?.messages.push(message);
        }
      )
    );
  };

  return { addMessageToChat };
};
