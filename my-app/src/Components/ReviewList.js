import React, { useState, useEffect } from "react";
import ReviewCard from "./ReviewCard";
import { connect } from "react-redux";
import { getReviews } from "../store/reviews/reviewsActions";
// import axios from 'axios';

function ReviewList(props) {
  const userId = parseInt(localStorage.getItem("user_id"));
  const [userReviews, setUserReviews] = useState([]);
  // const [review, setReview] = useState([])

  useEffect(() => {
    // axios
    // .get("https://bw-foodie-fun.herokuapp.com/api/menuItems")
    // .then(res => {
    //   // debugger
    //   setReview(res.data)
    // })
    // .catch(err => {
    //   // debugger
    //   alert(err.message)
    // })
    let filteredReviews = props.reviews.filter(review => {
      return userId === review.user_id;
    });
    setUserReviews(filteredReviews);
  }, [props.reviews, userId]);

  return (
    <div className="grid-view">
      {/* {
        review.map(reviews => {
          return (
            <>
            <ReviewCard 
             
                id={reviews.menu_item_id}
                resName={reviews["menu_item_restaurant"]}
                itemName={reviews["menu_item_name"]}
                itemImgUrl={reviews["menu_item_photo"]}
                foodRating={reviews["menu_item_rating"]}
                price={reviews.menu_item_price}
            />
            </>
          )
        })
      } */}
      {
        userReviews.map(item => {
          return (
              <ReviewCard
                // key={item.id}
                id={item.memu_item_id}
                resName={item["menu_item_restaurant"]}
                itemName={item["menu_item_name"]}
                itemImgUrl={item["menu_item_photo"]}
                foodRating={item["menu_item_rating"]}
                price={item.menu_item_price}
              />
          );
        })}
    </div>
  );
}

const mapPropsToState = state => {
  return {
    reviews: state.reviews.reviews,
  };
};

export default connect(
  mapPropsToState,
  { getReviews },
)(ReviewList);
