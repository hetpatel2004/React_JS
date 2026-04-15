import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Useeffect from './Components/Useeffect'
import axios from 'axios'

function Delete() {
    const [data ,setdata]=useState({
        name:"",
        email:"",
        password:""
    })
    const {id}=useParams()
    Useeffect(()=>(
        axios.get("http://localhost:3000/user/${id}")
        .then((res)=>setdata(res.data))
    ))
    return(
    <>
    <h1>data of this given id {id}</h1>
    <input type="text" value={data.email} onClick={(e)=>setdata({...data ,name:e.target.value})}/>
    </>
    )
}

export default Delete