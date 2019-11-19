import React from "react";
import PrivateRoute from "./utils/PrivateRoute";
import "./App.css";
import { Switch, BrowserRouter as Router, Route, Redirect, } from "react-router-dom";

import FormikLogin from "./Components/Login";
import FormikRegister from "./Components/Register";
import Restaurant from "./Components/Restaurant";
import Review from "./Components/Review";
import Account from "./Components/Account";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={FormikLogin} />
      <Route path="/register" component={FormikRegister} />
      <Route path="/rest" component={Restaurant} />
      <Route path="/review" component={Review}/>
      <Route path="/account" component={Account} />
    </div>
  );
}
export default App;
