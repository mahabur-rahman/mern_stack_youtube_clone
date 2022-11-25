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

    // subscription
    subscription: (state, action) => {
      if (state.currentUser.subscribedUsers.includes(action.payload)) {
        state.currentUser.subscribedUsers.splice(
          state.currentUser.subscribedUsers.findIndex(
            (channelId) => channelId === action.payload
          ),
          1
        );
      } else {
        state.currentUser.subscribedUsers.push(action.payload);
      }
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout, subscription } =
  userSlice.actions;

export default userSlice.reducer;
