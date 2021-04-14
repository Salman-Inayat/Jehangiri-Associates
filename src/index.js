import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import 
import axios from "axios";
axios.defaults.baseURL = process.env.REACT_APP_BACKEND_DEV;
// require('dotenv').config();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

