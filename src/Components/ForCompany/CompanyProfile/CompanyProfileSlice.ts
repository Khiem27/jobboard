import { createSlice } from "@reduxjs/toolkit";
import { UserApi } from "./../../../Api/UserApi/UserApi";
export const CompanyProfileSlice = createSlice({
  name: "counter",
  initialState: {
    value: null,
  },
  reducers: {
    sendCompanyProfile: (state, action) => {
      const putProfileCompany = async () => {
        const res = await UserApi.putCompany(action.payload);
        console.log(res);
      };

      putProfileCompany();
    },
  },
});

const { reducer, actions } = CompanyProfileSlice;
export const { sendCompanyProfile } = actions;
export default reducer;
