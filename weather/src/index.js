import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//NOTE the "App" component is imported here, from the App.js file
import App from './App';

//NOTE render the App component in the root element
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// import reportWebVitals from './reportWebVitals';
// reportWebVitals();
