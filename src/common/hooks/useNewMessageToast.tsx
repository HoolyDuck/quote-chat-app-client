import { useNavigate } from "react-router-dom";
import { Message } from "../types/message/message.type";
import { toast } from "react-toastify";
import { ToastNewMessage } from "../components/Toast/ToastNewMessage";

export const useNewMessageToast = () => {
  const navigate = useNavigate();

  const newMessageToast = ({ chat, content }: Message) => {
    const { firstName, lastName, _id } = chat;

    toast.info(
      <ToastNewMessage
        firstName={firstName}
        lastName={lastName}
        content={content}
      />,
      {
        onClick: () => navigate(`/chat/${_id}`),
        position: "bottom-right",
      }
    );
  };

  return { newMessageToast };
};
