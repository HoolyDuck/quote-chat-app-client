import { Container } from "@/common/components/Container/Container";
import styles from "./styles.module.css";
import { ChatSidebar } from "./components/ChatSidebar/ChatSidebar";

export const ChatPage = () => {
  return (
    <Container>
      <div className={styles.chat_page}>
        <ChatSidebar />
        <div className={styles.main}>
          <div className={styles.header}>Chat</div>
          <div className={styles.chat_box}>Messages</div>
        </div>
      </div>
    </Container>
  );
};
