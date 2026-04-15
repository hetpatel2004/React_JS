import axios from "axios";
import React, { useState } from "react";

function Registration() {

    // axios.get("http://localhost:3000/user")
    // .then(res => console.log(res.data))
    
const [name ,setname]= useState("")
const [email ,setemail]= useState("")
const [password ,setPassword]= useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    axios.post("http://localhost:3000/user"
        ,{
            name ,email,password
        }
    )
    .then(res => console.log(res.data))


    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Registration Successful!");
    setname("")
    setemail("")
    setPassword("")
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Registration Page</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={name}
            onChange={(e)=>setname(e.target.value)}
          />
        </div>

        <br />

        <div>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e)=>setemail(e.target.value)}
          />
        </div>

        <br />

        <div>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>

        <br />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Registration;