import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "./Components/Authentication/Login/LoginSlice";
import RegisterSlice from "./Components/Authentication/Register/RegisterSlice";
const rootReducers = {
  register: RegisterSlice,
  login: LoginSlice,
};

export const store = configureStore({
  reducer: rootReducers,
});
