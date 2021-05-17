import React from 'react';
// import logo from './logo.svg';
// import {Route, Redirect} from 'react-router-dom';
// import CounterApp from './CounterApp';
// import Sidebar from './Sidebar';
// import Slide from './Slide';
import '../App.css';
import CounterApp from '../components/CounterApp';
import Hello from '../components/Hello';

const App = () => {
  return (
    <div className="App">
      <Hello contents='Hello world!' />
      <CounterApp color='tomato' />
      <CounterApp color='skyblue' />
      <CounterApp color='limegreen' />
    </div>
    // <Route>
    // <Sidebar />
    /* <Route path="/slide" component={Slide} />
    <Route path="/counterapp" component={CounterApp} /> */
    // <Redirect from="/" to="/slide" />
  // </Route>

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




