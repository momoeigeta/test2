import React from 'react';
import './App.css';

const App = () => {
  const showMassage = () => {
    alert(`Hello!`);
  }
  return (
    <div className="App" id="root" onClick={showMassage}>
      HelloReact!
    </div>
  );
}

export default App;




// import React from 'react';

// const App = () => {
//   return (
//     <div>
//       <h1>Hello World</h1>
//     </div>
//   );
// }

// export default App;
