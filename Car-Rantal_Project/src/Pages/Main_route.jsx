import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
// import Index from './Index'
// import Home from './Home'
import About from './About'
import 'bootstrap/dist/css/bootstrap.min.css'
import Index_two from './Index_two'
import Login from './Login'
import Ragister from './Ragister'
import Available_cars from './Available_cars'
import Contect from './Contect'
function Main_route() {
  return (<>
    <Routes>
      <Route path='/' element={<Index_two/>}/>
        <Route path="/available_cars" element={<Available_cars/>}/>
        <Route path="/contect" element={<Contect/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/ragister" element={<Ragister/>}/>
    </Routes>

  </>
  )
}

export default Main_route