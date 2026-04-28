import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import About from "./About";
import "bootstrap/dist/css/bootstrap.min.css";
import Index_two from "./Index_two";
import Login from "./Login";
import Register from "./Ragister"
import Available_cars from "./Available_cars";
import Contect from "./Contect";
// import Home from './Home'
import Admin from "./Admin/Admin";
import AdminUsers from "./Admin/AdminUsers_details";
import AdminCarsPage from "./Admin/AdminCarsPage";
import User from "./User";
import UserCars from "./UserCars";
import UserBookings from "./UserBookings";
import UserProfile from "./UserProfile";
import AdminCars from "./Admin/Admin";
function Main_route() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index_two />} />
        <Route path="/available_cars" element={<Available_cars />} />
        <Route path="/contect" element={<Contect />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<AdminCars />} />
        <Route path="/admin-users" element={<AdminUsers />} />
        <Route path="/admin-cars" element={<AdminCarsPage />} />
        <Route path="/user" element={<User />} />
        <Route path="/user/cars" element={<UserCars />} />
        <Route path="/user/bookings" element={<UserBookings />} />
        <Route path="/user/profile" element={<UserProfile />} />
      </Routes>
    </>
  );
}

export default Main_route;
