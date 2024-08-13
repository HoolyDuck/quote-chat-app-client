import { useRef } from "react";
import { socket, SocketContext } from ".";

type SocketProviderProps = {
  children: React.ReactNode;
};

export const SocketProvider = ({ children }: SocketProviderProps) => {
  const chatSocket = useRef(socket);

  return (
    <SocketContext.Provider value={chatSocket.current}>
      {children}
    </SocketContext.Provider>
  );
};

export { SocketContext };
