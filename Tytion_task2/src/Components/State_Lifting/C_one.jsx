import React, { useState } from "react";

function C_one(props) {
  return (
    <>
      {/* // <input */}
      {/* //   type="text"
    //   name="update"
    //   id="update_state"
    //   value={props.value}
    //   onChange={(e) => props.state(e.target.value)} */}
      {/* // /> T-1,2 */}

      {/* // <button  onClick={()=>props.state(props.value +1)}> click me</button> T-3 */}

      {/* <input type={props.value? "text" : "password"}/>
    <button onClick={()=>props.state(!props.value)}>click me</button> T-4*/}

      {/* <input
        type="text"
        name="task-6"
        id="task-6"
        placeholder="Enter value ..."
        value={props.value}
        onChange={(e) => props.state(e.target.value)}
      /> T-6*/}

      {/* <input type="text" placeholder="name" name="name" id="name" value={props.n_value} onChange={(e)=>props.n_state(e.target.value)} />
      <input type="text" name="name" id="name" value={props.e_value} onChange={(e)=>props.e_state(e.target.value)} /> */}
      {/* <input type="text" placeholder="name" value={props.n_value} onChange={(e)=>props.n_state(e.target.value)}/>
      <input type="text" placeholder="email" value={props.e_value} onChange={(e)=>props.e_state(e.target.value)}/> */}
      <label>
        <input
          type="checkbox"
          // checked={checked}
          onChange={(e) =>props.setChecked(e.target.checked)}
        />
        Accept Terms
      </label>
    </>
  );
}

export default C_one;
