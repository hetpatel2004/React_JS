import React from "react";
import Nav_bar from "./Nav_bar";
import Carousel from "react-bootstrap/Carousel";
import { Container, Image, Row, Col, Card, Button } from "react-bootstrap";

// import { Carousel } from "react-bootstrap";
import Coverphoto from "../assets/Coverphoto.png";
import self_driven from "../assets/selfdriven.png";
import Car_withDriver from "../assets/car_withdriver.png";
import Take_cars from "../assets/Take_cars.png";
import Suv from "../assets/SUV.png";
import luxury from "../assets/luxury.png";
import Spots from "../assets/sports.png";
import Electric from "../assets/electric.png";
import Muv from "../assets/MUV.png";
import Hackback from "../assets/hatchback.png";
import Compect_SUV from "../assets/Compect_SUV.png";
import sedan from "../assets/sedan.png";
import Xuv700 from "../assets/XUV700.png";
import Tharrocks from "../assets/Tharrocks.png";
import Hundaicreta from "../assets/Hundaicreta.png";
import Tataharrier from "../assets/Tataharrier.png";
import Last_sec from "../assets/Last_sec.png";
import sunroof from"../assets/sunroof.png"

function Index() {
  return (
    <>
      <Nav_bar />
      {/* ----------------------------------------------------------------------------- */}
      {/* Cover Image */}
      <Image src={Coverphoto} fluid className="cover_img" />
      {/* --------------------------------------------------------------------------------------- */}
      <Container>
        <Row className="g-4 text-center m-2">
          <h2>Types of Cares...</h2>

          <Col md={3}>
            <Card className="shadow card_hover border-0">
              <Card.Img variant="top" src={luxury} />
            </Card>
          </Col>

          <Col md={3}>
            <Card className="shadow card_hover border-0">
              <Card.Img variant="top" src={Spots} />
            </Card>
          </Col>
          <Col md={3}>
            <Card className="shadow card_hover border-0">
              <Card.Img variant="top" src={Suv} />
            </Card>
          </Col>
          <Col md={3}>
            <Card className="shadow card_hover border-0">
              <Card.Img variant="top" src={Muv} />
            </Card>
          </Col>
        </Row>
        <Row className="g-4 text-center m-2">
          <Col md={3}>
            <Card className="shadow card_hover border-0">
              <Card.Img variant="top" src={Electric} />
            </Card>
          </Col>

          <Col md={3}>
            <Card className="shadow card_hover border-0">
              <Card.Img variant="top" src={Compect_SUV} />
            </Card>
          </Col>
          <Col md={3}>
            <Card className="shadow card_hover border-0">
              <Card.Img variant="top" src={sedan} />
            </Card>
          </Col>
          <Col md={3}>
            <Card className="shadow card_hover border-0">
              <Card.Img variant="top" src={Hackback} />
            </Card>
          </Col>
        </Row>
      </Container>
      {/* --------------------------------------------------------------------------------------- */}
      <div className="m-3">
        <h2>Most Preferred and trading...</h2>
        <Carousel interval={2000} pause={false}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Hundaicreta}
              alt="Hyundai Creta"
              style={{ height: "650px", objectFit: "cover" }}
            />
            <Carousel.Caption>
              <h3>Hyundai Creta</h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Tataharrier}
              alt="Tata Harrier"
              style={{ height: "650px", objectFit: "cover" }}
            />
            <Carousel.Caption>
              <h3>Tata Harrier</h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Xuv700}
              alt="Mahindra XUV700"
              style={{ height: "650px", objectFit: "cover" }}
            />
            <Carousel.Caption>
              <h3>Mahindra XUV700</h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Tharrocks}
              alt="Mahindra XUV700"
              style={{ height: "650px", objectFit: "cover" }}
            />
            <Carousel.Caption>
              <h3>Mahindra XUV700</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      {/* ------------------------------------------------------------------------------------ */}
      {/* Cards Section */}
      <Container>
        <Row className="text-center m-4">
          <Col md={4}>
            <Card className="shadow card_hover border-0">
              <Card.Img variant="top" src={self_driven} />
              <Card.Body className="sec-4_text">
                <Card.Text className="fw-bold">
                  Rental Self-Driven Cars
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="shadow card_hover border-0">
              <Card.Img variant="top" src={Car_withDriver} />
              <Card.Body className="sec-4_text">
                <Card.Text className="fw-bold">
                  Rental Cars with Driver
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="shadow card_hover border-0">
              <Card.Img variant="top" src={Take_cars} />
              <Card.Body className="sec-4_text">
                <Card.Text className="fw-bold">
                  Provide Your Car on Rent
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      {/* --------------------------------------------------------------------------- */}
        <div className="position-relative">
        <Image src={sunroof} className=" position-relative last_sec p-3"/>
        <h2 className="position-absolute sec_5heading">Want to rent longer?</h2>
        <p className="position-absolute sec_5text">Get a One Rent + subscription and enjoy the luxury of a premium SUV every day.</p>
        <button className="position-absolute sec_5button">Find your subscription</button>
        </div>

      {/* --------------------------------------------------------------------------- */}
      <Image src={Last_sec} className="last_sec p-3"/>
      {/* --------------------------------------------------------------------------- */}

    </>
  );
}

export default Index;
