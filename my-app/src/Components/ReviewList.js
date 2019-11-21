import React, { useState, useEffect } from "react";
import ReviewCard from "./ReviewCard";
import { connect } from "react-redux";
import { getReviews } from "../store/reviews/reviewsActions";

function ReviewList(props) {
  const userId = parseInt(localStorage.getItem("user_id"));
  const [userReviews, setUserReviews] = useState([]);

  useEffect(() => {
    let filteredReviews = props.reviews.filter(review => {
      return userId === review.user_id;
    });
    setUserReviews(filteredReviews);
  }, [props.reviews, userId]);

  return (
    <div className="grid-view">
      {userReviews.length > 0 &&
        userReviews.map(item => {
          return (
              <ReviewCard
                key={item.id}
                id={item.id}
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
