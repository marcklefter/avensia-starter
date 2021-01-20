import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

// ...
// Uncomment an example to run it.
// import { App } from './driver';
// import { App } from './feed';
import { App } from './todo';
// import { App } from './useEffect';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
