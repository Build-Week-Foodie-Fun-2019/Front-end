//Authenticated user can access a view 
//containing all of their previously created 
//restaurants and reviews, and should be able to filter by 
//the following (mobile, web):	

import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Account() {
  const [account, setAccount] = useState({
    rest: "",
    price_of_item: "",
    type_of_cuisine: "",
    most_visited: "",
    menu_item_rating: "",
    rest_rating: "",
    nearby_rest: ""
  });

  const stateFormChange = e => {
    setAccount({
      ...account,
      [e.target.member]: e.target.value
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div className="Account">
      <h1>Your Account</h1>
      <form onSubmit={handleSubmit}>
        <label>
            {""}
            Restaurant
          <input
            type="text"
            name="rest"
            placeholder="Enter Restaurant"
            onChange={stateFormChange}
          />
        </label>
        <label>
            {""}
            Price of Item
          <input
            type="text"
            name=" price_of_item"
            placeholder="Enter Price"
            onChange={stateFormChange}
          />
        </label>
        <label>
            {""}
            Type of Cuisine
          <input
            type="password"
            name=" type_of_cuisine"
            placeholder="Enter Cuisine"
            onChange={stateFormChange}
          />
        </label>
        <label>
            {""}
            Most Recently Visited
          <input
            type="password"
            name="most_visited"
            onChange={stateFormChange}
          />
        </label>
        <label>
            {""}
            Rating
        <select>
            <option></option>
            <option>⭐</option>
            <option>⭐⭐</option>
            <option>⭐⭐⭐</option>
            <option>⭐⭐⭐⭐</option>
            <option>⭐⭐⭐⭐⭐</option>
          </select>
        </label>
        <label>
            {""}
            Nearby Restaurant's
          <input
            type="text"
            name="nearby_rest"
            onChange={stateFormChange}
          />
        </label>
        <Link to="/rest">
          <button type="button">Take me back Home to Find more Yummies</button>
        </Link>
      </form>
    </div>
  );
}
