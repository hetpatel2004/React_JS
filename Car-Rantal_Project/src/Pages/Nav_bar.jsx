import React from "react";
import { Link, Outlet } from "react-router-dom";
import Main_route from "./Main_route";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../Pages/Navbar.css"
import { Button, Image } from "react-bootstrap";
import Logo from "../assets/logo.png";

function Nav_bar() {
  return (
    <>
      <Navbar  data-bs-theme="dark" className="align-items-center abc" >
        <Container>
          <Navbar.Brand><Image src={Logo} className="logo"/> Car Rental</Navbar.Brand>
          <Nav className="align-items-center">
            <Nav className="ms-3">
              <Link to={"/"} className="nav-link-custom">Index</Link>
            </Nav>
            <Nav className="ms-3">
              <Link to={"/home"} className="nav-link-custom">Home</Link>
            </Nav>
            <Nav className="ms-3">
              <Link to={"/about"} className="nav-link-custom">About</Link>
            </Nav>
            <Link to={"/login"}>
            <Button className="ms-5 login-btn">Login</Button>
            </Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export default Nav_bar;
