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

        <Container className="position-relative text-white" style={{ top: "25%" }}>
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
          {[luxury, Spots, Suv, Muv, Electric, Compect_SUV, sedan, Hackback].map((img, i) => (
            <Col md={3} key={i}>
              <Card className="bg-dark text-center border-0 hover-box p-3">
                <Image src={img} height={50} />
                <p className="mt-2">Category</p>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* BRANDS */}
      <Container className="pb-5">
        <h4 className="mb-4">Popular Brands</h4>

        <Row className="g-3">
          {["Audi", "BMW", "Ferrari", "Lamborghini", "Mercedes", "Porsche","Audi", "BMW", "Ferrari", "Lamborghini", "Mercedes", "Porsche"].map((b, i) => (
            <Col md={2} key={i}>
              <Card className="bg-dark text-center border-0 hover-box p-3">
                {b}
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* OFFERS */}
      <Container className="py-5">
        <h4 className="mb-4">Special Offers</h4>

        <Row className="g-4">
          {[Hundaicreta, Tataharrier, Xuv700].map((car, i) => (
            <Col md={4} key={i}>
              <Card className="border-0 shadow">
                <Card.Img src={car} />
                <Card.Body>
                  <h5>Luxury SUV</h5>
                  <p>$250/day</p>
                  <Button className="yellow-btn">Details</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Index;
