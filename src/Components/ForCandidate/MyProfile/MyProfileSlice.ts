import { createSlice } from "@reduxjs/toolkit";
import { UserApi } from "../../../Api/UserApi/UserApi";
export const MyProfileSlice = createSlice({
  name: "counter",
  initialState: {
    value: null,
  },
  reducers: {
    sendUserProfile: (state, action) => {
      const handlePutUser = async () => {
        const response = await UserApi.changeProfile(action.payload);
        if (response) {
          localStorage.setItem("user", JSON.stringify(response.data));
          window.location.reload();
          window.scrollTo(0, 0);
        }
      };
      handlePutUser();
    },
  },
});

const { reducer, actions } = MyProfileSlice;
export const { sendUserProfile } = actions;
export default reducer;
