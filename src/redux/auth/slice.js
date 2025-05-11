import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, logoutThunk, registerThunk } from "./operations";

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};
const slice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logoutThunk.fulfilled, (state) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      });
    // .addCase("auth/refresh/fulfilled", (state, action) => {
    //   state.user = action.payload;
    //   state.isRefreshing = false;
    // })
    // .addCase("auth/refresh/pending", (state) => {
    //   state.isRefreshing = true;
    // })
    // .addCase("auth/refresh/rejected", (state) => {
    //   state.isRefreshing = false;
    // });
  },
});

export const authReduser = slice.reducer;
