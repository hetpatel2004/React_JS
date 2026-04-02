import React, { useState } from 'react'
import C_one from './C_one'
import C_two from './C_two'

function Parent_one() {
  const [task ,settask]= useState("") //t-1,2
  const [count ,setcount] = useState(0) //t-3
  const [toggle ,settoggle] = useState(false) //t-4
  const [six ,setsix] = useState("") //t-6
  const [name, setname]=useState("") //t-7
  const [email, setemail]=useState("") //t-7
   const [checked, setChecked] = useState(false);
  return (
    <>
    {/* <C_one state={settask} value={task} /> */}
    {/* <h1>{task}</h1> T-1 */}
    {/* <input type="text" value={task}/> T-2 */}

    {/* <C_one state={setcount} value={count}/> */}
    {/* <h1>{count}</h1> T-3 */}
    
    {/* <C_one value={toggle} state={settoggle} /> T-4*/}

      {/* <C_one value={six} state={setsix} />
      <h1>{six}</h1> T-6*/}

      {/* <C_one n_value={name} n_state={setname} e_value={email} e_state={setemail}/>
      <C_two n_value={name} e_value={email}/> */}

       {/* <h3>Checkbox Sync Example</h3>
      <C_one checked={checked} setChecked={setChecked} />
      <p>Status: {checked ? "Checked" : "Unchecked"}</p> */}
    </>
    
  )
}

export default Parent_one