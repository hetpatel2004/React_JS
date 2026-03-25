import React, { createContext, useState } from 'react'
import Cont_two from './cont_two'
 
  export const name = createContext()
function Cont_one() {
  const [text, setname] =useState("het")
  return (
   <name.Provider value={text}>
    <Cont_two name={text}/>
   </name.Provider>
  )
}

export default Cont_one