import React from 'react';
import './App.css';
import { Router } from "react-router-dom";
import Routes from "./router";
import { createBrowserHistory } from "history";
// require('dotenv').config();

function App() {

  const browserHistory = createBrowserHistory();

  return (
    <div className="App">
    {console.log(process.env)}
      <Router history={browserHistory}>
          <Routes />
      </Router>
      {/* <AboutUs/> */}
    </div>
  );
}

export default App;
