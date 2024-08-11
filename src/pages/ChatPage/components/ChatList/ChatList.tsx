import { useGetChatsQuery } from "@/lib/api/chat/chatApi";
import { ChatCard } from "../ChatCard/ChatCard";
import styles from "./styles.module.css";

export const ChatList = () => {
  const { data, isLoading } = useGetChatsQuery();
  const chats = data?.chats;

  return (
    <div className={styles.chat_list}>
      <h2 className={styles.title}>Chats</h2>
      <div className={styles.chats_container}>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          chats?.map((chat) => (
            <ChatCard
              key={chat._id}
              name={`${chat.firstName} ${chat.lastName}`}
              lastMessage={chat.messages[0]}
              lastMessageTime={new Date().toLocaleTimeString()}
            />
          ))
        )}
      </div>
    </div>
  );
};
