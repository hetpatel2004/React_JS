import React, { useState } from 'react'

function Practice() {
    const [name,setname]= useState("")
    const [arr ,setarr]= useState([])
    function add() {
        if(name === "")return;
        setarr([...arr,name])
        setname("")
    }
  return (<>
    <input type="text" name="" id="" value={name} onChange={(e)=>setname(e.target.value)}/>
    <button onClick={add}>click me to add </button>

    <ul>
        {arr.map((item ,index)=>(
            <li key={index}>{item}</li>
        ))}
    </ul>
  </>
  )
}

export default Practice