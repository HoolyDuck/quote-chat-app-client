import { SidebarHeader } from "../SidebarHeader/SidebarHeader";
import styles from "./styles.module.css";

export const ChatSidebar = () => {
  return (
    <div className={styles.sidebar}>
      <SidebarHeader />
      <div className={styles.chat_list}>search</div>
    </div>
  );
};
