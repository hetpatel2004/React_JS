import React, { useMemo, useState } from 'react'

function Usemem() {
    const [btn ,setbtn]= useState(0)
    const [input ,setinput]= useState(0)
    function tasting(num) {
        for (let index = 0; index < 100000; index++) {}
        console.log("first");

    return num * 5
    }
    const lode = useMemo(()=> tasting(input),[input])
  return (
    <>
    <button onClick={()=>setbtn(btn + 1)}> click me </button>
    <h1>{btn}</h1>
    <hr />
    <input type="text" onChange={(e)=>setinput(e.target.value)}/>
    <p>{lode}</p>
    </>
)
}

export default Usemem