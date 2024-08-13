import { Button } from "@/common/components/Button/Button";
import { Input } from "@/common/components/Input/Input";
import { SocketContext } from "@/lib/socket/SocketProvider";
import { useState, useContext } from "react";
import styles from "./styles.module.css";
import { useParams } from "react-router-dom";

export const ChatInput = () => {
  const [message, setMessage] = useState("");
  const socket = useContext(SocketContext);
  const { chatId } = useParams<{ chatId: string }>();

  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!chatId || !message) return;

    socket.emit("send_message", {
      createMessageDto: {
        content: message,
      },
      chatId: chatId,
    });
    setMessage("");
  };

  return (
    <form
      className={styles.input_container}
      onSubmit={handleSendMessage}
    >
      <Input
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button type="submit">Send</Button>
    </form>
  );
};
