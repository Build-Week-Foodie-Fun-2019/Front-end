import React from "react";
import "./App.css";
import { Route } from "react-router-dom";

import Login from "./Components/Login";
import Register from "./Components/Register";
import Restaurant from "./Components/Restaurant";
import Review from "./Components/Review";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/rest" component={Restaurant} />
      <Route path="/review" component={Review}/>
    </div>
  );
}
export default App;
