import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// eslint-disable-next-line
import App from './App';
// eslint-disable-next-line
import GetData from './GetData';
import FrontC from './frontC';

import reportWebVitals from './reportWebVitals';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from "history";
// import App from './Slide';
// import * as serviceWorker from './serviceWorker';

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <FrontC />
    {/* <GetData /> */}
    {/* <App /> */}
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
