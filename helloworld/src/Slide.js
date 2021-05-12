import React from 'react';
import './App.css';

const Slide = () => {
  const showMessage = () => {
    alert(`Hello!`);
  }
  return (
    <div className="App" id="root" onClick={showMessage}>
      HelloReact!
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
