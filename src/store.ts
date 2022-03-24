import { configureStore } from "@reduxjs/toolkit";
import RegisterSlice from "./Components/Authentication/Register/RegisterSlice";
const rootReducers = {
  register: RegisterSlice,
};

export const store = configureStore({
  reducer: rootReducers,
});
