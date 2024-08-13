import { Container } from "@/common/components/Container/Container";
import styles from "./styles.module.css";
import { ChatSidebar } from "./components/ChatSidebar/ChatSidebar";
import { Outlet } from "react-router-dom";

export const ChatPage = () => {
  return (
    <Container>
      <div className={styles.chat_page}>
        <ChatSidebar />
        <div className={styles.main}>
          <Outlet />
        </div>
      </div>
    </Container>
  );
};
