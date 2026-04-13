// import React from 'react'
// import Additional from './Additional'
// import Basic from './Basic'

// function Main_hoc() {
//     const Anyname = Additional(Basic)
//   return (<>
//     <h1>content added in:-</h1>
//     <Anyname/>
//   </>
//   )
// }

// export default Main_hoc

import React from 'react';
import Additional from './Additional';
import Basic from './Basic';

function Main_hoc() {
  const Anyname = Additional(Basic);

  return (
    <>
      <h1>content added in:-</h1>

      {/* pass props */}
      <Anyname name="Het Patel" />
    </>
  );
}

export default Main_hoc;