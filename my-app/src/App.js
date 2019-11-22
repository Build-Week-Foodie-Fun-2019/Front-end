import React from "react";
import PrivateRoute from "./utils/PrivateRoute";
import "./App.css";
import { Switch, BrowserRouter as Router, Route, Redirect, } from "react-router-dom";

import FormikLogin from "./Components/Login";
import FormikRegister from "./Components/Register";
import Restaurant from "./Components/Restaurant";
import ReviewForm from "./Components/ReviewForm";
import Account from "./Components/Account";
import Profile from "./Components/Profile";
import ReviewList from "./Components/ReviewList";
import SingleReview from "./Components/SingleReview";

function App() {
  return (
    <div className="App">
      {/* <Router>
      <Route exact path="/login" component={FormikLogin} />
      <Route path="/register" component={FormikRegister} />
      <Route path="/profile/reviewform" component={ReviewForm}/>
      <Route path="/profile" component={Profile}/>
      </Router> */}
      <Router>
                   
                        <Switch>
                            {/* {public routes} */}
                            <Route path="/login" component={FormikLogin}/>
                            <Route path="/signup" component={FormikRegister}/>

                            {/* {private routes} */}
                            <PrivateRoute exact path="/profile" component={Profile}/>
                            <PrivateRoute
                                exact
                                path="/profile/review/:id"
                                component={SingleReview}
                            />
                            <PrivateRoute
                                exact
                                path="/profile/reviewform"
                                component={ReviewForm}
                            />
                            <PrivateRoute
                                exact
                                path="/profile/reviews"
                                component={ReviewList}
                            />

                            {/* {default} */}
                            <Redirect from="/" to="/profile"/>
                        </Switch>
                </Router>
    </div>
  );
}
export default App;

