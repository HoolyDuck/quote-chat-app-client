import { useGetChatQuery } from "@/lib/api/chat/chatApi";
import { useParams } from "react-router-dom";
import styles from "./styles.module.css";

import { ChatHeader } from "./components/ChatHeader/ChatHeader";
import { MessageContainer } from "./components/MessageContainer/MessageContainer";
import { ChatInput } from "./components/ChatInput/ChatInput";
import { Loader } from "@/common/components/Loader/Loader";
export const ChatDisplay = () => {
  const { chatId } = useParams();
  const { data, isLoading } = useGetChatQuery(chatId!);

  if (isLoading) {
    return (
      <div className={styles.loader_container}>
        <Loader />
      </div>
    );
  }

  return (
    <div className={styles.chat_display}>
      <>
        <ChatHeader
          firstName={data?.firstName}
          lastName={data?.lastName}
        />
        <MessageContainer
          messages={data?.messages}
          author={data?.author}
        />
        <ChatInput />
      </>
    </div>
  );
};
