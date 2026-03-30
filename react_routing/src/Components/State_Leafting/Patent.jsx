import React, { useState } from 'react'
import C_one from './C_one'
import C_two from './C_two'

function P_Patent() {
    const [name ,setname]= useState("")
  return (
    <>
    <C_one value={setname}/>
    <C_two abc={name}/>
    </>
  )
}

export default P_Patent