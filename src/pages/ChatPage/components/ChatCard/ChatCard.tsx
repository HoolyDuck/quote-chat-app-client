import { Avatar } from "@/common/components/Avatar/Avatar";
import styles from "./styles.module.css";

type ChatCardProps = {
  avatarSrc?: string;
  name?: string;
  lastMessage?: string;
  lastMessageTime?: Date;
};

export const ChatCard: React.FC<ChatCardProps> = ({
  avatarSrc,
  name,
  lastMessage,
  lastMessageTime,
}) => {
  return (
    <div className={styles.chat_card}>
      <Avatar
        src={avatarSrc}
        alt={`${name} avatar`}
      />
      <div className={styles.chat_info}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.last_message}>{lastMessage}</p>
      </div>
      {lastMessageTime && (
        <p className={styles.last_message_time}>
          {new Date(lastMessageTime).toDateString()}
        </p>
      )}
    </div>
  );
};
