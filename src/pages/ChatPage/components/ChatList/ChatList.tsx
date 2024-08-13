import { useGetChatsQuery } from "@/lib/api/chat/chatApi";
import { ChatCard } from "../ChatCard/ChatCard";
import styles from "./styles.module.css";
import { Button } from "@/common/components/Button/Button";
import { Modal } from "@/common/components/Modal/Modal";
import { useState } from "react";
import { CreateChatForm } from "../CreateChatForm/CreateChatForm";
import { NavLink } from "react-router-dom";

export const ChatList = () => {
  const { data, isLoading } = useGetChatsQuery();

  const [isCreateChatModalOpen, setIsCreateChatModalOpen] = useState(false);

  const openCreateChatModal = () => {
    setIsCreateChatModalOpen(true);
  };

  const closeCreateChatModal = () => {
    setIsCreateChatModalOpen(false);
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
                  lastMessageTime={new Date().toLocaleTimeString()}
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
        <CreateChatForm onSuccessfulSubmit={closeCreateChatModal} />
      </Modal>
    </>
  );
};
