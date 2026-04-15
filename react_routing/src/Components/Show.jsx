import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Show() {
  const [records, setrecords] = useState([]);
  useEffect(()=>{
     axios
        .get("http://localhost:3000/user")
        .then((res) => setrecords(res.data))
        .catch((err) => console.log(err))
  },[])
  return (
    <>
      {records.map((abc) => (
        <div key={abc.id}>
          <p>Id:- {abc.id} </p>
          <p>Name:- {abc.name} </p>
          <p>Email:- {abc.email} </p>
          <p>Password:- {abc.password} </p>
            <Link to={`/edit/${abc.id}`}>
            <button>EDIT</button>
            </Link>
            <Link to={`/delete/${abc.id}`}>
                <button>Delete</button>
            </Link>
          <hr />
        </div>
      ))}
    </>
  );
}

export default Show;
