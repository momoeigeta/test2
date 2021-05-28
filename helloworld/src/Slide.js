import React, { useState } from 'react';
import './App.css';

const Slide = () => {

  const [value, setValue] = useState("");

  setValue.style.visibility ="hidden";

  const showMessage = () => {
    if (setValue.style.visibility === "visible") {
      setValue.style.visibility = "hidden";
    }else {
        setValue(`Hello!`);
      }
  }
  return (
    <div>
      <div className="App" id="root" onClick={showMessage}>
        HelloReact!
    </div>
      <div>
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
