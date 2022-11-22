import { createSlice } from "@reduxjs/toolkit";

// init state
const initialState = {
  currentUser: null,
  loading: false,
  error: false,
};

// create slice
export const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    // login
    loginStart: (state) => {
      state.loading = true;
    },

    loginSuccess: (state, action) => {
      state.loading = false;
      state.currentUser = action.payload;
    },

    loginFailure: (state, action) => {
      state.loading = false;
      state.error = true;
    },

    // logout
    logout: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = false;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure } = userSlice.actions;

export default userSlice.reducer;
