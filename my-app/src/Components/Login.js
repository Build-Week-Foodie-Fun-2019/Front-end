import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [login, setLogin] = useState({
    username: "",
    password: ""
  });

  const stateFormChange = e => {
    setLogin({
      ...login,
      [e.target.member]: e.target.value
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div className="Login">
      <h1>Login Here</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            name="username"
            placeholder="Enter your Username"
            onChange={stateFormChange}
          />
        </label>
        <label>
          <input
            type="password"
            name="password"
            placeholder="Enter your Password"
            onChange={stateFormChange}
          />
        </label>
        <Link to="/rest">
          <button>Login In Here</button>
        </Link>
        <Link to="/register">
          <button>New? Register Here</button>
        </Link>
      </form>
    </div>
  );
}
export default Login;
