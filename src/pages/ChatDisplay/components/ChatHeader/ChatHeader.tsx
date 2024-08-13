import { Avatar } from "@/common/components/Avatar/Avatar";
import styles from "./styles.module.css";

import { Button } from "@/common/components/Button/Button";
import { useNavigate, useParams } from "react-router-dom";
import { useDeleteChatMutation } from "@/lib/api/chat/chatApi";
import { useUpdateChats } from "@/common/hooks/useUpdateChats";

type ChatHeaderProps = {
  firstName?: string;
  lastName?: string;
};

export const ChatHeader = ({ firstName, lastName }: ChatHeaderProps) => {
  const { chatId } = useParams<{ chatId: string }>();
  const navigate = useNavigate();

  const [deleteChat] = useDeleteChatMutation();
  const { deleteFromChatList } = useUpdateChats();

  const handleDeleteChat = async () => {
    if (!chatId) return;

    await deleteChat(chatId);
    deleteFromChatList(chatId);

    navigate("/chat");
  };

  return (
    <div className={styles.header}>
      <div className={styles.user_info}>
        <Avatar />
        <h2>
          {firstName} {lastName}
        </h2>
      </div>
      <div className={styles.header_buttons}>
        <Button size="small">Update name</Button>
        <Button
          size="small"
          className={styles.delete_button}
          onClick={handleDeleteChat}
        >
          Delete chat
        </Button>
      </div>
    </div>
  );
};
