import React, { useEffect, useState } from "react";
import { Form, Button, Container, Card, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./redux/usersSlice";
import sunroof from "../assets/sunroof.png";
import { setLogin } from "../utils/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleLogin = async (e) => {
    e.preventDefault();

    const cleanEmail = email.toLowerCase().trim();
    const cleanPassword = password.trim();

    // ✅ ADMIN LOGIN FIX
    if (cleanEmail === "het@gmail.com" && cleanPassword === "het@123") {
      alert("Admin Login Successful");

      setLogin({ token: "admin-token", role: "admin" });

      navigate("/admin");
      return;
    }

    const user = users.find(
      (u) =>
        u.email?.toLowerCase().trim() === cleanEmail &&
        String(u.password || "").trim() === cleanPassword
    );

    if (user) {
      alert("User Login Successful");

      setLogin({ token: `user-token-${user.id || cleanEmail}`, role: "user", user });

      navigate("/user");
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <Container fluid className="vh-100">
      <Row className="h-100">

        {/* LEFT IMAGE */}
        <Col md={6} className="d-none d-md-flex">
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
            <div
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                background:
                  "linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.2))",
              }}
            ></div>
          </div>
        </Col>

        {/* RIGHT LOGIN */}
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
            <h2 className="text-center mb-4 fw-bold">
              Welcome Back
            </h2>

            <Form onSubmit={handleLogin}>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>

              <Button variant="dark" type="submit" className="w-100">
                Login
              </Button>

              <p className="text-center mt-3">
                New user?{" "}
                {/* <Link to="/ragister">Create Account</Link> */}
                <Link to={"/register"}>create Account</Link>
              </p>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;