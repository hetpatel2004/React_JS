import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

function Show() {
  const [records, setrecords] = useState([]);
  useEffect(() =>(
      axios.get("http://localhost:3000/user").then((res) => {
        setrecords(res.data);
      })),
    [],
  );
  return (
    <>
      {records.map((abc) => (
        <div key={abc.id}>
          <p>Id:- {abc.id} </p>
          <p>Name:- {abc.name} </p>
          <p>Email:- {abc.email} </p>
          <p>Password:- {abc.password} </p>
           <hr />
         </div>
      ))}
    </>
  );
}

export default Show;
