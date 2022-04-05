import { LoginType, ResumeType } from "../../Shared/types";
import RequestClient from "../RequestClient";

export const UserApi = {
  register: (data: any, type: LoginType) => {
    return RequestClient.post("auth/register", data, {
      params: {
        type,
      },
    });
  },

  login: (role: LoginType, data: any) => {
    return RequestClient.post("auth/login", data, {
      params: {
        role,
      },
    });
  },

  changeProfile: (data: any) => {
    return RequestClient.put("user", data);
  },

  getUserProfile: (id: any) => {
    return RequestClient.get(`user/profile/${id}`);
  },

  getCompanyProfile: (id: any) => {
    return RequestClient.get(`company/profile/${id}`);
  },

  postBlog: (type: LoginType, data: any) => {
    return RequestClient.post("blog", data, {
      params: {
        type,
      },
    });
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

  postAvatarCompany: (data: any) => {
    return RequestClient.post("company/profile/avatar", data);
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

  postJob: (data: any) => {
    return RequestClient.post("job", data);
  },

  putCompany: (data: any) => {
    return RequestClient.put("company", data);
  },

  getJob: (data: {
    page: number;
    limit: number;
    title?: string;
    address?: string;
    tag?: string;
  }) => {
    return RequestClient.get("job", {
      params: {
        ...data,
      },
    });
  },

  getApplyJobCompany: (page: number, limit: number) => {
    return RequestClient.get("job/applied_employments", {
      params: {
        page,
        limit,
      },
    });
  },

  getApplyJobCandidate: (page: number, limit: number) => {
    return RequestClient.get("job/applied_jobs", {
      params: {
        page,
        limit,
      },
    });
  },

  getOneJob: (id: any) => {
    return RequestClient.get(`job/${id}`);
  },

  getOneCompany: (id: any, page: number, limit: number) => {
    return RequestClient.get(`job/company/${id}`, {
      params: {
        page,
        limit,
      },
    });
  },

  deleteOneJob: (id: any) => {
    return RequestClient.delete(`job/${id}`);
  },

  applyJob: (id: any) => {
    return RequestClient.post(`job/apply/${id}`);
  },
};
