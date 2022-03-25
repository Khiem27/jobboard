import RequestClient from "../RequestClient";

export const UserApi = {
  register: (data: any) => {
    return RequestClient.post("auth/register", data);
  },

  login: (data: any) => {
    return RequestClient.post("auth/login", data);
  },

  changeProfile: (data: any) => {
    return RequestClient.put("user", data);
  },

  getUserProfile: () => {
    return RequestClient.get("user/profile");
  },

  sendBlog: (data: any) => {
    return RequestClient.post("blog", data);
  },

  getAllBlog: () => {
    return RequestClient.get("blog");
  },

  postAvatar: (data: any) => {
    return RequestClient.post("user/profile/avatar", data);
  },
};
