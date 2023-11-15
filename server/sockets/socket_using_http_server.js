const { createServer } = require("http");
const { Server } = require("socket.io");

const httpServer = createServer();

const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  // console.log(`User Connected id: ${socket.id}`);
  socket.on("message", (data) => {
    // console.log(data);
    io.emit("message", data);
  });
});

const SOCKET_PORT = process.env.SOCKET_PORT || 6066;
httpServer.listen(SOCKET_PORT, () => {
  console.log(`Socket server(http) listening on ${SOCKET_PORT}`);
});
