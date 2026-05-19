import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import "bootstrap/dist/css/bootstrap.min.css";
import Index_two from "./Index_two";
import Login from "./Login";
import Register from "./Ragister";
import Available_cars from "./Available_cars";
import Contect from "./Contect";
import AdminCars from "./Admin/Admin";
import AdminUsers from "./Admin/AdminUsers_details";
import AdminCarsPage from "./Admin/AdminCarsPage";
import User from "./User";
import UserCars from "./UserCars";
import UserBookings from "./UserBookings";
import UserProfile from "./UserProfile";
import ProtectedRoute from "./ProtectedRoute";

function Main_route() {
  return (
    <Routes>
      <Route path="/" element={<Index_two />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="/available_cars"
        element={
          <ProtectedRoute>
            <Available_cars />
          </ProtectedRoute>
        }
      />
      <Route
        path="/contect"
        element={
          <ProtectedRoute>
            <Contect />
          </ProtectedRoute>
        }
      />
      <Route
        path="/about"
        element={
          <ProtectedRoute>
            <About />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <AdminCars />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin-users"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <AdminUsers />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin-cars"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <AdminCarsPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/user"
        element={
          <ProtectedRoute allowedRoles={["user"]}>
            <User />
          </ProtectedRoute>
        }
      />
      <Route
        path="/user/cars"
        element={
          <ProtectedRoute allowedRoles={["user"]}>
            <UserCars />
          </ProtectedRoute>
        }
      />
      <Route
        path="/user/bookings"
        element={
          <ProtectedRoute allowedRoles={["user"]}>
            <UserBookings />
          </ProtectedRoute>
        }
      />
      <Route
        path="/user/profile"
        element={
          <ProtectedRoute allowedRoles={["user"]}>
            <UserProfile />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<Index_two />} />
    </Routes>
  );
}

export default Main_route;
