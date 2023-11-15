const express = require("express");
const app = express();
const { Server } = require("socket.io");

const SOCKET_PORT = process.env.SOCKET_PORT || 6061;

const expressServer = app.listen(SOCKET_PORT, () => {
  console.log(`Socket server(express) listening on port: ${SOCKET_PORT}`);
});

const io = new Server(expressServer, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log(`User Connected id: ${socket.id}`);
  socket.on("message", (data) => {
    // console.log("Message recieved on socket: ", data);
    io.emit("message", data);
  });
  socket.on("send", (message) => {
    console.log("MSGS ", message);
    io.emit("recieve", message);
  });
});

module.exports = io;
