import React, { useState } from 'react'

function usehook() {
    const [num ,setnuber]= useState(0)
  function inc() {
     setnuber(num +1) 
  }
  function dec() {
     setnuber(num -1) 
  }
  return [inc,dec,num]
}

export default usehook