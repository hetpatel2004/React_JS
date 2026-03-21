import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Person() {
  const navigator = useNavigate()
const user = [
    {id:1,name:"abc"},
    {id:2,name:"xyz"}
]

  return (
    <>{
    user.map((users) =>(
      <div>
    <h1>Hello {users.name}</h1>
    <button onClick={()=>navigator(`card01/${users.id}`)}>click me </button>
      </div>
    ))}
    </>
  )
}

export default Person