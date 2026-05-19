import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function UserDashboard() {
  const navigate = useNavigate();
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem("user"));

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

      {/* MAIN DASHBOARD */}
      <div className="main-theme">
        <Container fluid>
          {/* WELCOME */}
          <div className="welcome-box">
            <h2>Welcome back, {user?.name} 👋</h2>
            <p>Manage your bookings, explore cars, and enjoy your ride.</p>

            <Button
              className="yellow-btn mt-2"
              onClick={() => navigate("/user/cars")}
            >
              Browse Cars
            </Button>
          </div>

          {/* STATS */}
          <Row className="mt-4 g-4">
            <Col md={4}>
              <Card className="dash-card">
                <h5>Total Bookings</h5>
                <h2>12</h2>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="dash-card">
                <h5>Active Rentals</h5>
                <h2>2</h2>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="dash-card">
                <h5>Available Cars</h5>
                <h2>25+</h2>
              </Card>
            </Col>
          </Row>

          {/* QUICK ACTIONS */}
          <Row className="mt-4 g-4">
            <Col md={6}>
              <Card className="action-card">
                <h5>🚗 Book a New Car</h5>
                <p>Explore available cars and book instantly.</p>
                <Button
                  className="yellow-btn"
                  onClick={() => navigate("/user/cars")}
                >
                  View Cars
                </Button>
              </Card>
            </Col>

            <Col md={6}>
              <Card className="action-card">
                <h5>📄 View Your Bookings</h5>
                <p>Check your current and past bookings.</p>
                <Button
                  className="yellow-btn"
                  onClick={() => navigate("/user/bookings")}
                >
                  My Bookings
                </Button>
              </Card>
            </Col>
          </Row>

          {/* RECENT ACTIVITY */}
          <div className="recent-box mt-4">
            <h5>Recent Activity</h5>

            <ul>
              <li>Booked Tata Harrier - 2 days ago</li>
              <li>Viewed Hyundai Creta</li>
              <li>Updated profile details</li>
            </ul>
          </div>
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
          padding: 25px;
        }

        .welcome-box {
          background: #111;
          padding: 25px;
          border-radius: 12px;
          border: 1px solid #222;
        }

        .dash-card {
          background: #111;
          padding: 20px;
          border-radius: 12px;
          text-align: center;
          border: 1px solid #222;
        }

        .action-card {
          background: #111;
          padding: 20px;
          border-radius: 12px;
          border: 1px solid #222;
        }

        .recent-box {
          background: #111;
          padding: 20px;
          border-radius: 12px;
          border: 1px solid #222;
        }

        .recent-box ul {
          margin: 0;
          padding-left: 18px;
        }

        .yellow-btn {
          background: #ffc107;
          border: none;
          color: #000;
          font-weight: bold;
        }


        .main-theme,
.main-theme h1,
.main-theme h2,
.main-theme h3,
.main-theme h4,
.main-theme h5,
.main-theme h6,
.main-theme p,
.main-theme span,
.main-theme small,
.main-theme li {
  color: #fff !important;
}
  .welcome-box,
.dash-card,
.action-card,
.recent-box {
  color: #fff !important;
}
      `}</style>
    </div>
  );
}

export default UserDashboard;
