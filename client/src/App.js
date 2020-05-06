import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Home from "./pages/home/"
import Admin from "./pages/admin"
import User from "./pages/user"
import NoMatch from "./pages/noMatch"

function App() {
  return (
    <div className="App">
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/user" component={User} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
