import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "../assets/styles/index.css";
import { RouterProvider } from "../lib/router/RouterProvider.tsx";
import { LoginPage } from "@/pages/LoginPage/LoginPage.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
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
          ],
        },
      ]}
    />
  </React.StrictMode>
);
