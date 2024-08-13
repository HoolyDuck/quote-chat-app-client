import { Message } from "@/common/types/message/message.type";
import styles from "./styles.module.css";
import { MessageBox } from "../MessageBox/MessageBox";

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
          <MessageBox
            key={message._id}
            message={message}
            author={author}
          />
        ))}
      </div>
    </div>
  );
};
