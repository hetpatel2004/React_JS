import React from 'react'
import Main_rought from '../Main_rought'
import { Navigate } from 'react-router-dom';
import Home from './Home';

function About() {
  const status = true  
  return (
   <>
   {/* <Main_rought/> */}
   <h1>About</h1>
    {status ? "user logined" : <Navigate to={"/home"}/>}
   </>
  )
}

export default About