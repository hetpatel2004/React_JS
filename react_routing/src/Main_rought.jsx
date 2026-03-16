import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Index from './Components/Index'
import Home from './Components/Home'
import About from './Components/About'
import Contect from './Components/Contect'
import Error_404 from './Error'
import Login from './Components/Login'
import Person from './Components/Person'

function Main_rought() {
  return (
    <Routes>
        <Route path="/" element={<Index/>}>
        <Route path="home" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contect" element={<Contect/>}/>
        <Route path="person/:id" element={<Person/>}/>
        <Route path="*" element={<Error_404/>}/>
        <Route path="login" element={<Login/>}/>
        </Route>
    </Routes>
  )
}

export default Main_rought