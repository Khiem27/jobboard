import axios from "axios";

export const RequestClient = axios.create({
  baseURL: "https://job-board-2710.herokuapp.com/",
  headers: { "Content-Type": "application/json" },
});

export default RequestClient;
