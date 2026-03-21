import React from 'react'
import { useParams } from 'react-router-dom'

function Card01() {
  const {id}=useParams()
  return (
    <h1>wegfui {id}</h1>
  )
}

export default Card01