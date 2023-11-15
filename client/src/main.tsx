import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { MessageContextProvider } from "./context/message-context.jsx";
import { ToggleContextProvider } from "./context/toggle-context.jsx";
import "./styles/global.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <MessageContextProvider>
    <ToggleContextProvider>
      <App />
    </ToggleContextProvider>
  </MessageContextProvider>
);
