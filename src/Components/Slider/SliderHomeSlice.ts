import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserApi } from "./../../Api/UserApi/UserApi";

export const ChangeSearchTitle = createAsyncThunk(
  "users/changeSearchTitle",
  async (payload: any) => {
    const getJobs = await UserApi.getJob({
      page: 1,
      limit: 5,
      title: payload.title,
      tag: payload.tag,
      address: payload.address,
    });

    const newObj = {
      search: {
        page: 1,
        limit: 5,
        title: payload.title,
        tag: payload.tag,
        address: payload.address,
      },
      jobs: getJobs.data.jobs,
      total: getJobs.data.total,
    };

    return newObj;
  }
);

export const SliderHomeSlice = createSlice({
  name: "counter",
  initialState: {
    jobs: [],
    total: null,
    page: 1,
    search: {
      title: undefined,
      address: undefined,
      tag: undefined,
    },
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(ChangeSearchTitle.fulfilled, (state: any, action: any) => {
        state.jobs = action.payload.jobs;
        state.total = action.payload.total;
        state.search = action.payload.search;
      })
      .addCase(ChangeSearchTitle.rejected, (state, action) => {
        throw action.error;
      });
  },
});

const { reducer } = SliderHomeSlice;
export default reducer;
