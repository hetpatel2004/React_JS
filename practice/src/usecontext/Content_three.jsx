import React, { useContext } from 'react'
import { name } from './Cont_one'

function Content_three() {
  const abc = useContext(name)
  return (
    <h1>{abc}</h1>
  )
}

export default Content_three