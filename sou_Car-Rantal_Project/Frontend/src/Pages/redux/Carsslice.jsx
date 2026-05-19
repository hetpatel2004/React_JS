import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import db from "../../../db.json";

const STORAGE_KEY = "redux_cars";

const loadCars = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return JSON.parse(saved);
  } catch (error) {
    console.error("Failed to load cars from localStorage", error);
  }
  return db.cars || [];
};

const saveCars = (cars) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cars));
};

export const fetchCars = createAsyncThunk("cars/fetchCars", async () => loadCars());

export const addCar = createAsyncThunk("cars/addCar", async (car) => ({
  id: Date.now().toString(),
  type: car.type || "Manual",
  city: car.city || "Ahmedabad",
  fueltype: car.fueltype || "petrol",
  brandImage: car.brandImage || "",
  booked: false,
  trending: false,
  ...car,
  price: Number(car.price) || 0,
}));

export const deleteCar = createAsyncThunk("cars/deleteCar", async (id) => id);
export const toggleBooked = createAsyncThunk("cars/toggleBooked", async (car) => car.id);
export const toggleTrending = createAsyncThunk("cars/toggleTrending", async (car) => car.id);

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    cars: loadCars(),
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.cars = action.payload;
        saveCars(state.cars);
      })
      .addCase(addCar.fulfilled, (state, action) => {
        state.cars.push(action.payload);
        saveCars(state.cars);
      })
      .addCase(deleteCar.fulfilled, (state, action) => {
        state.cars = state.cars.filter((car) => car.id !== action.payload);
        saveCars(state.cars);
      })
      .addCase(toggleBooked.fulfilled, (state, action) => {
        const car = state.cars.find((item) => item.id === action.payload);
        if (car) car.booked = !car.booked;
        saveCars(state.cars);
      })
      .addCase(toggleTrending.fulfilled, (state, action) => {
        const car = state.cars.find((item) => item.id === action.payload);
        if (car) car.trending = !car.trending;
        saveCars(state.cars);
      });
  },
});

export default carsSlice.reducer;
