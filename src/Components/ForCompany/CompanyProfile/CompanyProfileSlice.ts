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
        const response = await UserApi.putCompany(action.payload);
        if (response) {
          localStorage.setItem("user", JSON.stringify(response.data));
          window.location.reload();
          window.scrollTo(0, 0);
        }
      };

      putProfileCompany();
    },
  },
});

const { reducer, actions } = CompanyProfileSlice;
export const { sendCompanyProfile } = actions;
export default reducer;
