import axios from "axios";
import React, { useState } from "react";
import { Form, Button, Container, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };
  
  
  
  
  function varification() {
      axios.get("http://localhost:3000/user")
  .then((res) => {
    const user = res.data.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      alert("logined");
      navigate("/home")
    } else {
      alert("failed");
    }
  });

    }

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card style={{ width: "25rem" }} className="p-4">
        <h3 className="text-center mb-4">Login</h3>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100" onClick={varification}>
            Login
          </Button>

          {/* ragistration */}
          <Link to={"/ragister"}>
            <Button variant="primary" type="submit" className="w-100 mt-3">
              Ragister
            </Button>
          </Link>
        </Form>
      </Card>
    </Container>
  );
}

export default Login;
