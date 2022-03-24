import RequestClient from "../RequestClient";

export const UserApi = {
  register: (data: any) => {
    return RequestClient.post("auth/register", data);
  },

  login: (data: any) => {
    return RequestClient.post("auth/login", data);
  },
};
