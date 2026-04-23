import axios from "axios";
import React, { useState } from "react";
import { Form, Button, Container, Card, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import sunroof from "../assets/sunroof.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
  e.preventDefault();

  console.log("Entered:", email, password);

  // ADMIN LOGIN
  if (
    email.toLowerCase().trim() === "het@gmail.com" &&
    password.trim() === "het@123"
  ) {
    alert("Admin Login Successful");
    navigate("/admin");
    return;
  }

  try {
    const res = await axios.get("http://localhost:3000/user");

    console.log("DB Data:", res.data);

    const user = res.data.find(
      (u) =>
        u.email.toLowerCase().trim() === email.toLowerCase().trim() &&
        u.password.trim() === password.trim()
    );

    if (user) {
      alert("User Login Successful");
      navigate("/home");
    } else {
      alert("Invalid Email or Password");
    }
  } catch (error) {
    console.error(error);
    alert("Server Error");
  }
};
  return (
    <Container fluid className="vh-100">
      <Row className="h-100">
        {/* 🔵 LEFT SIDE IMAGE */}
        <Col
          md={6}
          className="d-none d-md-flex align-items-center justify-content-center"
          // style={{
          //   background: "linear-gradient(135deg, #1e3c72, #2a5298)",
          // }}
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
            {/* 🔥 Dark Gradient Overlay */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background:
                  "linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.2))",
              }}
            ></div>
          </div>
        </Col>

        {/* 🟣 RIGHT SIDE LOGIN */}
        <Col
          md={6}
          className="d-flex justify-content-center align-items-center"
          style={{
            background: "#f8f9fa",
          }}
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
              Welcome Back 
            </h2>

            <Form onSubmit={handleLogin}>
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

              {/* Login Button */}
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
                Login
              </Button>

              {/* Register Link */}
              <p className="text-center mt-3" style={{ fontSize: "14px" }}>
                If you are a new user?{" "}
                <Link
                  to="/ragister"
                  style={{
                    fontWeight: "bold",
                    color: "#2a5298",
                    textDecoration: "none",
                  }}
                >
                  Create Account
                </Link>
              </p>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
