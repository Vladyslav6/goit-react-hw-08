import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const goitAPI = axios.create({
  baseURL: "https://connections-api.goit.global",
});
const setAuthHeader = (token) => {
  goitAPI.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const clearAuthHeader = () => {
  goitAPI.defaults.headers.common.Authorization = "";
};
///
///
export const registerThunk = createAsyncThunk(
  "auth/register",
  async (body, thunkAPI) => {
    try {
      const response = await goitAPI.post("/users/signup", body);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  "auth/login",
  async (body, thunkAPI) => {
    try {
      const response = await goitAPI.post("/users/login", body);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      await goitAPI.post("/users/logout");
      clearAuthHeader();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshThunk = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue("No valid token");
    }
    setAuthHeader(persistedToken);
    try {
      const response = await goitAPI.get("/users/current");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
