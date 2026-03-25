import { useState } from "react";

function Tone() {
    const [number ,setnumber] = useState(0)
    return(
        <div>
            <h1>count :{number}</h1>

            <button onClick={ () => setnumber(number+1)}>
                plus
            </button>

            <button onClick={ () => setnumber(number-1)}>
                sub
            </button>
            <button onClick={ ()=> { setnumber(number - number)}}>
        reset
            </button>
        </div>
    )

}
export default Tone;
