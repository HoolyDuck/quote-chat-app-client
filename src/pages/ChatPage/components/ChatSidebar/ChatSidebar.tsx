import { ChatList } from "../ChatList/ChatList";
import { SidebarHeader } from "../SidebarHeader/SidebarHeader";
import styles from "./styles.module.css";

export const ChatSidebar = () => {
  return (
    <div className={styles.sidebar}>
      <SidebarHeader />
      <ChatList />
    </div>
  );
};
