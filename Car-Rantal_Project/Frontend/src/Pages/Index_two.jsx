import React from "react";
import Nav_bar from "./Nav_bar.jsx";
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
import sedan from "../assets/sedan.png";
import Hackback from "../assets/hatchback.png";

import Hundaicreta from "../assets/Hundaicreta.png";
import Tataharrier from "../assets/Tataharrier.png";
import Xuv700 from "../assets/XUV700.png";

import mahindra_logo from"../assets/Mahindra_logo.png"
import suzuki_logo from"../assets/Suzuki_logo.png"
import tata_logo from"../assets/Tata_logo.png"
import honda_logo from"../assets/Honda_logo.png"
import hundai_logo from"../assets/Hundai_logo.png"
import toyata_logo from"../assets/Toyata_logo.png"
import Last_sec from "../assets/Last_sec.png";
import sunroof from "../assets/sunroof.png";
import rev1 from "../assets/rev1.png";
import rev2 from "../assets/rev2.png";
import rev3 from "../assets/rev3.png";
import rev4 from "../assets/rev4.png";
import rooftoop_ofcar from "../assets/rooftop.png";
import Column_one from "../assets/column_one.png";
import map from"../assets/map.png";

function Index_two() {
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

        <Container
          className="position-relative text-white"
          style={{ top: "65%" }}
        >
          <h1 className="fw-bold display-4">
            Rent smart.
            <br />
            Drive better.
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
          {[luxury, Spots, Suv, Muv, sedan, Hackback].map((img, i) => (
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
          {[mahindra_logo,suzuki_logo,tata_logo,honda_logo,hundai_logo,toyata_logo].map((b, i) => (
            <Col md={2} key={i}>
              <Card className="bg-dark text-center border-0 hover-box p-3">
                <Image src={b} className="sec_one" />
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      {/* ---------------------------------------------------------------------------------------------------------- */}

      {/* OFFERS */}
      <div style={{ backgroundColor: "#fff", color: "#000" }}>
        <Container className="py-5">
          {/* Header */}
          <Row className="mb-4 align-items-center">
            <Col>
              <h2 className="fw-bold" style={{ letterSpacing: "-1px" }}>
                Experience Luxury
              </h2>
            </Col>
            <Col className="text-end">
              <Button
                variant="outline-secondary"
                size="sm"
                className="px-3 py-1 border-1"
                style={{ borderRadius: "8px", fontSize: "12px" }}
              >
                See All
              </Button>
            </Col>
          </Row>

          {/* Cards */}
          <Row className="g-4" style={{ width: "100%" }}>
            {/* CARD 1 */}
            <Col md={4}>
              <div className="custom-card align-items-center">
                {/* IMAGE */}
                <div className="custom-card-img">
                  <img src={Xuv700} alt="car" />
                </div>

                {/* CONTENT */}
                <div className="custom-card-body ">
                  <span>
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <div>
                      <h6 className="fw-bold mb-1">Rolls-Royce Ghost</h6>
                      <small className="text-muted">2024, Automatic</small>
                    </div>
                    <img src={mahindra_logo} alt="brand" className="brand-logo" />
                  </div>

                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <h6 className="fw-bold mb-0">
                      $899.00 <small className="text-muted">/ day</small>
                    </h6>
                    <Button className="btn btn-warning btn-sm fw-bold">
                      Details
                    </Button>
                  </div>
                  </span>
                </div>
              </div>
            </Col>

            {/* CARD 2 */}
            <Col md={4}>
              <div className="custom-card align-items-center">
                {/* IMAGE */}
                <div className="custom-card-img">
                  <img src={Tataharrier} alt="car" />
                </div>

                {/* CONTENT */}
                <div className="custom-card-body ">
                  <span>
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <div>
                      <h6 className="fw-bold mb-1">Rolls-Royce Ghost</h6>
                      <small className="text-muted">2024, Automatic</small>
                    </div>
                    <img src={tata_logo} alt="brand" className="brand-logo" />
                  </div>

                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <h6 className="fw-bold mb-0">
                      $899.00 <small className="text-muted">/ day</small>
                    </h6>
                    <Button className="btn btn-warning btn-sm fw-bold">
                      Details
                    </Button>
                  </div>
                  </span>
                </div>
              </div>
            </Col>
            {/* Card-3 */}
            <Col md={4}>
              <div className="custom-card align-items-center">
                {/* IMAGE */}
                <div className="custom-card-img">
                  <img src={Hundaicreta} alt="car" />
                </div>

                {/* CONTENT */}
                <div className="custom-card-body ">
                  <span >
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <div>
                      <h6 className="fw-bold mb-1">Rolls-Royce Ghost</h6>
                      <small className="text-muted">2024, Automatic</small>
                    </div>
                    <img src={hundai_logo} alt="brand" className="brand-logo" />
                  </div>

                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <h6 className="fw-bold mb-0">
                      $899.00 <small className="text-muted">/ day</small>
                    </h6>
                    <Button className="btn btn-warning btn-sm fw-bold">
                      Details
                    </Button>
                  </div>
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* -------------------------------------------------------------------------------- */}

      {/* <Container> */}
      <Image src={Last_sec} className="last_sec  imgborder" />
      <div className="position-absolute">
        <div className="last_secbox position-absolute rev1">
          <h4>&#9733;&#9733;&#9733;&#9733;&#9733;</h4>
          <p>
            Great experience using this car rental website. The booking process
            was simple and quick, and the car was clean and well-maintained.
          </p>
          <img src={rev1} alt="" />
        </div>
        <div className="last_secbox position-absolute rev2">
          <h4>&#9733;&#9733;&#9733;&#9733;&#9733;</h4>
          <p>
            Great experience using this car rental website. The booking process
            was simple and quick, and the car was clean and well-maintained.
          </p>
          <img src={rev2} alt="" />
        </div>
        <div className="last_secbox position-absolute rev3">
          <h4>&#9733;&#9733;&#9733;&#9733;&#9733;</h4>
          <p>
            Great experience using this car rental website. The booking process
            was simple and quick, and the car was clean and well-maintained.
          </p>
          <img src={rev3} alt="" />
        </div>
        <div className="last_secbox position-absolute rev4">
          <h4>&#9733;&#9733;&#9733;&#9733;&#9733;</h4>
          <p>
            Great experience using this car rental website. The booking process
            was simple and quick, and the car was clean and well-maintained.
          </p>
          <img src={rev4} alt="" />
        </div>
      </div>

      {/* ---------------------------------------------------------------------------- */}
      {/* OFFERS */}
      <div style={{ backgroundColor: "#fff", color: "#000" }}>
        <Container className="py-5">
          {/* Header */}
          <Row className="mb-4 align-items-center">
            <Col>
              <h2 className="fw-bold" style={{ letterSpacing: "-1px" }}>
                Experience Luxury
              </h2>
            </Col>
            <Col className="text-end">
              <Button
                variant="outline-secondary"
                size="sm"
                className="px-3 py-1 border-1"
                style={{ borderRadius: "8px", fontSize: "12px" }}
              >
                See All
              </Button>
            </Col>
          </Row>

          {/* Cards */}
          <Row className="g-4" style={{ width: "100%" }}>
            {/* CARD 1 */}
            <Col md={4}>
              <div className="custom-card align-items-center">
                {/* IMAGE */}
                <div className="custom-card-img">
                  <img src={Tataharrier} alt="car" />
                </div>

                {/* CONTENT */}
                <div className="custom-card-body ">
                  <span>
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <div>
                      <h6 className="fw-bold mb-1">Rolls-Royce Ghost</h6>
                      <small className="text-muted">2024, Automatic</small>
                    </div>
                    <img src={tata_logo} alt="brand" className="brand-logo" />
                  </div>

                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <h6 className="fw-bold mb-0">
                      $899.00 <small className="text-muted">/ day</small>
                    </h6>
                    <Button className="btn btn-warning btn-sm fw-bold">
                      Details
                    </Button>
                  </div>
                  </span>
                </div>
              </div>
            </Col>

            {/* CARD 2 */}
            <Col md={4}>
              <div className="custom-card align-items-center">
                {/* IMAGE */}
                <div className="custom-card-img">
                  <img src={Xuv700} alt="car" />
                </div>

                {/* CONTENT */}
                <div className="custom-card-body ">
                  <span>
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <div>
                      <h6 className="fw-bold mb-1">Rolls-Royce Ghost</h6>
                      <small className="text-muted">2024, Automatic</small>
                    </div>
                    <img src={mahindra_logo} alt="brand" className="brand-logo" />
                  </div>

                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <h6 className="fw-bold mb-0">
                      $899.00 <small className="text-muted">/ day</small>
                    </h6>
                    <Button className="btn btn-warning btn-sm fw-bold">
                      Details
                    </Button>
                  </div>
                  </span>
                </div>
              </div>
            </Col>
            {/* Card-3 */}
            <Col md={4}>
              <div className="custom-card align-items-center">
                {/* IMAGE */}
                <div className="custom-card-img">
                  <img src={Hundaicreta} alt="car" />
                </div>

                {/* CONTENT */}
                <div className="custom-card-body ">
                  <span>
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <div>
                      <h6 className="fw-bold mb-1">Rolls-Royce Ghost</h6>
                      <small className="text-muted">2024, Automatic</small>
                    </div>
                    <img src={hundai_logo} alt="brand" className="brand-logo" />
                  </div>

                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <h6 className="fw-bold mb-0">
                      $899.00 <small className="text-muted">/ day</small>
                    </h6>
                    <Button className="btn btn-warning btn-sm fw-bold">
                      Details
                    </Button>
                  </div>
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* ------------------------------------------------------------------------------------------------------------- */}

      <div className="banner-wrapper">
        {/* IMAGE */}
        <Image src={rooftoop_ofcar} className="banner-img" />

        {/* BUTTON ONLY */}
        <Button className="banner-btn">Find your subscription</Button>
      </div>

      {/* ---------------------------------------------------------------------------------------------------------- */}
      <Row className="g-3 px-4">
        {" "}
        {/* adds left-right space */}
        {/* COLUMN 1 */}
        <Col md={4}>
          <div className="col-card">
            <Image src={Column_one} className="img-full" />
          </div>
        </Col>
        {/* COLUMN 2 */}
        <Col md={4} className="d-flex flex-column gap-3">
          <div className="col-card top-img">
            <Image src={rooftoop_ofcar} className="img-full" />
          </div>

          <div className="col-card small text-center text-white d-flex flex-column justify-content-center">
            <h6 className="text-warning">Perfect Solution for Your Comfort</h6>
            <p className="mb-0">Earn more. Effortless.</p>
          </div>
        </Col>
        {/* COLUMN 3 */}
        <Col md={4}>
          <div className="col-card text-white p-4 h-100 d-flex flex-column justify-content-between">
            <div>
              <h4 className="text-warning fw-bold ">
                Are you a car rental company?
              </h4>
              <p className="text-muted White_text">
                Showcase your fleet to high-end clients. Get bookings. Keep full
                control.
              </p>
            </div>

            <button className="btn btn-outline-light">List Your Cars</button>
          </div>
        </Col>
      </Row>

      {/* -------------------------------------------------------------------------------------------- */}
      <section className="delivery-section">
  <Container fluid className="p-0">
    <Row className="g-0 m-3">
      {/* LEFT */}
      <Col lg={5} className="left-side d-flex flex-column justify-content-center">
        <div className="content">
          <h2 className="title">Car Delivery & Pickup Options</h2>
          <p className="desc">
            One Rent provides flexible car delivery and pickup options to
            suit your schedule.
          </p>
          <div className="info-card">
            <div className="icon-box">📍</div>
            <div>
              <h5>Office Pickup</h5>
              <p>Visit our office and pick up your car easily within minutes.</p>
            </div>
          </div>
          <div className="info-card">
            <div className="icon-box">🚚</div>
            <div>
              <h5>Delivery</h5>
              <ul>
                <li>Free delivery within city</li>
                <li>Fast doorstep service</li>
                <li>Available 24/7</li>
              </ul>
            </div>
          </div>
        </div>
      </Col>
      {/* RIGHT */}
      <Col lg={7} className="right-side">
        <Image src={map} alt="map" className="map-img" />

        <div className="map-card">
          <h6>Our Office</h6>
          <p>
            Business Bay, Ahmedabad <br />
            +91 0123456789 <br />
            abc@onerent.ae
          </p>
        </div>
      </Col>

    </Row>
  </Container>
</section>
{/* ------------------------------------------------------------------------------- */}
      <Container className="mt-5">
        <Row className="h-500">
          {/* Column 1 */}
          <Col md={4} className="d-flex flex-column gap-3 ">
            <div className="box yellow small big boxborder">
              <h5>01</h5>
              <h4>No Deposit</h4>
              <p>
                Rent your favorite car without paying any upfront deposit. Enjoy
                a smooth and hassle-free booking experience.
              </p>
            </div>

            <div className="box dark small boxborder">
              <h5>02</h5>
              <h4>24/7 Delivery</h4>
              <p>
                We deliver your car anytime, anywhere. Your convenience is our
                priority.
              </p>
            </div>
          </Col>

          {/* Column 2 (Image full) */}
          <Col md={4}>
            <div className="h-100">
              <img
                src={sunroof}
                alt="car"
                className="img-fluid h-100 w-100 object-fit-cover rounded"
              />
            </div>
          </Col>

          {/* Column 3 */}
          <Col md={4} className="d-flex flex-column gap-3 ">
            <div className="box dark small boxborder">
              <h5>03</h5>
              <h4>Brand New</h4>
              <p>
                Drive the latest models with advanced features, comfort, and top
                performance.
              </p>
            </div>

            <div className="box yellow big small boxborder">
              <h5>04</h5>
              <h4>Clear Pricing</h4>
              <p>
                No hidden charges. Transparent pricing with insurance included
                for peace of mind.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
{/* ------------------------------------------------------------------------------- */}
    <div>
<Container className="py-5">
        <Row className="mb-4 align-items-center">
          
          {/* Left Section */}
          <Col md={6}>
            <h5 style={{ color: "#ffc107" }}>Convert car in to dollars</h5>
            <h4>Rent a car or share yours — all in one easy app</h4>

            <div className="mt-3">
              <Button variant="dark" className="me-2 border">
                App Store
              </Button>
              <Button variant="dark" className="border">
                Google Play
              </Button>
            </div>
          </Col>

          {/* Right Section */}
          <Col md={6} className="text-md-end mt-4 mt-md-0">
            <h5>Google ⭐⭐⭐⭐⭐</h5>
            <p>Based on 1000+ reviews</p>
          </Col>
        </Row>

        <hr style={{ borderColor: "#444" }} />

        {/* Bottom Links */}
        <Row className="mt-4">
          <Col md={3}>
            <h5>CAR RENT</h5>
            <p>Drive with confidence</p>
          </Col>

          <Col md={3}>
            <h6>Legal</h6>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Blog</p>
          </Col>

          <Col md={3}>
            <h6>Company</h6>
            <p>About</p>
            <p>Careers</p>
            <p>Help & Support</p>
          </Col>

          <Col md={3}>
            <h6>Contact</h6>
            <p>+91 99999 99999</p>
            <p>info@carrent.com</p>
            <p>Ahmedabad, India</p>
          </Col>
        </Row>

        <hr style={{ borderColor: "#444" }} />

        {/* Bottom Line */}
        <Row>
          <Col md={6}>
            <p>© 2026 CarRent. All rights reserved.</p>
          </Col>
          <Col md={6} className="text-md-end">
            <p>Follow us: Instagram | Facebook | YouTube</p>
          </Col>
        </Row>
      </Container>

    </div>
    </>
  );
}
export default Index_two;