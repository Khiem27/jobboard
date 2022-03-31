import { ResumeType } from "../../Shared/types";
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

  postBlog: (data: any) => {
    return RequestClient.post("blog", data);
  },

  getAllBlog: () => {
    return RequestClient.get("blog");
  },

  getOneBlog: (id: any) => {
    return RequestClient.get(`blog/${id}`);
  },

  postAvatar: (data: any) => {
    return RequestClient.post("user/profile/avatar", data);
  },

  putResume: (type: ResumeType, data: any) => {
    return RequestClient.put("user/resume", data, {
      params: {
        type,
      },
    });
  },

  deleteResume: (id: any, type: ResumeType) => {
    return RequestClient.delete(`user/resume/${id}`, {
      params: {
        type,
      },
    });
  },

  uploadFileCV: (data: any) => {
    return RequestClient.post("user/profile/cv", data);
  },

  getResume: () => {
    return RequestClient.get("user/resume");
  },
};
