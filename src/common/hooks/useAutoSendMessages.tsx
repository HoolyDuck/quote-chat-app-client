import { useGetChatsQuery } from "@/lib/api/chat/chatApi";
import { SocketContext } from "@/lib/socket";
import { useCallback, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const useAutoSendMessages = () => {
  const [isAutoSendMessages, setIsAutoSendMessages] = useState(false);

  const socket = useContext(SocketContext);

  const { data } = useGetChatsQuery();

  const sendMessage = useCallback(
    (message: string) => {
      const chats = data?.chats || [];
      const randomChatIndex = Math.floor(Math.random() * chats.length);
      const randomChat = chats[randomChatIndex];

      if (socket.connected) {
        socket.emit("send_message", {
          createMessageDto: {
            content: message,
          },
          chatId: randomChat._id,
        });
        toast.success(
          `Message sent to ${randomChat.firstName} ${randomChat.lastName}`
        );
      }
    },
    [data, socket]
  );

  useEffect(() => {
    if (isAutoSendMessages) {
      const interval = setInterval(() => {
        sendMessage("Auto message");
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [isAutoSendMessages, sendMessage]);

  return { isAutoSendMessages, setIsAutoSendMessages };
};
