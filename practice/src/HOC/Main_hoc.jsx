import React from 'react'
import Samll from './Samll'
import Extra_component from './Extra_component'

function Main_hoc() {
    const Het = Extra_component(Samll)
  return (
    <>
    <Het/>
    <h1>comes form main component</h1>
    {/* <Samll/>
    <Extra_component/> */}
    </>
  )
}

export default Main_hoc