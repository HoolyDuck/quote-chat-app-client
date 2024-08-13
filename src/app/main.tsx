import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "../assets/styles/index.css";
import { RouterProvider } from "../lib/router/RouterProvider.tsx";
import { LoginPage } from "@/pages/LoginPage/LoginPage.tsx";
import { Provider } from "react-redux";
import { store } from "@/lib/store/store.ts";
import { ChatPage } from "@/pages/ChatPage/ChatPage.tsx";
import { ChatDisplay } from "@/pages/ChatDisplay/ChatDisplay.tsx";
import { Navigate } from "react-router-dom";
import { SelectChatDisplay } from "@/pages/ChatDisplay/components/SelectChatDisplay/SelectChatDisplay.tsx";
import { PrivateRoute } from "@/common/components/PrivateRoute/PrivateRoute.tsx";
import { SocketProvider } from "@/lib/socket/SocketProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider
        routes={[
          {
            path: "/",
            element: <App />,
            children: [
              {
                path: "/",
                element: (
                  <Navigate
                    to="/chat"
                    replace={true}
                  />
                ),
              },
              {
                path: "/login",
                element: <LoginPage />,
              },
              {
                path: "/chat",
                element: (
                  <PrivateRoute>
                    <ChatPage />
                  </PrivateRoute>
                ),
                children: [
                  {
                    path: "/chat",
                    element: <SelectChatDisplay />,
                  },
                  {
                    path: "/chat/:chatId",
                    element: <ChatDisplay />,
                  },
                ],
              },
              {
                path: "*",
                element: <Navigate to="/login" />,
              },
            ],
          },
        ]}
      />
    </Provider>
  </React.StrictMode>
);
