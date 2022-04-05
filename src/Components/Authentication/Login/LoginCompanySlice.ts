import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserDataLogin } from "../../../Shared/types";
import { UserApi } from "./../../../Api/UserApi/UserApi";
import { LoginType } from "./../../../Shared/types";
const SLICE_LOGIN_NAME = "login";

export const LoginCompanySliceAction = createAsyncThunk(
  "users/login",
  async (payload: UserDataLogin) => {
    const userDataLogin: UserDataLogin = payload;
    const role: LoginType = LoginType.COMPANY;
    const response = await UserApi.login(role, userDataLogin);
    return response.data;
  }
);

export const LoginCompanySlice = createSlice({
  name: SLICE_LOGIN_NAME,
  initialState: {
    value: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(LoginCompanySliceAction.fulfilled, (state, action) => {
        state.value = action.payload;
      })
      .addCase(LoginCompanySliceAction.rejected, (state, action) => {
        throw action.error;
      });
  },
});

const { reducer } = LoginCompanySlice;
export default reducer;
