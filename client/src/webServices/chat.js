import { saasApi } from "./axios";
const ChatApi = {
  initiateChat: async (userObj) => {
    const response = await saasApi.post("/chat/initiate", userObj);
    return response.data;
  },
};

export { ChatApi };
