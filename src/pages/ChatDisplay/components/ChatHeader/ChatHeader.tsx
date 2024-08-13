import { Avatar } from "@/common/components/Avatar/Avatar";
import styles from "./styles.module.css";

import { Button } from "@/common/components/Button/Button";
import { useNavigate, useParams } from "react-router-dom";
import {
  useDeleteChatMutation,
  useUpdateChatMutation,
} from "@/lib/api/chat/chatApi";
import { useState } from "react";
import { Modal } from "@/common/components/Modal/Modal";
import { CreateChatDto } from "@/common/types/chat/create-chat.dto";
import { CreateChatForm } from "@/pages/ChatPage/components/CreateChatForm/CreateChatForm";

type ChatHeaderProps = {
  firstName?: string;
  lastName?: string;
};

export const ChatHeader = ({ firstName, lastName }: ChatHeaderProps) => {
  const { chatId } = useParams<{ chatId: string }>();
  const navigate = useNavigate();

  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  const [deleteChat] = useDeleteChatMutation();
  const [updateChat] = useUpdateChatMutation();

  const handleDeleteChat = async () => {
    if (!chatId) return;

    await deleteChat(chatId);

    navigate("/chat");
  };

  const handleUpdateChat = async (data: CreateChatDto) => {
    if (!chatId) return;

    await updateChat({ id: chatId, ...data }).unwrap();
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

  const UpdateChatForm = () => {
    return (
      <Modal
        isOpen={showUpdateModal}
        title="Update Chat"
        onClose={() => setShowUpdateModal(false)}
      >
        <CreateChatForm
          onSubmit={handleUpdateChat}
          closeModal={() => setShowUpdateModal(false)}
          buttonText="Update Chat"
        />
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
        <Button
          size="small"
          onClick={() => setShowUpdateModal(true)}
        >
          Update chat
        </Button>
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
      {showUpdateModal && <UpdateChatForm />}
    </div>
  );
};
