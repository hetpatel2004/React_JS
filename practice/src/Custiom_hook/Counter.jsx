import React from 'react'
import usehook from './Usehook'

function Counter() {
    const [inc,dec,num]=usehook(0)
    
  return (
    <>
    <button onClick={inc}>+</button>
    <h1>{num}</h1>
    <button onClick={dec}>-</button>
    </>
  )
}

export default Counter