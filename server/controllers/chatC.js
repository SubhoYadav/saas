const io = require("../sockets/socket_using_express_server");

const initiateChat = (request, response) => {
  const chatObj = request.body;
  console.log("Chat Object ", chatObj);
  response.send({ msg: "Initiating the chat process !" });
};

module.exports = {
  initiateChat,
};
