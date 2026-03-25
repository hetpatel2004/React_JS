import { useState } from "react"

function Task5() {
    const [name ,setName]=useState("")
    const [user ,setuser]= useState([])
    function add() {
        // console.log(name);
        const het = {
            id: Date.now(),
            text: name
        }
        setuser([...user,het])
    }
    function del(par) {
        console.log(par);
        
    }
    return(
        <>
        <input type="text"
        placeholder="Entar the value" 
        onChange={(e)=>(setName(e.target.value))
        }
        value={name}
        />
        <button onClick={add}>wehfu</button>
        {/* <h1>{name}</h1> */}
        {user.map((we)=>(
            <>
            <h1>{we.text}</h1>
            <button onClick={()=>del(we.id)}>delete</button>
            </>
        ))}
        </>
    )
}
export default Task5