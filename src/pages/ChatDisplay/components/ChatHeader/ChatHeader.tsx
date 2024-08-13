import { Avatar } from "@/common/components/Avatar/Avatar";
import styles from "./styles.module.css";

import { Button } from "@/common/components/Button/Button";
import { useNavigate, useParams } from "react-router-dom";
import { chatApi, useDeleteChatMutation } from "@/lib/api/chat/chatApi";
import { useAppDispatch } from "@/lib/store/hooks";

type ChatHeaderProps = {
  firstName?: string;
  lastName?: string;
};

export const ChatHeader = ({ firstName, lastName }: ChatHeaderProps) => {
  const { chatId } = useParams<{ chatId: string }>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [deleteChat] = useDeleteChatMutation();

  const handleDeleteChat = async () => {
    if (!chatId) return;

    await deleteChat(chatId);
    dispatch(
      chatApi.util.updateQueryData("getChats", undefined, (draft) => {
        const chatIndex = draft?.chats.findIndex((chat) => chat._id === chatId);
        if (chatIndex !== -1) {
          draft?.chats.splice(chatIndex, 1);
        }
      })
    );

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
