import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Form, Button, Table } from "react-bootstrap";

function AdminCars() {
  const [cars, setCars] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  // 🔥 Fetch Cars
  const getCars = async () => {
    const res = await axios.get("http://localhost:3000/cars");
    setCars(res.data);
  };

  useEffect(() => {
    getCars();
  }, []);

  // ➕ Add Car
  const addCar = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:3000/cars", {
      name,
      price,
      image,
      booked: false,
      trending: false,
    });

    alert("Car Added");
    setName("");
    setPrice("");
    setImage("");
    getCars();
  };

  // ❌ Delete Car
  const deleteCar = async (id) => {
    await axios.delete(`http://localhost:3000/cars/${id}`);
    getCars();
  };

  // 🔒 Toggle Booked
  const toggleBooked = async (car) => {
    await axios.patch(`http://localhost:3000/cars/${car.id}`, {
      booked: !car.booked,
    });
    getCars();
  };

  // ⭐ Toggle Trending
  const toggleTrending = async (car) => {
    await axios.patch(`http://localhost:3000/cars/${car.id}`, {
      trending: !car.trending,
    });
    getCars();
  };

  return (
    <Container className="mt-4">
      <h3>Add New Car 🚗</h3>

      {/* ➕ ADD FORM */}
      <Form onSubmit={addCar} className="mb-4">
        <Form.Control
          className="mb-2"
          placeholder="Car Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Form.Control
          className="mb-2"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <Form.Control
          className="mb-2"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <Button type="submit">Add Car</Button>
      </Form>

      {/* 📊 TABLE */}
      <Table bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Status</th>
            <th>Trending</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {cars.map((car) => (
            <tr key={car.id}>
              <td>{car.name}</td>
              <td>₹{car.price}</td>

              {/* Booked */}
              <td>
                <Button
                  variant={car.booked ? "danger" : "success"}
                  onClick={() => toggleBooked(car)}
                >
                  {car.booked ? "Booked" : "Available"}
                </Button>
              </td>

              {/* Trending */}
              <td>
                <Button
                  variant={car.trending ? "warning" : "secondary"}
                  onClick={() => toggleTrending(car)}
                >
                  {car.trending ? "Yes" : "No"}
                </Button>
              </td>

              {/* Delete */}
              <td>
                <Button
                  variant="danger"
                  onClick={() => deleteCar(car.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default AdminCars;