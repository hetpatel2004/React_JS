import { configureStore } from "@reduxjs/toolkit";
import carsReducer from "./carsSlice";
import usersReducer from "./usersSlice";

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    users: usersReducer,
  },
});