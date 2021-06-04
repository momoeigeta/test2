import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './views/App';
// import GetData from './GetData';
// import FrontC from './frontC';

import reportWebVitals from './reportWebVitals';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from "history";
// import App from './Slide';
// import * as serviceWorker from './serviceWorker';

// import Sidebar from './Sidebar';
import Home from './Portfolio/pages/Home';
// import Menubar from './Portfolio/pages/menubar';


const hist = createBrowserHistory();

ReactDOM.render(
    <Router history={hist} >
        {/* <Sidebar /> */}
        {/* <FrontC /> */}
        <Home />
        {/* <Menubar /> */}
        {/* <GetData /> */}
        {/* <App /> */}
    </Router>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();