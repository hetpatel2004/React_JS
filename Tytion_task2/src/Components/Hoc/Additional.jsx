// import React from 'react'

// function Additional(Abc) {

//   function inner_function(props) {
//     return(
//     <>
//     <h1>Text comes from additional file</h1>
//     <Abc {...props}/>
//     </>)
//   }
//   return inner_function
// }
// export default Additional

import React from 'react';

function Additional(Abc) {

  function InnerFunction(props) {   // receive props
    return (
      <>
        <h1>Text comes from additional file</h1>

        {/* forward props */}
        <Abc {...props} />
      </>
    );
  }

  return InnerFunction;
}

export default Additional;