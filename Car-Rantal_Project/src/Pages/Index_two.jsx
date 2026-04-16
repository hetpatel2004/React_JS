import React from "react";
import Nav_bar from "./Nav_bar";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Image,
  Form,
} from "react-bootstrap";
import "../Pages/style_two.css";

import Coverphoto from "../assets/Coverphoto.png";
import luxury from "../assets/luxury.png";
import Spots from "../assets/sports.png";
import Suv from "../assets/SUV.png";
import Muv from "../assets/MUV.png";
import Electric from "../assets/electric.png";
import Compect_SUV from "../assets/Compect_SUV.png";
import sedan from "../assets/sedan.png";
import Hackback from "../assets/hatchback.png";

import Hundaicreta from "../assets/Hundaicreta.png";
import Tataharrier from "../assets/Tataharrier.png";
import Xuv700 from "../assets/XUV700.png";

import maruti from "../assets/Suzuki.png";
import tata from "../assets/Tata.png";
import mahindra from "../assets/Mahindra.png";

function Index() {
  return (
    <>
      {/* <Nav_bar />
      {/* ----------------------------------------------------------------------------- */}
      {/* Cover Image */}
      {/* <Ima.ge src={Coverphoto} fluid className="cover_img" /> */}
      {/* --------------------------------------------------------------------------------------- */}
              <Nav_bar />

      {/* HERO */}
      <div
        className="position-relative"
        style={{
          backgroundImage: `url(${Coverphoto})`,
          height: "550px",
          backgroundSize: "cover",
        }}
      >
        <div className="hero-overlay"></div>

        <Container className="position-relative text-white" style={{ top: "65%" }}>
          <h1 className="fw-bold display-4">
            Rent smart.<br />Drive better.
          </h1>

          <Row className="mt-4 bg-dark p-3 rounded shadow">
            <Col md={3}>
              <Form.Control placeholder="Location" />
            </Col>
            <Col md={2}>
              <Form.Control type="date" />
            </Col>
            <Col md={2}>
              <Form.Control type="date" />
            </Col>
            <Col md={2}>
              <Form.Select>
                <option>Car Type</option>
              </Form.Select>
            </Col>
            <Col md={3}>
              <Button className="w-100 yellow-btn">Show Cars</Button>
            </Col>
          </Row>
        </Container>
      </div>

      {/* CATEGORIES */}
      <Container className="py-5">
        <h4 className="mb-4">Popular Categories</h4>

        <Row className="g-3">
          {[luxury, Spots, Suv, Muv,  sedan, Hackback].map((img, i) => (
            <Col md={2} key={i}>
              <Card className="bg-dark border-0 hover-box p-1">
                <Image src={img} className="sec_one" />
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* BRANDS */}
      <Container className="pb-5">
        <h4 className="mb-4">Popular Brands</h4>

        <Row className="g-3">
          {[mahindra, tata, maruti, mahindra, tata, maruti].map((b, i) => (
            <Col md={2} key={i}>
              <Card className="bg-dark text-center border-0 hover-box p-3">
                <Image src={b} className="sec_one" />
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* OFFERS */}
     <Container className="py-5" style={{ backgroundColor: "#fff" }}>
      {/* Header */}
      <Row className="mb-4 align-items-center">
        <Col>
          <h2 className="fw-bold" style={{ letterSpacing: "-1px" }}>Experience Luxury</h2>
        </Col>
        <Col className="text-end">
          <Button variant="outline-secondary" size="sm" className="px-3 py-1 border-1" style={{ borderRadius: "8px", fontSize: "12px" }}>
            See All
          </Button>
        </Col>
      </Row>

      {/* Cards */}
      <Row className="g-4">
        
        {/* CARD 1 - Rolls-Royce Ghost */}
        <Col md={4}>
          <Card className="border-0 shadow-sm overflow-hidden" style={{ borderRadius: "15px" }}>
            <div className="position-relative">
              <Card.Img
                src={Tataharrier} // Replace with your high-res image
                style={{ height: "220px", objectFit: "cover" }}
              />
            </div>

            <Card.Body className="p-4">
              <div className="d-flex justify-content-between align-items-start mb-3">
                <div>
                  <h5 className="fw-bold mb-1">Rolls-Royce Ghost</h5>
                  <p className="text-muted small mb-0">2024, Automatic</p>
                </div>
                {/* Brand Logo Placeholder */}
                <div style={{ width: "40px", opacity: "0.7" }}>
                   <img src={Xuv700} alt="brand" className="img-fluid" />
                </div>
              </div>

              <div className="d-flex justify-content-between align-items-center mt-4">
                <h5 className="fw-bold mb-0">$899.00 <small className="fw-normal text-muted" style={{ fontSize: "14px" }}>/ day</small></h5>
                <Button
                  className="px-4 py-2 fw-bold"
                  style={{ background: "#f8e71c", border: "none", color: "#000", borderRadius: "8px" }}
                >
                  Details
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* CARD 2 - Rolls-Royce Cullinan */}
        <Col md={4}>
          <Card className="border-0 shadow-sm overflow-hidden" style={{ borderRadius: "15px" }}>
            <Card.Img
              src={Hundaicreta}
              style={{ height: "220px", objectFit: "cover" }}
            />
            <Card.Body className="p-4">
              <div className="d-flex justify-content-between align-items-start mb-3">
                <div>
                  <h5 className="fw-bold mb-1">Rolls-Royce Cullinan</h5>
                  <p className="text-muted small mb-0">2024, Automatic</p>
                </div>
                <div style={{ width: "40px", opacity: "0.7" }}>
                   <img src={mahindra} alt="brand" className="img-fluid" />
                </div>
              </div>

              <div className="d-flex justify-content-between align-items-center mt-4">
                <h5 className="fw-bold mb-0">$1,416.00 <small className="fw-normal text-muted" style={{ fontSize: "14px" }}>/ day</small></h5>
                <Button className="px-4 py-2 fw-bold" style={{ background: "#f8e71c", border: "none", color: "#000", borderRadius: "8px" }}>
                  Details
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* CARD 3 - Lamborghini Urus */}
        <Col md={4}>
          <Card className="border-0 shadow-sm overflow-hidden" style={{ borderRadius: "15px" }}>
            <Card.Img
              src={Tataharrier}
              style={{ height: "220px", objectFit: "cover" }}
            />
            <Card.Body className="p-4">
              <div className="d-flex justify-content-between align-items-start mb-3">
                <div>
                  <h5 className="fw-bold mb-1">Lamborghini Urus</h5>
                  <p className="text-muted small mb-0">2023, Automatic</p>
                </div>
                <div style={{ width: "30px" }}>
                   <img src={Tataharrier} alt="brand" className="img-fluid" />
                </div>
              </div>

              <div className="d-flex justify-content-between align-items-center mt-4">
                <h5 className="fw-bold mb-0">$273.00 <small className="fw-normal text-muted" style={{ fontSize: "14px" }}>/ day</small></h5>
                <Button className="px-4 py-2 fw-bold" style={{ background: "#f8e71c", border: "none", color: "#000", borderRadius: "8px" }}>
                  Details
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>

      </Row>
    </Container>
    </>
  );
}

export default Index;
