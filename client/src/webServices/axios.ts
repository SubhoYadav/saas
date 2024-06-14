import axios from "axios";

const saasApi = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export { saasApi };
