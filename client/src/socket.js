import { io } from "socket.io-client";
let socket = io("ws://localhost:6066");
export default socket;
