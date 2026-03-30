import React, { useReducer } from 'react'

import UseReducer, { iterator } from './UseReducer'
function UseReducer_main() {

    const [data ,dispatch] = useReducer( UseReducer,iterator);
  return (<>
  <h1>{data.count}</h1>
    <button onClick={()=>dispatch({type:"inc"})}>increment</button>
    <button onClick={()=>dispatch({type:"dec"})}>decrement</button>  
    <button onClick={()=>dispatch({type:"reset"})}>reset</button>  
  </>
  )
}

export default UseReducer_main