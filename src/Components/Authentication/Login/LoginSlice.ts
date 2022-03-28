import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserDataLogin } from "../../shared/types";
import { UserApi } from "./../../../Api/UserApi/UserApi";

export const LoginSliceAction = createAsyncThunk(
  "users/login",
  async (payload: UserDataLogin) => {
    const userDataLogin: UserDataLogin = payload;
    const response = await UserApi.login(userDataLogin);
    return response.data;
  }
);

export const LoginSlice = createSlice({
  name: "counter",
  initialState: {
    value: null,
  },
  reducers: {},
  extraReducers: {
    "users/login/fulfilled": (state, action) => {
      state.value = action.payload;
    },

    "users/login/rejected": (state, action) => {
      state.value = action;
    },
  },
});

const { reducer } = LoginSlice;
export default reducer;
