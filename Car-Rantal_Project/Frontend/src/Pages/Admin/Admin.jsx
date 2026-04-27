import React, { useEffect, useState } from "react";
import axios from "axios";
import { Form, Button, Table, Row, Col, Card } from "react-bootstrap";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar, Line } from "react-chartjs-2";
import { useNavigate } from "react-router-dom";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
);

function AdminCars() {
  const [cars, setCars] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/"); // or "/index" if your route is different
  };
  const getCars = async () => {
    const res = await axios.get("http://localhost:3000/cars");
    setCars(res.data);
  };
  
  useEffect(()=>{
    localStorage.getItem(name)
    if (!name) {
      navigate("/login")
    }
  })
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

  // 📊 Stats
  const totalCars = cars.length;
  const bookedCars = cars.filter((c) => c.booked).length;
  const revenue = cars
    .filter((c) => c.booked)
    .reduce((acc, c) => acc + Number(c.price), 0);
  const profit = Math.floor(revenue * 0.3);

  // 🔥 UPDATED BAR CHART COLORS ONLY
  const salesData = {
    labels: cars.map((c) => c.name),
    datasets: [
      {
        label: "Car Price",
        data: cars.map((c) => c.price),
        backgroundColor: "rgba(255, 193, 7, 0.8)",
        borderColor: "#ff9800",
        borderWidth: 1,
        borderRadius: 6,
      },
    ],
  };

  // 🔥 UPDATED LINE CHART COLORS ONLY
  const profitData = {
    labels: ["Revenue", "Profit"],
    datasets: [
      {
        label: "Amount",
        data: [revenue, profit],
        borderColor: "#00e5ff",
        backgroundColor: "rgba(0,229,255,0.15)",
        tension: 0.4,
        fill: true,
        pointBackgroundColor: "#00e5ff",
        pointBorderColor: "#ffffff",
        pointRadius: 5,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: "#fff",
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#ccc",
        },
        grid: {
          color: "rgba(255,255,255,0.05)",
        },
      },
      y: {
        ticks: {
          color: "#ccc",
        },
        grid: {
          color: "rgba(255,255,255,0.05)",
        },
      },
    },
  };

  return (
    <div className="admin-layout">
      {/* SIDEBAR */}
      <div className="sidebar-theme">
        <h3 className="mb-4">Admin Panel</h3>

        <div className="nav-item active">Dashboard</div>
        <div className="nav-item" onClick={() => navigate("/admin-cars")}>
          Cars
        </div>
        <div className="nav-item" onClick={() => navigate("/admin-users")}>
          Users
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="main-theme">
        <div className="top-bar">
          <h2>Dashboard</h2>

          <Button className="logout-btn" onClick={handleLogout}>
            Logout
          </Button>
        </div>

        {/* STATS */}
        <Row className="mb-4">
          <Col md={3}>
            <div className="theme-card">
              <h4>{totalCars}</h4>
              <p>Total Cars</p>
            </div>
          </Col>

          <Col md={3}>
            <div className="theme-card">
              <h4>{bookedCars}</h4>
              <p>Booked</p>
            </div>
          </Col>

          <Col md={3}>
            <div className="theme-card">
              <h4>₹{revenue}</h4>
              <p>Revenue</p>
            </div>
          </Col>

          <Col md={3}>
            <div className="theme-card">
              <h4>₹{profit}</h4>
              <p>Profit</p>
            </div>
          </Col>
        </Row>

        {/* CHARTS */}
        <Row className="mb-4">
          <Col md={6}>
            <div className="theme-card">
              <h5>Sales Graph</h5>
              <Bar data={salesData} />
            </div>
          </Col>

          <Col md={6}>
            <div className="theme-card">
              <h5>Profit Margin</h5>
              <Line data={profitData} />
            </div>
          </Col>
        </Row>
      </div>

      {/* STYLE */}
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

export default AdminCars;
