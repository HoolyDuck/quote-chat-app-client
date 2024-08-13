import { Message } from "@/common/types/message/message.type";
import styles from "./styles.module.css";
import clsx from "clsx";

type MessageContainerProps = {
  messages: Message[];
  author: string;
};

export const MessageContainer = ({
  messages,
  author,
}: MessageContainerProps) => {
  return (
    <div className={styles.reverse_wrapper}>
      <div className={styles.messages_container}>
        {messages.map((message) => (
          <div
            key={message._id}
            className={clsx({
              [styles.message]: true,
              [styles.own_message]: message.sender === author,
            })}
          >
            <p>{message.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
