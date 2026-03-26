import React, { useRef } from 'react'
import Chiled from './Chiled';

function Parent() {
    const ref = useRef();
  return (<>
    <h1>parent</h1>
    <Chiled ref={ref}/>
    <button onClick={()=>(ref.current.content())}>click</button>
  </>
  )
}

export default Parent