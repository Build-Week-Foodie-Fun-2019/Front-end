import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const [register, setRegister] = useState({
    id: "",
    username: "",
    password: "",
    users_location: "",
    users_email: ""
  });

  const stateFormChange = e => {
    setRegister({
      ...register,
      [e.target.member]: e.target.value
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div className="Login">
      <h1>Stay Updated, Subscribe to Foodies!</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            name="id"
            placeholder="Enter your ID"
            onChange={stateFormChange}
          />
        </label>
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
        <label>
          <input
            type="password"
            name="password"
            placeholder="Enter your Password"
            onChange={stateFormChange}
          />
        </label>
        <label>
          <input
            type="email"
            name="email"
            placeholder="Enter your Email"
            onChange={stateFormChange}
          />
        </label>
        <Link to="/rest">
          <button type="button">Join Now!</button>
        </Link>
      </form>
    </div>
  );
}
