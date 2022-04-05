import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserApi } from "./../../../Api/UserApi/UserApi";
import { CompanyData, LoginType } from "./../../../Shared/types";
const SLICE_REGISTER_NAME = "register_company";
export const RegisterCompanySliceAction = createAsyncThunk(
  "users/register",
  async (payload: CompanyData) => {
    const userData: CompanyData = payload;
    const type: LoginType = LoginType.COMPANY;
    const response = await UserApi.register(userData, type);
    return response.data;
  }
);

export const RegisterCompanySlice = createSlice({
  name: SLICE_REGISTER_NAME,
  initialState: {
    value: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(RegisterCompanySliceAction.fulfilled, (state, action) => {
        state.value = action.payload;
      })
      .addCase(RegisterCompanySliceAction.rejected, (state, action) => {
        throw action.error;
      });
  },
});

const { reducer } = RegisterCompanySlice;
export default reducer;
