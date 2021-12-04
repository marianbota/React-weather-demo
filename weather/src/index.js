import React from 'react';
import ReactDOM from 'react-dom';
//NOTE import bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

//NOTE the "App" component is imported here, from the App.js file
import App from './App';

//NOTE render the App component in the root element
ReactDOM.render(
  <React.StrictMode>
    <App cities ={['Sibiu', 'Cluj']}/>
  </React.StrictMode>,
  document.getElementById('root')
);

