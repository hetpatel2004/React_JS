import React, { useEffect, useLayoutEffect } from 'react'

function Useeffect() {
    useEffect(()=>{
        console.log("text added by use effect in react")
})
    useLayoutEffect(()=>{
        console.log("text added by use Layout effect in react")
})
  return (
    <dl>
        <dt>useState</dt>
        <dd>useState is used to remember values in a component and update the UI when those values change.</dd>
        <dt>useEffect</dt>
        <dd>useEffect is a Hook used to perform side effects(Side effects are operations that affect something outside the component or happen after rendering.) in functional components.</dd>
    </dl>
  )
}

export default Useeffect