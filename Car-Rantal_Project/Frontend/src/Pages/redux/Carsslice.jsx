import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// 🔥 GET CARS
export const fetchCars = createAsyncThunk("cars/fetchCars", async () => {
  const res = await axios.get("http://localhost:3000/cars");
  return res.data;
});

// 🔥 ADD CAR
export const addCar = createAsyncThunk("cars/addCar", async (car) => {
  await axios.post("http://localhost:3000/cars", car);
  return car;
});

// 🔥 DELETE CAR
export const deleteCar = createAsyncThunk("cars/deleteCar", async (id) => {
  await axios.delete(`http://localhost:3000/cars/${id}`);
  return id;
});

// 🔥 TOGGLE BOOKED
export const toggleBooked = createAsyncThunk("cars/toggleBooked", async (car) => {
  await axios.patch(`http://localhost:3000/cars/${car.id}`, {
    booked: !car.booked,
  });
  return car.id;
});

// 🔥 TOGGLE TRENDING
export const toggleTrending = createAsyncThunk("cars/toggleTrending", async (car) => {
  await axios.patch(`http://localhost:3000/cars/${car.id}`, {
    trending: !car.trending,
  });
  return car.id;
});



const carsSlice = createSlice({
  name: "cars",
  initialState: {
    cars: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.cars = action.payload;
      })
      .addCase(deleteCar.fulfilled, (state, action) => {
        state.cars = state.cars.filter((c) => c.id !== action.payload);
      });
  },
});

export default carsSlice.reducer;