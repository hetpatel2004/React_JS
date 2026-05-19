import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function UserProfile() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const data =
      JSON.parse(localStorage.getItem("confirmedBookings")) || [];
    setBookings(data);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  const isActive = (path) => location.pathname === path;

  return (
    <div className="user-layout">

      {/* SIDEBAR */}
      <div className="sidebar-theme">
        <div className="user-info">
          <h4>{user?.name}</h4>
          <small>{user?.email}</small>
        </div>

        <div className={`nav-item ${isActive("/user") && "active"}`} onClick={() => navigate("/user")}>
          Dashboard
        </div>

        <div className={`nav-item ${isActive("/user/cars") && "active"}`} onClick={() => navigate("/user/cars")}>
          Cars
        </div>

        <div className={`nav-item ${isActive("/user/bookings") && "active"}`} onClick={() => navigate("/user/bookings")}>
          Bookings
        </div>

        <div className={`nav-item ${isActive("/user/profile") && "active"}`} onClick={() => navigate("/user/profile")}>
          Profile
        </div>

        <div className="nav-item logout" onClick={handleLogout}>
          Logout
        </div>
      </div>

      {/* MAIN */}
      <div className="main-theme">

        {/* PROFILE INFO */}
        <div className="profile-card">
          <h3>My Profile</h3>

          <p><strong>Name:</strong> {user?.name}</p>
          <p><strong>Email:</strong> {user?.email}</p>
          <p><strong>User ID:</strong> {user?.id}</p>
        </div>

        {/* BOOKINGS */}
        <div className="booking-section">
          <h4 className="mt-4">My Confirmed Bookings</h4>

          {bookings.length === 0 ? (
            <p>No bookings yet</p>
          ) : (
            bookings.map((b, i) => (
              <div key={i} className="booking-box">
                <h5>{b.name}</h5>
                <p>₹{b.price} / day</p>
                <p>Days: {b.days}</p>
                <p>Date: {b.bookingDate}</p>
                <p>Total: ₹{b.total}</p>
              </div>
            ))
          )}
        </div>

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
          border-bottom: 1px solid #333;
          padding-bottom: 10px;
        }

        .nav-item {
          padding: 12px;
          margin: 10px 0;
          border-radius: 10px;
          cursor: pointer;
          color: #aaa;
        }

        .nav-item:hover {
          background: #ffc107;
          color: #000;
        }

        .nav-item.active {
          background: #ffc107;
          color: #000;
        }

        .logout {
          margin-top: 40px;
          background: #dc3545;
          color: #fff;
        }

        .main-theme {
          flex: 1;
          padding: 20px;
        }

        .profile-card {
          background: #111;
          padding: 20px;
          border-radius: 10px;
          border: 1px solid #222;
          width: 350px;
        }

        .booking-section {
          margin-top: 20px;
        }

        .booking-box {
          background: #111;
          padding: 15px;
          border-radius: 10px;
          margin-top: 10px;
          border: 1px solid #222;
        }
      `}</style>
    </div>
  );
}

export default UserProfile;