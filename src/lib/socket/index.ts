import { createContext } from "react";
import { io } from "socket.io-client";

const socket = io(import.meta.env.VITE_API_URL as string, {
  autoConnect: false,
  withCredentials: true,
});

const SocketContext = createContext(socket);

export { SocketContext, socket };
