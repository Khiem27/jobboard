import axios from "axios";

export const RequestClient = axios.create({
  baseURL: "https://job-board-2711.herokuapp.com//",
});

RequestClient.interceptors.response.use(
  (config) => {
    return config;
  },
  (e: any) => {
    return Promise.reject(e.response.data);
  }
);

RequestClient.interceptors.request.use(
  (config) => {
    const userDataLocalParse = JSON.parse(
      localStorage.getItem("user") as string
    );
    if (config.headers) {
      config.headers.Authorization = userDataLocalParse.id;
    }
    return config;
  },
  (e: any) => {
    return Promise.reject(e.response.data);
  }
);

export default RequestClient;
