import React from 'react'
export const iterator = {count:0} 
function UseReducer(state,action) {
  console.log(state);  
 switch (action.type) {
  case "inc":
    return{count:state.count +1}
  case "dec":
    return{count:state.count -1}
  case "reset":
    return iterator

  default:
    return state
    
 }
}

export default UseReducer