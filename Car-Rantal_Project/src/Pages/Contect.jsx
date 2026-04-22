import React from "react";
import Nav_bar from "./Nav_bar";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import map from "../assets/map.png"; 
import Xuv700 from "../assets/XUV700.png"; // Using your premium car asset for visual weight
import "../Pages/style_two.css";

function ContactUs() {
  return (
    <div style={{ backgroundColor: "#221816", minHeight: "100vh", color: "#fff" }}>
      <Nav_bar />

      {/* Header Space */}
      <Container className="pt-5 pb-4 text-center">
        <h6 className="text-uppercase fw-bold" style={{ color: "#E8A471", letterSpacing: "4px" }}>
          Contact Us
        </h6>
        <h1 className="display-3 fw-bold mb-3" style={{ letterSpacing: "-2px" }}>
          Let’s start a <span style={{ color: "#E8A471" }}>journey.</span>
        </h1>
      </Container>

      <Container className="pb-5">
        <Row className="g-0 shadow-lg rounded-4 overflow-hidden" style={{ border: "1px solid rgba(232, 164, 113, 0.2)" }}>
          
          {/* Left Side: Visual & Info */}
          <Col lg={5} className="position-relative d-none d-lg-block" style={{ backgroundColor: "#1a1311" }}>
            <div className="p-5 h-100 d-flex flex-column justify-content-between">
              <div>
                <h2 className="fw-bold mb-4">How can we <br />help you?</h2>
                <div className="mb-4">
                  <p className="mb-1 text-muted small text-uppercase">Direct Line</p>
                  <h5 className="fw-light">+91 99999 99999</h5>
                </div>
                <div className="mb-4">
                  <p className="mb-1 text-muted small text-uppercase">Support Email</p>
                  <h5 className="fw-light">concierge@carrent.com</h5>
                </div>
                <div className="mb-4">
                  <p className="mb-1 text-muted small text-uppercase">Headquarters</p>
                  <h5 className="fw-light">Business Bay, Ahmedabad, India</h5>
                </div>
              </div>

              {/* Decorative Car Image */}
              
            </div>
          </Col>

          {/* Right Side: Form */}
          <Col lg={7} className="p-4 p-md-5" style={{ backgroundColor: "#2b1f1d" }}>
            <Form>
              <Row>
                <Col md={6} className="mb-4">
                  <Form.Label className="text-uppercase small fw-bold" style={{ color: "#E8A471" }}>First Name</Form.Label>
                  <Form.Control className="custom-input" placeholder="Enter your name" />
                </Col>
                <Col md={6} className="mb-4">
                  <Form.Label className="text-uppercase small fw-bold" style={{ color: "#E8A471" }}>Last Name</Form.Label>
                  <Form.Control className="custom-input" placeholder="Enter last name" />
                </Col>
              </Row>

              <Form.Group className="mb-4">
                <Form.Label className="text-uppercase small fw-bold" style={{ color: "#E8A471" }}>Email Address</Form.Label>
                <Form.Control type="email" className="custom-input" placeholder="example@mail.com" />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label className="text-uppercase small fw-bold" style={{ color: "#E8A471" }}>Message</Form.Label>
                <Form.Control as="textarea" rows={4} className="custom-input" placeholder="Tell us what you're looking for..." />
              </Form.Group>

              <Button className="w-100 py-3 fw-bold border-0" style={{ backgroundColor: "#E8A471", color: "#221816", borderRadius: "8px" }}>
                SEND MESSAGE
              </Button>
            </Form>

            {/* Bottom Map Slice */}
            <div className="mt-5 rounded shadow-inner overflow-hidden" style={{ height: "150px", opacity: "0.6" }}>
              <img src={map} alt="Map" className="w-100 h-100 object-fit-cover gray-map" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContactUs;