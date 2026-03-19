import React from 'react'
import { useParams } from 'react-router-dom'

function Person() {
const user = [
    {id:1,name:"abc"},
    {id:2,name:"xyz"}
]

const {id} = useParams()

  return (
    <>{
    user.map((users) =>(
    <h1>Hello {users.name}</h1>
    ))}
    </>
  )
}

export default Person