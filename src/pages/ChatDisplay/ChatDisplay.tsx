import { useGetChatQuery } from "@/lib/api/chat/chatApi";
import { useParams } from "react-router-dom";
import styles from "./styles.module.css";

import { ChatHeader } from "./components/ChatHeader/ChatHeader";
import { MessageContainer } from "./components/MessageContainer/MessageContainer";
import { ChatInput } from "./components/ChatInput/ChatInput";
export const ChatDisplay = () => {
  const { chatId } = useParams();
  const { data, isLoading } = useGetChatQuery(chatId!);

  return (
    <div className={styles.chat_display}>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <ChatHeader
            firstName={data?.firstName}
            lastName={data?.lastName}
          />
          <MessageContainer
            messages={data?.messages!}
            author={data?.author!}
          />
          <ChatInput />
        </>
      )}
    </div>
  );
};
