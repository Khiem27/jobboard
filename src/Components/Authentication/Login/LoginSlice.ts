import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserDataLogin } from "../../../Shared/types";
import { UserApi } from "./../../../Api/UserApi/UserApi";
import { LoginType } from "./../../../Shared/types";
const SLICE_LOGIN_NAME = "login";

export const LoginSliceAction = createAsyncThunk(
  "users/login",
  async (payload: UserDataLogin) => {
    const userDataLogin: UserDataLogin = payload;
    const role: LoginType = LoginType.CANDIDATE;
    const response = await UserApi.login(role, userDataLogin);
    console.log(response);
    return response.data;
  }
);

export const LoginSlice = createSlice({
  name: SLICE_LOGIN_NAME,
  initialState: {
    value: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(LoginSliceAction.fulfilled, (state, action) => {
        state.value = action.payload;
      })
      .addCase(LoginSliceAction.rejected, (state, action) => {
        throw action.error;
      });
  },
});

const { reducer } = LoginSlice;
export default reducer;
