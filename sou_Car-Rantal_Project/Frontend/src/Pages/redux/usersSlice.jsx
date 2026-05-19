import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import db from "../../../db.json";

const STORAGE_KEY = "redux_users";

const loadUsers = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return JSON.parse(saved);
  } catch (error) {
    console.error("Failed to load users from localStorage", error);
  }
  return (db.user || []).map((user) => ({ role: "user", ...user }));
};

const saveUsers = (users) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
};

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => loadUsers());

export const addUser = createAsyncThunk("users/addUser", async (user) => ({
  id: Date.now().toString(),
  role: "user",
  ...user,
}));

export const updateUser = createAsyncThunk("users/updateUser", async ({ id, data }) => ({ id, data }));
export const deleteUser = createAsyncThunk("users/deleteUser", async (id) => id);

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: loadUsers(),
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        saveUsers(state.users);
      })
      .addCase(addUser.fulfilled, (state, action) => {
        const exists = state.users.some(
          (user) => user.email?.toLowerCase() === action.payload.email?.toLowerCase()
        );
        if (!exists) state.users.push(action.payload);
        saveUsers(state.users);
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        const index = state.users.findIndex((user) => user.id === action.payload.id);
        if (index !== -1) {
          state.users[index] = {
            ...state.users[index],
            ...action.payload.data,
            password: action.payload.data.password || state.users[index].password,
          };
        }
        saveUsers(state.users);
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.users = state.users.filter((user) => user.id !== action.payload);
        saveUsers(state.users);
      });
  },
});

export default usersSlice.reducer;
