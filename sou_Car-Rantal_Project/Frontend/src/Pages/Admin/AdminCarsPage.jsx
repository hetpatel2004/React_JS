import React, { useEffect, useState } from "react";
import { Form, Button, Table, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchCars,
  addCar,
  deleteCar,
  toggleBooked,
  toggleTrending,
} from "../redux/carsSlice";

function AdminCarsPage() {
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.cars.cars);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const navigate = useNavigate();

  const handleLogout = () => {
  localStorage.removeItem("role");
  localStorage.removeItem("user");
  navigate("/");
};

useEffect(() => {
  if (localStorage.getItem("role") !== "admin") navigate("/login");
}, [navigate]);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const handleAdd = (e) => {
    e.preventDefault();

    dispatch(
      addCar({
        name,
        price,
        image,
        booked: false,
        trending: false,
      }),
    );

    setName("");
    setPrice("");
    setImage("");

  };

  return (
    <div className="admin-layout">
      {/* SIDEBAR */}
      <div className="sidebar-theme">
        <h3 className="mb-4">Admin Panel</h3>

        <div className="nav-item" onClick={() => navigate("/admin")}>
          Dashboard
        </div>

        <div className="nav-item active">Cars</div>

        <div className="nav-item" onClick={() => navigate("/admin-users")}>
          Users
        </div>
      </div>

      {/* MAIN */}
      <div className="main-theme">
        {/* HEADER */}

        <div className="top-bar">
          <h2>Car Management</h2>

          <Button className="logout-btn" onClick={handleLogout}>
            Logout
          </Button>
        </div>

        {/* ADD CARD */}
        <div className="theme-card mb-4">
          <h4>Add New Car</h4>

          <Form onSubmit={handleAdd}>
            <Row className="g-3">
              <Col md={4}>
                <Form.Control
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Car Name"
                />
              </Col>

              <Col md={3}>
                <Form.Control
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="Price ₹"
                />
              </Col>

              <Col md={3}>
                <Form.Control
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  placeholder="Image URL"
                />
              </Col>

              <Col md={2}>
                <Button className="yellow-btn w-100" type="submit">
                  Add
                </Button>
              </Col>
            </Row>
          </Form>
        </div>

        {/* TABLE CARD */}
        <div className="theme-card">
          <h4>All Cars</h4>

          <Table hover responsive className="mt-3 text-white align-middle">
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Status</th>
                <th>Trending</th>
                <th style={{ width: "150px" }}>Action</th>
              </tr>
            </thead>

            <tbody>
              {cars.map((car) => (
                <tr key={car.id}>
                  <td>{car.name}</td>
                  <td>₹{car.price}</td>

                  <td>
                    <Button
                      size="sm"
                      className={
                        car.booked
                          ? "btn-danger status-btn"
                          : "yellow-btn status-btn"
                      }
                      onClick={() =>
                        dispatch(toggleBooked(car))
                      }
                    >
                      {car.booked ? "Booked" : "Available"}
                    </Button>
                  </td>

                  <td>
                    <Button
                      size="sm"
                      className="yellow-btn status-btn"
                      onClick={() =>
                        dispatch(toggleTrending(car))
                      }
                    >
                      {car.trending ? "Yes" : "No"}
                    </Button>
                  </td>

                  <td>
                    <Button
                      size="sm"
                      variant="danger"
                      className="delete-btn"
                      onClick={() => dispatch(deleteCar(car.id))}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>

      {/* STYLES */}
      <style>{`
        .admin-layout {
          display: flex;
          background: #0b0b0b;
          min-height: 100vh;
          color: #fff;
        }

        .sidebar-theme {
          width: 220px;
          background: #111;
          padding: 20px;
          border-right: 1px solid #222;
        }

        .nav-item {
          padding: 12px;
          margin: 10px 0;
          border-radius: 10px;
          color: #aaa;
          cursor: pointer;
          transition: 0.3s;
        }

        .nav-item:hover {
          background: #ffc107;
          color: #000;
          transform: translateX(5px);
        }

        .nav-item.active {
          background: #ffc107;
          color: #000;
          font-weight: bold;
        }

        .main-theme {
          flex: 1;
          padding: 25px;
        }

        .top-bar {
          margin-bottom: 20px;
        }

        .theme-card {
          background: #111;
          padding: 20px;
          border-radius: 14px;
          border: 1px solid rgba(255,193,7,0.2);
          transition: 0.3s;
        }

        .theme-card:hover {
          box-shadow: 0 0 25px rgba(255,193,7,0.25);
          transform: translateY(-4px);
        }

        th {
          color: #ffc107;
        }

        input {
          background: #1a1a1a !important;
          border: 1px solid #333 !important;
          color: #fff !important;
        }

        input:focus {
          border-color: #ffc107 !important;
          box-shadow: 0 0 8px rgba(255,193,7,0.4);
        }

        .yellow-btn {
          background: #ffc107;
          border: none;
          color: #000;
          font-weight: bold;
          border-radius: 8px;
        }

        .yellow-btn:hover {
          background: #e0a800;
        }

        .status-btn {
          min-width: 100px;
        }

        .delete-btn {
          border-radius: 8px;
          font-weight: bold;
        }
        .top-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .logout-btn {
          background: #dc3545;
          border: none;
          padding: 8px 16px;
          border-radius: 8px;
          color: #fff;
          font-weight: bold;
        }

        .logout-btn:hover {
          background: #bb2d3b;
        }
        
      `}</style>
    </div>
  );
}

export default AdminCarsPage;
