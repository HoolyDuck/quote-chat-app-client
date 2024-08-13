import {
  useCreateChatMutation,
  useGetChatsQuery,
} from "@/lib/api/chat/chatApi";
import { ChatCard } from "../ChatCard/ChatCard";
import styles from "./styles.module.css";
import { Button } from "@/common/components/Button/Button";
import { Modal } from "@/common/components/Modal/Modal";
import { useState } from "react";
import { CreateChatForm } from "../CreateChatForm/CreateChatForm";
import { NavLink } from "react-router-dom";
import { CreateChatDto } from "@/common/types/chat/create-chat.dto";
import { toast } from "react-toastify";
import { useAppSelector } from "@/lib/store/hooks";

export const ChatList = () => {
  const { name } = useAppSelector((state) => state.chatSearch);
  const { data, isLoading } = useGetChatsQuery({ name });

  const [isCreateChatModalOpen, setIsCreateChatModalOpen] = useState(false);
  const [createChat] = useCreateChatMutation();

  const openCreateChatModal = () => {
    setIsCreateChatModalOpen(true);
  };

  const closeCreateChatModal = () => {
    setIsCreateChatModalOpen(false);
  };

  const onSubmit = async (data: CreateChatDto) => {
    try {
      await createChat(data).unwrap();
      toast.success("Chat created successfully");
    } catch (error) {
      toast.error("Failed to create chat");
    }
  };

  return (
    <>
      <div className={styles.chat_list}>
        <div className={styles.header}>
          <h2 className={styles.title}>Chats</h2>
          <Button
            size="small"
            onClick={openCreateChatModal}
          >
            New Chat
          </Button>
        </div>

        <div className={styles.chats_container}>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            data?.chats?.map((chat) => (
              <NavLink
                to={`/chat/${chat._id}`}
                key={chat._id}
              >
                <ChatCard
                  name={`${chat.firstName} ${chat.lastName}`}
                  lastMessage={chat.messages[chat.messages.length - 1]?.content}
                  lastMessageTime={
                    chat.messages[chat.messages.length - 1]?.createdAt
                  }
                />
              </NavLink>
            ))
          )}
        </div>
      </div>
      <Modal
        isOpen={isCreateChatModalOpen}
        title="New Chat"
        onClose={closeCreateChatModal}
      >
        <CreateChatForm
          onSubmit={onSubmit}
          closeModal={closeCreateChatModal}
        />
      </Modal>
    </>
  );
};
