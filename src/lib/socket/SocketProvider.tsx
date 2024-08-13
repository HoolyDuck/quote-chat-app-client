import { useState } from "react";
import { socket, SocketContext } from ".";

type SocketProviderProps = {
  children: React.ReactNode;
};

export const SocketProvider = ({ children }: SocketProviderProps) => {
  const [chatSocket] = useState(() => {
    return socket;
  });

  return (
    <SocketContext.Provider value={chatSocket}>
      {children}
    </SocketContext.Provider>
  );
};

export { SocketContext };
  