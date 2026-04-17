import React from "react";
import Nav_bar from "./Nav_bar";
import Carousel from "react-bootstrap/Carousel";
import { Container, Image, Row, Col, Card, Button } from "react-bootstrap";
import "../Pages/index_page.css"
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
import sunroof from "../assets/sunroof.png";
import rev1 from "../assets/rev1.png";
import rev2 from "../assets/rev2.png";
import rev3 from "../assets/rev3.png";
import rev4 from "../assets/rev4.png";

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
      <Container fluid>
        <div className="position-relative">
          <Image src={sunroof} className=" position-relative last_sec " />
          <h2 className="position-absolute sec_5heading">
            Want to rent longer?
          </h2>
          <p className="position-absolute sec_5text">
            Get a One Rent + subscription and enjoy the luxury of a premium SUV
            every day.
          </p>
          <button className="position-absolute sec_5button">
            Find your subscription
          </button>
        </div>
      </Container>

      {/* --------------------------------------------------------------------------- */}
      <Container className="mt-5">
        <Row className="h-500">
          {/* Column 1 */}
          <Col md={4} className="d-flex flex-column gap-3 ">
            <div className="box yellow big boxborder">
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

            <div className="box yellow big boxborder">
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
      {/* --------------------------------------------------------------------------- */}
      {/* <Container> */}
      <Image src={Last_sec} className="last_sec p-3 imgborder" />
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

      {/* --------------------------------------------------------------------------- */}
      <div style={{ backgroundColor: "#0b0b0b", color: "#fff" }}>
      
      {/* Top Skyline Image */}
      <div
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c')",
          height: "150px",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "grayscale(100%)",
        }}
      ></div>

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

    {/* ------------------------------------------------------------------------------------- */}

     <div className="banner-wrapper">

      {/* BACKGROUND IMAGE */}
      <Image src={bannerImg} className="banner-img" />

      {/* OVERLAY */}
      <div className="banner-overlay"></div>

      {/* CONTENT */}
      <Container className="h-100 position-relative">
        <Row className="h-100 align-items-center">

          {/* LEFT TEXT */}
          <Col md={8} className="text-white">
            <h4 className="fw-bold">Want to rent longer?</h4>
            <p className="mb-0">Get a One Rent+ subscription.</p>
          </Col>

          {/* RIGHT BUTTON */}
          <Col md={4} className="text-end">
            <Button className="banner-btn">
              Find your subscription
            </Button>
          </Col>

        </Row>
      </Container>
    </div>
    </>
  );
}

export default Index;
