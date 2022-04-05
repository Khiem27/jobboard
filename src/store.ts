import { configureStore } from "@reduxjs/toolkit";
import LoginCompanySlice from "./Components/Authentication/Login/LoginCompanySlice";
import LoginSlice from "./Components/Authentication/Login/LoginSlice";
import RegisterCompanySlice from "./Components/Authentication/Register/RegisterCompanySlice";
import RegisterSlice from "./Components/Authentication/Register/RegisterSlice";
import MyProfileSlice from "./Components/ForCandidate/MyProfile/MyProfileSlice";
import CompanyProfileSlice from "./Components/ForCompany/CompanyProfile/CompanyProfileSlice";
import SliderHomeSlice from "./Components/Slider/SliderHomeSlice";
const rootReducers = {
  register: RegisterSlice,
  registerCompany: RegisterCompanySlice,
  login: LoginSlice,
  loginCompany: LoginCompanySlice,
  myProfile: MyProfileSlice,
  companyProfile: CompanyProfileSlice,
  sliderHomeSlice: SliderHomeSlice,
};

export const store = configureStore({
  reducer: rootReducers,
});

export type RootState = ReturnType<typeof store.getState>;
