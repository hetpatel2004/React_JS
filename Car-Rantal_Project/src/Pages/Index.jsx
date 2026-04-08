import React from 'react'
import Nav_bar from './Nav_bar'
import Carousel from 'react-bootstrap/Carousel';
import { Container, Image, Row, Col, Card } from 'react-bootstrap';

import Coverphoto from "../assets/Coverphoto.png"
import self_driven from "../assets/selfdriven.png"
import Car_withDriver from "../assets/car_withdriver.png"
import Take_cars from "../assets/Take_cars.png"

function Index() {
  return (
    <>
      <Nav_bar />

      {/* Cover Image */}
      <Image src={Coverphoto} fluid className='cover_img mb-5' />

      {/* Cards Section */}
      <Container>
        <Row className="g-4 text-center">

          <Col md={4}>
            <Card className="shadow card_hover border-0">
              <Card.Img variant="top" src={self_driven} />
              <Card.Body>
                <Card.Text className="fw-bold">
                  Rental Self-Driven Cars
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="shadow card_hover border-0">
              <Card.Img variant="top" src={Car_withDriver} />
              <Card.Body>
                <Card.Text className="fw-bold">
                  Rental Cars with Driver
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="shadow card_hover border-0">
              <Card.Img variant="top" src={Take_cars} />
              <Card.Body>
                <Card.Text className="fw-bold">
                  Provide Your Car on Rent
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </Container>

      {/* Carousel */}
      <Carousel data-bs-theme="dark" className='slider mt-5'>
        <Carousel.Item>
          <img className="d-block w-100" alt="First slide" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" alt="Second slide" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default Index