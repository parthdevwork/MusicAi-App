import axios from "axios";
import {API} from "../../constants/api";
import {store} from "./store";
const api = axios.create({
  baseURL: API.BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
api.interceptors.request.use(
  config => {
    const token = store.getState().user.token;
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error),
);
export default api;
