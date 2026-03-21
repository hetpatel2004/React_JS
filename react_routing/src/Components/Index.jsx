import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import Car from '../assets/react.svg';
import { Col, Image,Button } from 'react-bootstrap';
import { lazy,Suspense } from 'react';
function Index() {
  const navigate = useNavigate()
  const index = lazy(()=>import("./Home"))
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand >
            <Image  src={Car}></Image>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
                <Link to={"/"}>index page</Link>
            </Nav.Link>
            <Nav.Link>
                <Link to={"home"}>Home</Link>
            </Nav.Link>
            <Nav.Link>
                <Link to={"about"}>About</Link>
            </Nav.Link>
            <Nav.Link>
                <Link to={"contect"}>Contect</Link>
            </Nav.Link>
             <Nav.Link>
                <Link to={"person"}>Person</Link>
            </Nav.Link>
             <Nav.Link>
                <Link to={"useeffect"}>useeffect</Link>
            </Nav.Link>
          </Nav>
          <Col xs="auto">
            <Button type="submit" onClick={()=>navigate("login")}>Login</Button>
          </Col>
        </Container>
      </Navbar>
      <Outlet/>
    </>
  );
}

export default Index;