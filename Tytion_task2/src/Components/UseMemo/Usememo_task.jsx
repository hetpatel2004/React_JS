import React, { useMemo, useState } from 'react'

function Usememo_task() {
  const [number ,setnumber]= useState(0)
  const [arr , setarr]= useState([1,2,3,4,5,6,7,8,9,10])
  
  // const Double = useMemo(()=>{
  //   console.log("function is colling")
  //   return number *2} ,[number]) task-1

  // const Checker =useMemo(()=>{
  //   console.log("calling function");
  //   return number % 2 === 0 ? "even" : "odd"
  // }) task-2

  const sum = useMemo(()=>{
    console.log("peinting function");
    return arr.reduce((total, final_value)=>(total + final_value ,0))
  },[arr])

  
  return (
    <>
    {/* <h1>Number:-{number}</h1>
    <h1>Double:-{Double}</h1>
   <button onClick={()=>setnumber(number + 1)}>click me </button> task-1*/}

   {/* <h1>{number}</h1>
   <h1>{Checker}</h1>
   <button onClick={()=>setnumber(number + 1)}>click me</button> task-2 */}

    <h1>{sum}</h1>
    <h1>{arr}</h1>
    <button onClick={()=>setarr([...arr,11])}>click me </button>
    </> 
  )
}

export default Usememo_task