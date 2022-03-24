import axios from "axios";

export const RequestClient = axios.create({
  baseURL: "https://job-board-2710.herokuapp.com/",
  headers: { "Content-Type": "application/json" },
});

RequestClient.interceptors.response.use(
  (res) => {
    return res;
  },
  (e: any) => {
    return Promise.reject(e.response.data);
  }
);

export default RequestClient;
