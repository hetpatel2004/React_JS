import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import Index from './Index'
import Home from './Home'
import About from './About'
import 'bootstrap/dist/css/bootstrap.min.css'
function Main_route() {
  return (<>
    <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
    </Routes>
  </>
  )
}

export default Main_route