import { createContext } from "react";
import { io } from "socket.io-client";

const socket = io("ws://localhost:3000", {
  autoConnect: false,
  withCredentials: true,
});

const SocketContext = createContext(socket);

export { SocketContext, socket };
