import React from "react";
import { Link, Outlet } from "react-router-dom";
import Main_route from "./Main_route";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function Index() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            {/* <Nav.Link>
              <Link to={"/"}>Index</Link>
            </Nav.Link> */}
            <Nav.Link>
              <Link to={"/home"}>home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={"/about"}>About</Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export default Index;
