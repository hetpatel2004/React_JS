import React, { useEffect, useState } from "react";
import axios from "axios";
import { Form, Button, Table, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function AdminUsers() {
  const [users, setUsers] = useState([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [editId, setEditId] = useState(null);

  const navigate = useNavigate();

  // GET USERS ✅ FIXED API
  const getUsers = async () => {
    const res = await axios.get("http://localhost:3000/user");
    setUsers(res.data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  // ADD / UPDATE USER
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editId) {
      await axios.put(`http://localhost:3000/user/${editId}`, {
        name,
        email,
        password, // ✅ added
      });
      setEditId(null);
    } else {
      await axios.post("http://localhost:3000/user", {
        name,
        email,
        password, // ✅ added
      });
    }

    // ✅ clear all inputs
    setName("");
    setEmail("");
    setPassword("");

    getUsers();
  };
  // DELETE USER
  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3000/user/${id}`);
    getUsers();
  };

  // EDIT USER
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
        {/* FORM */}
        <div className="theme-card mb-4">
          <h4>{editId ? "Edit User" : "Add User"}</h4>

          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={5}>
                <Form.Control
                  placeholder="Enter Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Col>

              <Col md={5}>
                <Form.Control
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Col>

              <Col md={5}>
                <Form.Control
                  type="password"
                  placeholder="Enter Password"
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

          <Table hover className="mt-3 text-white">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th style={{ width: "180px" }}>Action</th>
              </tr>
            </thead>

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
                      onClick={() => deleteUser(user.id)}
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

        .back-btn {
          background: #ffc107;
          border: none;
          color: #000;
          font-weight: bold;
          border-radius: 8px;
        }

        .back-btn:hover {
          background: #e0a800;
        }

        .theme-card {
          background: #111;
          padding: 20px;
          border-radius: 12px;
          border: 1px solid rgba(255,193,7,0.2);
          transition: 0.3s;
        }

        .theme-card:hover {
          box-shadow: 0 0 20px rgba(255,193,7,0.3);
          transform: translateY(-3px);
        }

        th {
          color: #ffc107;
        }

        input {
          background: #1a1a1a !important;
          border: 1px solid #333 !important;
          color: #fff !important;
        }

        input:focus {
          border-color: #ffc107 !important;
          box-shadow: 0 0 8px rgba(255,193,7,0.4);
        }
      `}</style>
    </div>
  );
}

export default AdminUsers;
