import { useNavigate } from "react-router-dom";
import { Message } from "../types/message/message.type";
import { toast } from "react-toastify";

export const useNewMessageToast = () => {
  const navigate = useNavigate();

  const newMessageToast = ({ chat }: Message) => {
    toast.info(`New message from ${chat}`, {
      onClick: () => navigate(`/chat/${chat}`),
      position: "bottom-right",
    });
  };

  return { newMessageToast };
};
