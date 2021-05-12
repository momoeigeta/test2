import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import CounterApp from './CounterApp';
import Sidebar from './Sidebar';
import Slide from './Slide';

const App = () => {
  return (
    <Route>
    <Sidebar />
    <Route path="/slide" component={Slide} />
    <Route path="/counterapp" component={CounterApp} />
    <Redirect from="/" to="/slide" />
  </Route>

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
