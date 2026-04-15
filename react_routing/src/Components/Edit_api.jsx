import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Edit_api() {
    const [data ,setdata]= useState({
      name: "",
      email:"",
      password:""
    })
    const {id} =useParams();

    useEffect(()=>{
        axios.get(`http://localhost:3000/user/${id}`)
        .then((res)=>setdata(res.data))
},[id])

  function updatetext() {
    axios.put(`http://localhost:3000/user/${id}`,data).then(alert("updated"))
  }
  return (
     <>
     <h1>User id is{id}</h1>
      <input type="text" value={data.name} 
      onChange={(e)=>setdata({...data ,name:e.target.value})}/> <br /><br />
      <input type="text" value={data.email} onChange={(e)=>setdata({...data ,email:e.target.value})}/> <br /><br />
      <input type="text" value={data.password} onChange={(e)=>setdata({...data ,password:e.target.value})}/> <br /><br />

      <button onClick={updatetext}>Update</button>
     </>
  )
}
export default Edit_api