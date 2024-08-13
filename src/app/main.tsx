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

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <Provider store={store}>
    <RouterProvider
      routes={[
        {
          path: "/",
          element: <App />,
          children: [
            {
              path: "/login",
              element: <LoginPage />,
            },
            {
              path: "/chat",
              element: <ChatPage />,
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
  //</React.StrictMode>
);
