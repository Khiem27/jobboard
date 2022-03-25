import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "./Components/Authentication/Login/LoginSlice";
import RegisterSlice from "./Components/Authentication/Register/RegisterSlice";
import MyProfileSlice from "./Components/MyProfile/MyProfileSlice";
const rootReducers = {
  register: RegisterSlice,
  login: LoginSlice,
  myProfile: MyProfileSlice,
};

export const store = configureStore({
  reducer: rootReducers,
});
