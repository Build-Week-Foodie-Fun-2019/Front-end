import React, { useState } from "react";
import { Link } from "react-router-dom";

function Restaurant() {
  const [rest, setRest] = useState({
    name: "",
    id: "",
    type_of_cuisine: "",
    location: "",
    hours_of_op: "",
    rating: "",
    reviews: "",
    photos: ""
  });

  const FormChange = e => {
    setRest({
      ...rest,
      [e.target.member]: e.target.value
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div className="Rest">
      <h1>Where Did You Eat At?</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            name="name"
            placeholder="Enter your Name"
            onChange={FormChange}
          />
        </label>
        <label>
          <input
            type="text"
            name="id"
            placeholder="Enter your ID"
            onChange={FormChange}
          />
        </label>
        <label>
          {" "}
          What Did You Have to Eat?
          <select>
            <option>Italian Cuisine</option>
            <option>Mexican Cuisine</option>
            <option>Chinese Cuisine</option>
            <option>Japanese Cuisine</option>
            <option>Indian Cuisine</option>
            <option>French Cuisine</option>
            <option>Spanish Cuisine</option>
            <option>Other</option>
          </select>
        </label>
        <label>
          {" "}
          Where Did You Eat At?
          <input
            type="text"
            location="location"
            placeholder="Location"
            onChange={FormChange}
          />
        </label>
        <label>
          {" "}
          Business Hours
          <input
            type="text"
            name=" hours_of_op"
            placeholder="Enter Business Hours"
            onChange={FormChange}
          />
        </label>
        <label>
          {" "}
          Overall Rating
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
          {" "}
          Add a Review Here
          <textarea rows="1" cols="25" name="reviews"/>
        </label>
        <label>
          {""}
          Add an Image  
          <input type="file" name="photos" accept="image" />
        </label>
        <Link to="/review">
            <button>Write a Review</button>
        </Link>
      </form>
    </div>
  );
}
export default Restaurant;
