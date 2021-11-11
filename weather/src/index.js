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

