import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import './App.css';

const Slide = () => {

  const [value, setValue] = useState("");


  const showMessage = () => {
    let div = document.getElementById("view");
    let state = div.style.display;
    if (state === "none") {
      setValue(`Hello!`);
      div.setAttribute("style", "display:inline");
    } else {
      div.setAttribute("style", "display:none");
    }
  }

  return (
    <div>
      <button className="App" id="root" onClick={showMessage} style={{userSelect: 'none'}}>
        HelloReact!
    </button>
      <div id="view" style={{ display: 'none', userSelect: 'none'}} >
        {value}
      </div>
    </div>
  );
}

export default Slide;




// import React from 'react';

// const App = () => {
//   return (
//     <div>
//       <h1>Hello World</h1>
//     </div>
//   );
// }

// export default App;
