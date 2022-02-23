import React from 'react';
// import Sample1 from './Component/Sample1';
// import Sample from './Component/Sample';
import {Link} from 'react-router-dom'
function App() {
  return (
     <div id="Page">
      {/* <Sample1></Sample1> */}
      {/* <Sample></Sample> */}
      <Link to='/sample1'><h1>Registration form Signup</h1></Link>
    </div>
  );
}
export default App;