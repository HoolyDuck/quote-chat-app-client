import { Chat } from "../chat/chat.type";
import { User } from "../user/user.type";

export type Message = {
  _id: string;
  chat: string | Chat;
  content: string;
  sender?: string | User;
};
