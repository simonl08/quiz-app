import React, { useState, useEffect} from "react";
import ApiData from './api/ApiData'
// import Register from "./Components/register.js"
// import Login from "./Components/login.js";
import {Navbar} from "./styles/globalStyles"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Dashboard from "./pages/Dashboard.js";
import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar>Quiz</Navbar>
      < ApiData />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/dashboard" component={Dashboard}/>
      </Switch>
    </Router>
  );
}

export default App;
