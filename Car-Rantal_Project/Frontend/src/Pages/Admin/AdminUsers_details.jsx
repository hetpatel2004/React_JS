import React, { useEffect, useState } from "react";
import { Form, Button, Table, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchUsers,
  addUser,
  updateUser,
  deleteUser,
} from "../redux/usersSlice";

function AdminUsers() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [editId, setEditId] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
  const user = localStorage.getItem("user");
  if (!user) navigate("/login");
}, [navigate]);

  // ✅ GET USERS
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  // ✅ LOGOUT
  const handleLogout = () => {
    localStorage.removeItem("user"); // optional
    navigate("/"); // or "/"
  };

  // ✅ ADD / UPDATE
  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      dispatch(
        updateUser({
          id: editId,
          data: { name, email, password },
        })
      );
      setEditId(null);
    } else {
      dispatch(addUser({ name, email, password }));
    }

    setName("");
    setEmail("");
    setPassword("");

    dispatch(fetchUsers());
  };

  // ✅ EDIT
  const editUser = (user) => {
    setName(user.name);
    setEmail(user.email);
    setPassword("");
    setEditId(user.id);
  };

  return (
    <div className="admin-layout">

      {/* SIDEBAR */}
      <div className="sidebar-theme">
        <h3 className="mb-4">Admin Panel</h3>

        <div className="nav-item" onClick={() => navigate("/admin")}>
          Dashboard
        </div>

        <div className="nav-item active">Users</div>

        <div className="nav-item" onClick={() => navigate("/admin-cars")}>
          Cars
        </div>
      </div>

      {/* MAIN */}
      <div className="main-theme">

        {/* 🔥 TOP BAR */}
        <div className="top-bar">
          <h2>User Management</h2>

          <Button className="logout-btn" onClick={handleLogout}>
            Logout
          </Button>
        </div>

        {/* FORM */}
        <div className="theme-card mb-4">
          <h4>{editId ? "Edit User" : "Add User"}</h4>

          <Form onSubmit={handleSubmit}>
            <Row className="g-3">
              <Col md={4}>
                <Form.Control
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Col>

              <Col md={4}>
                <Form.Control
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Col>

              <Col md={4}>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Col>

              <Col md={2}>
                <Button className="yellow-btn w-100" type="submit">
                  {editId ? "Update" : "Add"}
                </Button>
              </Col>
            </Row>
          </Form>
        </div>

        {/* TABLE */}
        <div className="theme-card">
          <h4>Users List</h4>

          <Table hover className="mt-3 text-white align-middle">
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>

                  <td>
                    <Button
                      size="sm"
                      className="yellow-btn me-2"
                      onClick={() => editUser(user)}
                    >
                      Edit
                    </Button>

                    <Button
                      size="sm"
                      variant="danger"
                      onClick={() => {
                        dispatch(deleteUser(user.id));
                        dispatch(fetchUsers());
                      }}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>

      {/* STYLES */}
      <style>{`
        .admin-layout {
          display: flex;
          background: #0b0b0b;
          min-height: 100vh;
          color: #fff;
        }

        .sidebar-theme {
          width: 220px;
          background: #111;
          padding: 20px;
          border-right: 1px solid #222;
        }

        .nav-item {
          padding: 10px;
          margin: 10px 0;
          border-radius: 8px;
          color: #aaa;
          cursor: pointer;
        }

        .nav-item:hover {
          background: #ffc107;
          color: #000;
        }

        .nav-item.active {
          background: #ffc107;
          color: #000;
          font-weight: bold;
        }

        .main-theme {
          flex: 1;
          padding: 25px;
        }

        .top-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .logout-btn {
          background: #dc3545;
          border: none;
          padding: 8px 16px;
          border-radius: 8px;
          color: #fff;
          font-weight: bold;
        }

        .logout-btn:hover {
          background: #bb2d3b;
        }

        .theme-card {
          background: #111;
          padding: 20px;
          border-radius: 12px;
          border: 1px solid rgba(255,193,7,0.2);
        }

        th {
          color: #ffc107;
        }

        input {
          background: #1a1a1a !important;
          border: 1px solid #333 !important;
          color: #fff !important;
        }

        .yellow-btn {
          background: #ffc107;
          border: none;
          color: #000;
          font-weight: bold;
          border-radius: 8px;
        }
      `}</style>
    </div>
  );
}

export default AdminUsers;