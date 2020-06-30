import axios from "axios";
import tokenProvider from "axios-token-interceptor";

const http = axios.create({
  baseURL: "http://localhost:8000/",
  headers: {
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
  },
});

http.interceptors.request.use(
  tokenProvider({
    getToken: () =>
      localStorage.getItem("token") ? localStorage.getItem("token") : "",
  })
);

export default http;
