import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Parent_one from './Components/State_Lifting/Parent_one'
import Practice from './Components/State_Lifting/Practice'
import Usememo_task from './Components/UseMemo/Usememo_task'

function Main_Router() {
  return (
    <Routes>

        <Route path='/state_lifting' element={<Parent_one/>}/>
        <Route path='/practice' element={<Practice/>}/>
        <Route path='/usememo' element={<Usememo_task/>}/>
    </Routes>
  )
}

export default Main_Router