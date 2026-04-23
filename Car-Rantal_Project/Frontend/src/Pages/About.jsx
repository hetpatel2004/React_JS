import React from "react";
import Nav_bar from "./Nav_bar";
import { Container, Row, Col, Image } from "react-bootstrap";
import sunroof from "../assets/sunroof.png";
import Xuv700 from "../assets/XUV700.png";
import rooftoop_ofcar from "../assets/rooftop.png";
import "../Pages/style_two.css";
import "../Pages/About.css"

function About() {
  return (
    <div style={{ backgroundColor: "#221816", color: "#fff", minHeight: "100vh" }}>
      <Nav_bar />

      {/* SECTION 1: HERO STORY */}
      <div className="py-5 position-relative overflow-hidden">
        <Container className="pt-5 mt-5">
          <Row className="align-items-center">
            <Col lg={6} className="z-index-1">
              <h6 className="text-uppercase fw-bold" style={{ color: "#E8A471", letterSpacing: "5px" }}>
                Our Legacy
              </h6>
              <h1 className="display-2 fw-bold mb-4" style={{ letterSpacing: "-3px", lineHeight: "1" }}>
                Redefining the <br /> <span style={{ color: "#E8A471" }}>Road Ahead.</span>
              </h1>
              <p className="lead  pe-lg-5">
                Born in the heart of Ahmedabad, CarRent isn't just a rental service. 
                We are a gateway to premium experiences, blending cutting-edge 
                technology with a fleet that commands respect.
              </p>
            </Col>
            <Col lg={6} className="position-relative">
              <div className="about-hero-img-wrapper">
                <Image src={sunroof} alt="Premium car interior" className="img-fluid rounded-4 shadow-lg" />
                <div className="experience-badge">
                  <h2 className="mb-0 fw-bold">10+</h2>
                  <p className="small mb-0">Years of Excellence</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* SECTION 2: THE VISION (STATISTICS) */}
      <div className="py-5" style={{ backgroundColor: "#1a1311" }}>
        <Container>
          <Row className="text-center g-4">
            {[
              { label: "Premium Cars", val: "500+" },
              { label: "Happy Clients", val: "12k+" },
              { label: "Cities Covered", val: "25+" },
              { label: "Awards Won", val: "08" },
            ].map((stat, i) => (
              <Col md={3} key={i}>
                <h1 className="fw-bold" style={{ color: "#E8A471" }}>{stat.val}</h1>
                <p className="text-muted text-uppercase small fw-bold" style={{ letterSpacing: "2px" }}>{stat.label}</p>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      {/* SECTION 3: CORE VALUES (INTERACTIVE LAYOUT) */}
      <Container className="py-5">
        <Row className="mb-5 justify-content-center text-center">
          <Col lg={7}>
            <h2 className="fw-bold">Why drive with us?</h2>
            <div style={{ height: "3px", width: "60px", backgroundColor: "#E8A471", margin: "20px auto" }}></div>
          </Col>
        </Row>
        
        <Row className="g-4">
          <Col md={4}>
            <div className="value-card h-100 p-4 rounded-4">
              <div className="fs-1 mb-3" style={{ color: "#E8A471" }}>💎</div>
              <h4>Unmatched Quality</h4>
              <p className="text-muted">Every vehicle in our fleet undergoes a 50-point inspection before every journey.</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="value-card h-100 p-4 rounded-4 active-value">
              <div className="fs-1 mb-3" style={{ color: "#E8A471" }}>🛡️</div>
              <h4>Complete Safety</h4>
              <p className="text-white-50">Fully insured rides and 24/7 roadside assistance for total peace of mind.</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="value-card h-100 p-4 rounded-4">
              <div className="fs-1 mb-3" style={{ color: "#E8A471" }}>⚡</div>
              <h4>Smart Booking</h4>
              <p className="text-muted">No paperwork. No hassle. Book your dream car in under 60 seconds.</p>
            </div>
          </Col>
        </Row>
      </Container>

      {/* SECTION 4: THE FLEET TEASER */}
      <div className="py-5 overflow-hidden">
        <Container>
          <Row className="align-items-center bg-dark rounded-5 g-0 overflow-hidden shadow-lg border-secondary border">
            <Col md={6} className="p-5">
              <h2 className="fw-bold mb-4">Curated for <br /> Perfectionists.</h2>
              <p className="text-muted mb-4">
                From the rugged power of the <strong>Mahindra XUV700</strong> to the 
                sophistication of luxury sedans, our fleet is chosen for those who 
                refuse to compromise.
              </p>
              <button className="btn btn-outline-light px-4 py-2">Explore the Fleet</button>
            </Col>
            <Col md={6} className="position-relative">
              <Image src={Xuv700} className="img-fluid fleet-slide-img" />
            </Col>
          </Row>
        </Container>
      </div>

      {/* FOOTER CALL TO ACTION */}
      <div className="py-5 text-center">
        <Container className="py-5 rounded-5" style={{ backgroundColor: "#E8A471", color: "#221816" }}>
          <h2 className="fw-bold">Ready for an unforgettable drive?</h2>
          <p className="mb-4 fw-medium">Join 12,000+ happy travelers today.</p>
          <button className="btn btn-dark px-5 py-3 fw-bold rounded-pill">BOOK NOW</button>
        </Container>
      </div>
    </div>
  );
}

export default About;