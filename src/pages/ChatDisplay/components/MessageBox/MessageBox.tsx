import { Message } from "@/common/types/message/message.type";
import styles from "./styles.module.css";
import clsx from "clsx";

type MessageBoxProps = {
  message: Message;
  author?: string;
};

export const MessageBox = ({ message, author }: MessageBoxProps) => {
  return (
    <div
      key={message._id}
      className={clsx(styles.message_box, {
        [styles.author]: message.sender === author,
      })}
    >
      <p className={styles.content}>{message.content}</p>
      {message.createdAt && (
        <span className={styles.time}>
          {new Date(message.createdAt).toLocaleString()}
        </span>
      )}
    </div>
  );
};
