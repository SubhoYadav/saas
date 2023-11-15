import { saasApi } from "./axios";
const UserApi = {
  addUser: async (userObj) => {
    const response = await saasApi.post("/user/add", userObj);
    return response.data;
  },
  loginUser: async (userObj) => {
    const response = await saasApi.post("/user/login", userObj);
    return response.data;
  },
  userList: async () => {
    const response = await saasApi.post("/user/list");
    return response.data;
  },
  userListSearch: async (searchString) => {
    const response = await saasApi.post(`/user/list/?search=${searchString}`);
    return response.data;
  },
};

export { UserApi };
