import axios from "axios";

const saasApi = axios.create({
  baseURL: "http://localhost:8089",
});

export { saasApi };
