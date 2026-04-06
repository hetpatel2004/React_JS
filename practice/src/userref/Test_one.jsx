import React, { useRef, useState } from 'react'

function Test_one() {
    const [text , settext] =useState("")
    const abc = useRef("")
function copy() {
    window.navigator.clipboard.writeText(text)
    abc.current.focus()
}
  return (
    <>
    <input type="text" value={text} ref={abc} onChange={(e)=>settext(e.target.value)}/>
    <button onClick={copy}>click for copy</button>
    </>
  )
}

export default Test_one