import { useState } from "react";

function Tthree() {

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");

  return (
    
    <>
    <div>
        <h1>name:{name}</h1>
        <input type="text" placeholder="Enter NMAE" onChange={(e)=> setName(e.target.value)}/>
    </div>
    <div>
        <h1>Age:</h1>
        <input type="text" placeholder="Enter NMAE" onClick={(e)=> setAge(e.target.value)}/>
    </div>
    <div>
        <h1>city:</h1>
        <input type="text" placeholder="Enter " onClick={(e)=> setCity(e.target.value)}/>
    </div>
    </>
  );
}

export default Tthree;