import { useState } from "react"

function Ttwo() {
    const  [name ,setname] = useState(false)
    return(
        <>
        <h2>Name {name ? "ON" : "OFF"}</h2>
        <button onClick={ ()=> setname(!name)}>
            togel
        </button>
        </>
    )
}
export default Ttwo