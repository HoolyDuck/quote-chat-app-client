import { Message } from "../message/message.type";

export type Chat = {
  _id: string;
  messages: Message[];
  author: string;
  firstName: string;
  lastName: string;
};
