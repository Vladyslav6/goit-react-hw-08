import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";
import { goitAPI } from "../auth/operations";

// axios.defaults.baseURL = "https://68188cec5a4b07b9d1cfb0b6.mockapi.io";
// export const mockAPI = axios.create({
//   baseURL: "https://68188cec5a4b07b9d1cfb0b6.mockapi.io",
// });

export const fetchContactsData = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await goitAPI.get("/contacts");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContactData = createAsyncThunk(
  "contacts/deleteContact",
  async (id, thunkAPI) => {
    try {
      await goitAPI.delete(`/contacts/${id}`);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContactDataThunk = createAsyncThunk(
  "contacts/addContact",
  async (body, thunkAPI) => {
    try {
      const response = await goitAPI.post("/contacts", body);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
