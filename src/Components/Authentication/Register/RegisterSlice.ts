import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LoginType, UserData } from "../../../Shared/types";
import { UserApi } from "./../../../Api/UserApi/UserApi";
const SLICE_REGISTER_NAME = "register";
export const RegisterSliceAction = createAsyncThunk(
  "users/register",
  async (payload: UserData) => {
    const userData: UserData = payload;
    const type: LoginType = LoginType.CANDIDATE;
    const response = await UserApi.register(userData, type);
    return response.data;
  }
);

export const RegisterSlice = createSlice({
  name: SLICE_REGISTER_NAME,
  initialState: {
    value: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(RegisterSliceAction.fulfilled, (state, action) => {
        state.value = action.payload;
      })
      .addCase(RegisterSliceAction.rejected, (state, action) => {
        throw action.error;
      });
  },
});

const { reducer } = RegisterSlice;
export default reducer;
