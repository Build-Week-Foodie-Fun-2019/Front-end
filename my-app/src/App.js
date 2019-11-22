import React from "react";
import PrivateRoute from "./utils/PrivateRoute";
import "./App.css";
import "./Components/nav.css";
import {
  Switch,
  BrowserRouter as Router,
  Route,
  Redirect
} from "react-router-dom";

import FormikLogin from "./Components/Login";
import FormikRegister from "./Components/Register";
import Restaurant from "./Components/Restaurant";
import ReviewForm from "./Components/ReviewForm";
import Account from "./Components/Account";
import Profile from "./Components/Profile";
import Nav from "./Components/Nav";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={Nav} />
        <Route exact path="/login" component={FormikLogin} />
        <Route path="/register" component={FormikRegister} />
        <Route path="/profile/reviewform" component={ReviewForm} />
        <Route path="/profile" component={Profile} />
      </Router>
    </div>
  );
}
export default App;
