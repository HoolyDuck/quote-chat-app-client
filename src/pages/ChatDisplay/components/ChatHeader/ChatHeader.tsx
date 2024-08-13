import { Avatar } from "@/common/components/Avatar/Avatar";
import styles from "./styles.module.css";

import { Button } from "@/common/components/Button/Button";
import { useNavigate, useParams } from "react-router-dom";
import { useDeleteChatMutation } from "@/lib/api/chat/chatApi";
import { useUpdateChats } from "@/common/hooks/useUpdateChats";
import { useState } from "react";
import { Modal } from "@/common/components/Modal/Modal";

type ChatHeaderProps = {
  firstName?: string;
  lastName?: string;
};

export const ChatHeader = ({ firstName, lastName }: ChatHeaderProps) => {
  const { chatId } = useParams<{ chatId: string }>();
  const navigate = useNavigate();

  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const [deleteChat] = useDeleteChatMutation();
  const { deleteFromChatList } = useUpdateChats();

  const handleDeleteChat = async () => {
    if (!chatId) return;

    await deleteChat(chatId);
    deleteFromChatList(chatId);

    navigate("/chat");
  };

  const ConfirmDeleteModal = () => {
    return (
      <Modal
        isOpen={showConfirmModal}
        title="Delete Chat"
        onClose={() => setShowConfirmModal(false)}
      >
        <div className={styles.modal_content}>
          <p>Are you sure you want to delete this chat?</p>
          <div className={styles.modal_buttons}>
            <Button onClick={() => setShowConfirmModal(false)}>Cancel</Button>
            <Button
              onClick={handleDeleteChat}
              className={styles.delete_button}
            >
              Delete
            </Button>
          </div>
        </div>
      </Modal>
    );
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
          onClick={() => setShowConfirmModal(true)}
        >
          Delete chat
        </Button>
      </div>
      {showConfirmModal && (
        <Modal
          isOpen={showConfirmModal}
          title="Delete Chat"
          onClose={() => setShowConfirmModal(false)}
        >
          <ConfirmDeleteModal />
        </Modal>
      )}
    </div>
  );
};
