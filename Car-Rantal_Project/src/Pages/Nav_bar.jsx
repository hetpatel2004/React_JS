import React from "react";
import { Link, Outlet } from "react-router-dom";
import Main_route from "./Main_route";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Button, Image } from "react-bootstrap";
import Logo from "../assets/logo.png";
function Nav_bar() {
  return (
    <>
      <Navbar  data-bs-theme="dark" className="align-items-center abc">
        <Container>
          <Navbar.Brand><Image src={Logo} className="logo"/> Car_Rental</Navbar.Brand>
          <Nav className="align-items-center">
            <Nav className="ms-3">
              <Link to={"/"}>Index</Link>
            </Nav>
            <Nav className="ms-3">
              <Link to={"/home"}>Home</Link>
            </Nav>
            <Nav className="ms-3">
              <Link to={"/about"}>About</Link>
            </Nav>
            <Button className="ms-5">Login</Button>
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export default Nav_bar;
