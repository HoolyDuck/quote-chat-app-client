import { ChatCard } from "../ChatCard/ChatCard";
import styles from "./styles.module.css";

export const ChatList = () => {
  return (
    <div className={styles.chat_list}>
      <h2 className={styles.title}>Chats</h2>
      <div className={styles.chats_container}>
        <ChatCard
          avatarSrc="https://picsum.photos/200"
          name="John Doe"
          lastMessage="Hello, how are yofassssssssssssssssssssssssssssssssssssu?"
          lastMessageTime="10:00"
        />
      </div>
    </div>
  );
};
