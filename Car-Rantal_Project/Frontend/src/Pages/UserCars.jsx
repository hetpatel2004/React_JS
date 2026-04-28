import React, { useEffect, useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Image,
  Form,
} from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../Pages/redux/carsSlice";

import Coverphoto from "../assets/Coverphoto.png";
import luxury from "../assets/luxury.png";
import Spots from "../assets/sports.png";
import Suv from "../assets/SUV.png";
import Muv from "../assets/MUV.png";
import sedan from "../assets/sedan.png";
import Hackback from "../assets/hatchback.png";

function UserCars() {
  const navigate = useNavigate();
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem("user"));

  const dispatch = useDispatch();
  const cars = useSelector((state) => state.cars.cars);

  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  const handleBooking = (car) => {
  const confirm = window.confirm(
    `Do you really want to book ${car.name}?`
  );

  if (!confirm) return;

  // Get existing bookings
  const existingBookings =
    JSON.parse(localStorage.getItem("bookings")) || [];

  // Create new booking object
  const newBooking = {
    id: Date.now(),
    ...car,
    user: user?.email,
    date: new Date().toLocaleString(),
  };

  // Save updated bookings
  localStorage.setItem(
    "bookings",
    JSON.stringify([...existingBookings, newBooking])
  );

  alert("Car Booked Successfully!");

  // Redirect to bookings page
  navigate("/user/bookings");
};

  const isActive = (path) => location.pathname === path;

  const displayedCars = showAll ? cars : cars.slice(0, 6);

  return (
    <div className="user-layout">
      {/* SIDEBAR */}
      <div className="sidebar-theme">
        <div className="user-info">
          <h4>{user?.name}</h4>
          <small>{user?.email}</small>
        </div>

        <div
          className={`nav-item ${isActive("/user") && "active"}`}
          onClick={() => navigate("/user")}
        >
          Dashboard
        </div>

        <div
          className={`nav-item ${isActive("/user/cars") && "active"}`}
          onClick={() => navigate("/user/cars")}
        >
          Cars
        </div>

        <div
          className={`nav-item ${isActive("/user/bookings") && "active"}`}
          onClick={() => navigate("/user/bookings")}
        >
          Bookings
        </div>

        <div
          className={`nav-item ${isActive("/user/profile") && "active"}`}
          onClick={() => navigate("/user/profile")}
        >
          Profile
        </div>

        <div className="nav-item logout" onClick={handleLogout}>
          Logout
        </div>
      </div>

      {/* MAIN */}
      <div className="main-theme">
        {/* 🔥 CARS FROM API */}
        <Container
          className="py-4"
          style={{ background: "#fff", borderRadius: "10px" }}
        >
          <Row className="mb-3 align-items-center">
            <Col>
              <h4 className="fw-bold text-dark">Available Cars</h4>
            </Col>

            <Col className="text-end">
              <Button
                variant="outline-dark"
                size="sm"
                onClick={() => setShowAll(!showAll)}
              >
                {showAll ? "Show Less" : "See All"}
              </Button>
            </Col>
          </Row>

          <Row className="g-3">
            {displayedCars.map((car) => (
              <Col md={4} key={car.id}>
                <div className="simple-card">
                  <img src={car.image} alt={car.name} />

                  <div className="p-2 text-dark">
                    <h6 className="fw-bold">{car.name}</h6>

                    <p className="mb-1">
                      <b>₹{car.price}</b> /day
                    </p>
                    <p className="mb-1">Type: {car.type}</p>
                    <p className="mb-1">Fuel: {car.fueltype}</p>
                    <p className="mb-2">City: {car.city}</p>

                    <Button
                      size="sm"
                      variant="warning"
                      className="w-100"
                      onClick={() => handleBooking(car)}>
                      Book Now
                    </Button>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      {/* STYLES */}
      <style>{`
        .user-layout {
          display: flex;
          min-height: 100vh;
          background: #0b0b0b;
          color: #fff;
        }

        .sidebar-theme {
          width: 250px;
          background: #111;
          padding: 20px;
          border-right: 1px solid #222;
        }

        .user-info {
          margin-bottom: 30px;
          padding-bottom: 10px;
          border-bottom: 1px solid #333;
        }

        .nav-item {
          padding: 12px;
          margin: 10px 0;
          border-radius: 10px;
          cursor: pointer;
          color: #aaa;
          transition: 0.3s;
        }

        .nav-item:hover {
          background: #ffc107;
          color: #000;
        }

        .nav-item.active {
          background: #ffc107;
          color: #000;
          font-weight: bold;
        }

        .logout {
          margin-top: 40px;
          background: #dc3545;
          color: #fff;
        }

        .main-theme {
          flex: 1;
          padding: 20px;
          overflow-y: auto;
        }

        .yellow-btn {
          background: #ffc107;
          border: none;
          color: #000;
          font-weight: bold;
        }

        .simple-card {
          border: 1px solid #ddd;
          border-radius: 10px;
          overflow: hidden;
          background: #fff;
          transition: 0.2s;
        }

        .simple-card img {
          width: 100%;
          height: 180px;
          object-fit: cover;
        }

        .simple-card:hover {
          transform: scale(1.02);
        }

        p {
          font-size: 13px;
        }
      `}</style>
    </div>
  );
}

export default UserCars;
