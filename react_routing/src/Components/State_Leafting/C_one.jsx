import React, { useState } from 'react'

function C_one(props) {
    
  return (
    <input type="text" onChange={(e)=>props.value(e.target.value)} placeholder='Enter your name...'/>
  )
}

export default C_one