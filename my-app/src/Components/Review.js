import React, { useState } from "react";

function Review() {
  const [review, setReview] = useState({
    restaurant_name: "",
    id: "",
    type_of_cuisine: "",
    menu_item_name: "",
    photo_of_menu_item: "",
    price: "",
    rrating_of_menu_item: "",
    photos: ""
  });

  const FormChange = e => {
    setReview({
      ...review,
      [e.target.member]: e.target.value
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div className="Review">
      <h1>Write a Review</h1>
      <form onSubmit={handleSubmit}>
        <label>
            {""}
            Name of Restaurant
          <input
            type="text"
            restaurant_name="name"
            placeholder="Enter Here"
            onChange={FormChange}
          />
        </label>
        <label>
            {""}
            Enter your ID
          <input
            type="text"
            name="id"
            placeholder="ID Here"
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
          {""}
          Add a Photo of your Food!
          <input type="file" name="photos" accept="image" />
        </label>
        <label>
          {" "}
          Menu Item
          <input
            type="text"
            menu_item_name="menu_item_name"
            placeholder="What'd you have to eat?"
            onChange={FormChange}
          />
        </label>
        <label>
          {" "}
          How Much was your Meal?
          <input
            type="text"
            price="price"
            placeholder="Price"
            onChange={FormChange}
          />
        </label>
        <label>
          {" "}
          Rating of Menu Item
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
          <textarea rows="1" cols="25" name="reviews" />
        </label>
      </form>
    </div>
  );
}
export default Review;
