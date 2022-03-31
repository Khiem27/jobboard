export interface UserData {
  username: string;
  email: string;
  password: string;
}

export interface UserDataLogin {
  email: string;
  password: string;
}

export enum ResumeType {
  SKILL = "skill",
  EDUCATION = "education",
  EMPLOYMENT = "employment",
  PROJECT = "project",
  HEADLINE = "headline",
}
