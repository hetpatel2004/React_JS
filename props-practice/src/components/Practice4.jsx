import { useState } from "react";

function Tfour(props) {
    // const [name ,setname] =useState()
    return(
        <div>

        <h3>{props.name}</h3>
        {/* <input type="text" placeholder="name" onChange={(e)=> }/> */}
        <h3>{props.age}</h3>
        <h3>{props.city}</h3>
        </div>
    )
}
export default Tfour;