import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./react-router/router";

import "./styles/global.scss";
import socket from "./socket.js";
import initialiseFirebase from "./cofigs/firebase";

// Setting up the websocket on the frontend

function App() {
  React.useEffect(() => {
    initialiseFirebase();
    socket.emit("message", "Subho Yadav");
    socket.on("message", (data) => {
      console.log("What I recieved from socket server ", data);
    });
  }, []);
  return (
    <div className="main">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
