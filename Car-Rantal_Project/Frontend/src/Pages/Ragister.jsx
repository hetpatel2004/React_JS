import axios from "axios";
import React, { useState } from "react";
import { Form, Button, Container, Card, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import sunroof from "../assets/sunroof.png";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      alert("All fields are required");
      return;
    }

    try {
      await axios.post("http://localhost:3000/user", {
        name,
        email,
        password,
      });

      alert("Registered Successfully");
      navigate("/login");
    } catch (error) {
      console.error(error);
      alert("Error");
    }
  };

  return (
    <Container fluid className="vh-100">
      <Row className="h-100">

        {/* 🟣 LEFT SIDE FORM (SWAPPED) */}
        <Col
          md={6}
          className="d-flex justify-content-center align-items-center"
          style={{ background: "#f8f9fa" }}
        >
          <Card
            className="p-4"
            style={{
              width: "26rem",
              borderRadius: "15px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
            }}
          >
            <h2 className="text-center mb-4" style={{ fontWeight: "bold" }}>
              Create Account 
            </h2>

            <Form onSubmit={handleRegister}>
              {/* Name */}
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{ borderRadius: "10px" }}
                  required
                />
              </Form.Group>

              {/* Email */}
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ borderRadius: "10px" }}
                  required
                />
              </Form.Group>

              {/* Password */}
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{ borderRadius: "10px" }}
                  required
                />
              </Form.Group>

              {/* Button */}
              <Button
                variant="dark"
                type="submit"
                className="w-100"
                style={{
                  borderRadius: "10px",
                  padding: "10px",
                  fontWeight: "bold",
                }}
              >
                Register
              </Button>

              {/* Login Link */}
              <p className="text-center mt-3" style={{ fontSize: "14px" }}>
                Already have an account?{" "}
                <Link
                  to="/login"
                  style={{
                    fontWeight: "bold",
                    color: "#2a5298",
                    textDecoration: "none",
                  }}
                >
                  Login
                </Link>
              </p>
            </Form>
          </Card>
        </Col>

        {/*  RIGHT SIDE IMAGE (SWAPPED) */}
        <Col
          md={6}
          className="d-none d-md-flex align-items-center justify-content-center"
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              backgroundImage: `url(${sunroof})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "relative",
            }}
          >
            {/* Gradient Overlay */}
            <div
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                background:
                  "linear-gradient(to left, rgba(0,0,0,0.6), rgba(0,0,0,0.2))",
              }}
            ></div>
          </div>
        </Col>

      </Row>
    </Container>
  );
}

export default Register;