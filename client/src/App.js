import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home/";
import SignUp from "./pages/signup";
import Login from "./pages/login";
import User from "./pages/user";
import NoMatch from "./pages/noMatch";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCommentMedical, faUserMd, faLaptopMedical  } from '@fortawesome/free-solid-svg-icons';
import ContactUs from './pages/contact';

library.add(faCommentMedical, faLaptopMedical, faUserMd)

function App() {
  return (
    <div className="App">
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/user" component={User} />
          <Route exact path="/contact" component={ContactUs} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
