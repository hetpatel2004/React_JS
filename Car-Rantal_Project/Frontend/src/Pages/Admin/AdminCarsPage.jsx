import React, { useEffect, useState } from "react";
import axios from "axios";
import { Form, Button, Table, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function AdminCarsPage() {
  const [cars, setCars] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const navigate = useNavigate();

  const getCars = async () => {
    const res = await axios.get("http://localhost:3000/cars");
    setCars(res.data);
  };

  useEffect(() => {
    getCars();
  }, []);

  const addCar = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:3000/cars", {
      name,
      price,
      image,
      booked: false,
      trending: false,
    });

    setName("");
    setPrice("");
    setImage("");
    getCars();
  };

  const deleteCar = async (id) => {
    await axios.delete(`http://localhost:3000/cars/${id}`);
    getCars();
  };

  const toggleBooked = async (car) => {
    await axios.patch(`http://localhost:3000/cars/${car.id}`, {
      booked: !car.booked,
    });
    getCars();
  };

  const toggleTrending = async (car) => {
    await axios.patch(`http://localhost:3000/cars/${car.id}`, {
      trending: !car.trending,
    });
    getCars();
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
        </div>

        {/* ADD CAR */}
        <div className="theme-card mb-4">
          <h4>Add New Car</h4>

          <Form onSubmit={addCar}>
            <Row className="g-3">
              <Col md={4}>
                <Form.Control
                  placeholder="Car Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Col>

              <Col md={3}>
                <Form.Control
                  placeholder="Price ₹"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </Col>

              <Col md={3}>
                <Form.Control
                  placeholder="Image URL"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
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

        {/* TABLE */}
        <div className="theme-card">
          <h4>All Cars</h4>

          <Table hover className="mt-3 text-white align-middle">
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
                      className={car.booked ? "btn-danger" : "yellow-btn"}
                      onClick={() => toggleBooked(car)}
                    >
                      {car.booked ? "Booked" : "Available"}
                    </Button>
                  </td>

                  <td>
                    <Button
                      size="sm"
                      className="yellow-btn"
                      onClick={() => toggleTrending(car)}
                    >
                      {car.trending ? "Yes" : "No"}
                    </Button>
                  </td>

                  <td>
                    <Button
                      size="sm"
                      variant="danger"
                      onClick={() => deleteCar(car.id)}
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
          padding: 10px;
          margin: 10px 0;
          border-radius: 8px;
          color: #aaa;
          cursor: pointer;
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
          border-radius: 12px;
          border: 1px solid rgba(255,193,7,0.2);
          transition: 0.3s;
        }

        .theme-card:hover {
          box-shadow: 0 0 20px rgba(255,193,7,0.3);
          transform: translateY(-3px);
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
      `}</style>
    </div>
  );
}

export default AdminCarsPage;