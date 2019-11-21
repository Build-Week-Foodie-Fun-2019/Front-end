import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <nav className="nav-bar">
        <Link to="/login">
          <button className="login-nav">Login</button>
        </Link>
        <Link to="/register">
          <button className="reg-nav">Register</button>
        </Link>
      </nav>
    </div>
  );
}
export default Nav;
