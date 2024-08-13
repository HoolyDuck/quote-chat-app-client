import { useNavigate } from "react-router-dom";
import { Message } from "../types/message/message.type";
import { toast } from "react-toastify";

export const useNewMessageToast = () => {
  const navigate = useNavigate();

  const newMessageToast = ({ chat }: Message) => {
    const { firstName, lastName, _id } = chat;
    toast.info(`New message from ${firstName} ${lastName}`, {
      onClick: () => navigate(`/chat/${_id}`),
      position: "bottom-right",
    });
  };

  return { newMessageToast };
};
