import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";

function UserBookings() {
  const [bookings, setBookings] = useState([]);
  const [days, setDays] = useState({});
  const [dates, setDates] = useState({});
  const user = JSON.parse(localStorage.getItem("user"));

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const allBookings = JSON.parse(localStorage.getItem("bookings")) || [];

    const userBookings = allBookings.filter((b) => b.user === user?.email);

    setBookings(userBookings);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  const isActive = (path) => location.pathname === path;

  const handleDaysChange = (id, value) => {
    setDays({ ...days, [id]: value });
  };

  const handleConfirm = (car) => {
  const bookingDate = dates[car.id];
  const totalDays = days[car.id] || 1;

  if (!bookingDate) {
    alert("Please select booking date");
    return;
  }

  const confirmedBookings =
    JSON.parse(localStorage.getItem("confirmedBookings")) || [];

  const newBooking = {
    ...car,
    bookingDate,
    days: totalDays,
    total: totalDays * car.price,
  };

  localStorage.setItem(
    "confirmedBookings",
    JSON.stringify([...confirmedBookings, newBooking])
  );

  alert("Booking Confirmed!");

  navigate("/user/profile");
};

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
        <Container>
          <h3 className="mb-4 text-white">My Bookings</h3>

          <Row>
            {bookings.length === 0 ? (
              <p className="text-white">No bookings yet</p>
            ) : (
              bookings.map((b) => {
                const totalDays = days[b.id] || 1;
                const totalPrice = totalDays * b.price;

                return (
                  <Col md={4} key={b.id} className="mb-4">
                    <Card className="booking-card">
                      <Card.Img
                        variant="top"
                        src={b.image}
                        className="booking-img"
                      />

                      <Card.Body>
                        <Card.Title>{b.name}</Card.Title>

                        <p>₹{b.price} / day</p>
                        <p>Type: {b.type}</p>
                        <p>Fuel: {b.fueltype}</p>
                        <p>City: {b.city}</p>

                        {/* DAYS INPUT */}
                        <Form.Group className="mb-2">
                          <Form.Label>Number of Days</Form.Label>
                          <Form.Control
                            type="number"
                            min="1"
                            value={totalDays}
                            onChange={(e) =>
                              handleDaysChange(b.id, e.target.value)
                            }
                          />
                        </Form.Group>

                        <Form.Group className="mb-2">
                          <Form.Label>Booking Date</Form.Label>
                          <Form.Control
                            type="date"
                            value={dates[b.id] || ""}
                            onChange={(e) =>
                              setDates({ ...dates, [b.id]: e.target.value })
                            }
                          />
                        </Form.Group>

                        {/* POLICIES */}
                        <div className="policy-box">
                          <small>✔ Car Insurance Included</small>
                          <br />
                          <small>✔ Tyre Insurance Included</small>
                          <br />
                          <small>⚠ Damage will cost extra</small>
                        </div>

                        {/* FINAL BILL */}
                        <h5 className="mt-3">Total: ₹{totalPrice}</h5>

                        <Button
                          variant="warning"
                          className="w-100"
                          onClick={() => handleConfirm(b)}>
                          Confirm Booking
                        </Button>

                        <small className="text-muted d-block mt-2">
                          Booked on: {b.date}
                        </small>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })
            )}
          </Row>
        </Container>
      </div>

      {/* STYLES */}
      <style>{`
        .user-layout {
          display: flex;
          min-height: 100vh;
          background: #0b0b0b;
        }

        .sidebar-theme {
          width: 250px;
          background: #111;
          padding: 20px;
          border-right: 1px solid #222;
          color: #fff;
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
        }

        .booking-card {
          background: #111;
          color: #fff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 5px 20px rgba(0,0,0,0.3);
        }

        .booking-img {
          height: 180px;
          object-fit: cover;
        }

        .policy-box {
          background: #222;
          padding: 10px;
          border-radius: 8px;
          margin-top: 10px;
        }

        input {
          background: #222 !important;
          color: #fff !important;
          border: 1px solid #444 !important;
        }
      `}</style>
    </div>
  );
}

export default UserBookings;
