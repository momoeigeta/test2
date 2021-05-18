import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// eslint-disable-next-line
import App from './views/App';
// eslint-disable-next-line
import GetData from './GetData';
// eslint-disable-next-line
import FrontC from './frontC';

import reportWebVitals from './reportWebVitals';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from "history";
// import App from './Slide';
// import * as serviceWorker from './serviceWorker';
// eslint-disable-next-line
import Sidebar from './Sidebar';
import Home from './Portfolio/pages/Home';


const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Home />
    {/* <FrontC /> */}
    {/* <GetData /> */}
    {/* <App /> */}
    {/* <Sidebar /> */}
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
