// import React from 'react'

// function Basic() {
//   return (
//     <h1>this file is having just this text</h1>
//   )
// }

// export default Basic

import React from 'react';

function Basic(props) {
  return (
    <h1>this file is having just this text - {props.name}</h1>
  );
}

export default Basic;