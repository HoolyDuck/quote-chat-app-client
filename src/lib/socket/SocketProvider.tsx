import { createContext } from "react";
import { io } from "socket.io-client";

const socket = io("ws://localhost:3000", {
  autoConnect: false,
  withCredentials: true,
});
const SocketContext = createContext(socket);

type SocketProviderProps = {
  children: React.ReactNode;
};

export const SocketProvider = ({ children }: SocketProviderProps) => {
  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};

export { SocketContext };
