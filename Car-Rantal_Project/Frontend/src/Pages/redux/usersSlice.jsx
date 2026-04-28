import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API = "http://localhost:3000/user";

// 🔥 GET USERS
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const res = await axios.get(API);
  return res.data;
});

// 🔥 ADD USER
export const addUser = createAsyncThunk("users/addUser", async (user) => {
  await axios.post(API, user);
});

// 🔥 UPDATE USER
export const updateUser = createAsyncThunk("users/updateUser", async ({ id, data }) => {
  await axios.put(`${API}/${id}`, data);
});

// 🔥 DELETE USER
export const deleteUser = createAsyncThunk("users/deleteUser", async (id) => {
  await axios.delete(`${API}/${id}`);
});

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });
  },
});

export default usersSlice.reducer;