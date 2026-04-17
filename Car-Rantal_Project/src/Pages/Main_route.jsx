import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import Index from './Index'
import Home from './Home'
import About from './About'
import 'bootstrap/dist/css/bootstrap.min.css'
import Index_two from './Index_two'
import Login from './Login'
import Ragister from './Ragister'

function Main_route() {
  return (<>
    <Routes>
        <Route path="/" element={<Index_two/>}/>
        <Route path="/index" element={<Index/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/ragister" element={<Ragister/>}/>
    </Routes>
  </>
  )
}

export default Main_route