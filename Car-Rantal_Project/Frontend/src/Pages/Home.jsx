import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function Home() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/cars")
      .then((res) => setCars(res.data));
  }, []);

  return (
    <>
      {/* 🔥 HERO SECTION */}
      <div className="hero">
        <div className="hero-content">
          <h1>Drive Your Dream Car</h1>
          <p>Luxury • Comfort • Performance</p>
        </div>
      </div>

      <Container className="mt-5">

        {/* 🔥 TRENDING */}
        <h2 className="section-title">🔥 Trending Cars</h2>
        <Row>
          {cars.filter(car => car.trending).map(car => (
            <Col md={4} key={car.id} className="mb-4">
              <Card className="premium-card">
                <div className="img-box">
                  <Card.Img src={car.image} />
                  <span className="badge-trending">Trending</span>
                </div>

                <Card.Body>
                  <Card.Title>{car.name}</Card.Title>
                  <Card.Text>₹{car.price}</Card.Text>

                  <Button disabled={car.booked} className="btn-premium">
                    {car.booked ? "Booked" : "Book Now"}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* 🚗 ALL CARS */}
        <h2 className="section-title mt-5">🚗 All Cars</h2>
        <Row>
          {cars.map(car => (
            <Col md={4} key={car.id} className="mb-4">
              <Card className="premium-card">
                <div className="img-box">
                  <Card.Img src={car.image} />
                  {car.trending && (
                    <span className="badge-trending">Trending</span>
                  )}
                </div>

                <Card.Body>
                  <Card.Title>{car.name}</Card.Title>
                  <Card.Text>₹{car.price}</Card.Text>

                  <Button disabled={car.booked} className="btn-premium">
                    {car.booked ? "Booked" : "Book Now"}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

      </Container>

      {/* 🔥 PREMIUM STYLES */}
      <style>{`

        body {
          background: #0f172a;
          color: #fff;
        }

        /* HERO */
        .hero {
          height: 80vh;
          background: url("https://images.unsplash.com/photo-1492144534655-ae79c964c9d7") center/cover no-repeat;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .hero::after {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.6);
        }

        .hero-content {
          position: relative;
          text-align: center;
          z-index: 2;
        }

        .hero h1 {
          font-size: 50px;
          font-weight: bold;
        }

        .hero p {
          font-size: 20px;
          opacity: 0.8;
        }

        /* SECTION */
        .section-title {
          font-weight: bold;
          margin-bottom: 20px;
        }

        /* CARD */
        .premium-card {
          background: #1e293b;
          border: none;
          border-radius: 15px;
          overflow: hidden;
          transition: 0.4s;
          box-shadow: 0 10px 30px rgba(0,0,0,0.4);
        }

        .premium-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 20px 50px rgba(0,0,0,0.7);
        }

        /* IMAGE */
        .img-box {
          position: relative;
          overflow: hidden;
        }

        .img-box img {
          height: 220px;
          object-fit: cover;
          transition: 0.4s;
        }

        .premium-card:hover img {
          transform: scale(1.1);
        }

        /* BADGE */
        .badge-trending {
          position: absolute;
          top: 10px;
          left: 10px;
          background: #f59e0b;
          padding: 5px 10px;
          border-radius: 6px;
          font-size: 12px;
        }

        /* BUTTON */
        .btn-premium {
          width: 100%;
          border-radius: 10px;
          font-weight: bold;
          background: linear-gradient(45deg, #3b82f6, #06b6d4);
          border: none;
        }

        .btn-premium:hover {
          background: linear-gradient(45deg, #2563eb, #0891b2);
        }

        .btn-premium:disabled {
          background: #555;
        }

      `}</style>
    </>
  );
}

export default Home;