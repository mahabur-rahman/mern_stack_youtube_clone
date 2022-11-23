import { createSlice } from "@reduxjs/toolkit";

// initialState
const initialState = {
  currentVideo: null,
  loading: false,
  error: false,
};

// create slice
export const videoSlice = createSlice({
  name: "video",
  initialState,

  reducers: {
    // fetch videos
    fetchStart: (state) => {
      state.loading = true;
    },

    fetchSuccess: (state, action) => {
      state.loading = false;
      state.currentVideo = action.payload;
    },

    fetchFailure: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { fetchStart, fetchSuccess, fetchFailure } = videoSlice.actions;

export default videoSlice.reducer;
