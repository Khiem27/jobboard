import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserData } from "../../../Shared/types";
import { UserApi } from "./../../../Api/UserApi/UserApi";

export const RegisterSliceAction = createAsyncThunk(
  "users/register",
  async (payload: UserData) => {
    const userData: UserData = payload;
    const response = await UserApi.register(userData);
    return response.data.message;
  }
);

export const RegisterSlice = createSlice({
  name: "counter",
  initialState: {
    value: null,
  },
  reducers: {},
  extraReducers: {
    "users/register/fulfilled": (state, action) => {
      state.value = action.payload;
    },
    "users/register/rejected": (state, action) => {
      state.value = action.payload;
    },
  },
});

const { reducer } = RegisterSlice;
export default reducer;
