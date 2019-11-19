import React, { useEffect } from "react";

import { connect } from "react-redux";
import { getReviews } from "../store/reviews/reviewsActions";
import { NavLink } from "react-router-dom";

//Components




function Profile(props) {
  useEffect(() => {
    props.getReviews();
  }, []);

  return (
    <div className="Profile-page">
    
      <div className="Profile-Info">
       
        <h2 className="welcome-text">Hello, {props.username}</h2>
        <NavLink to="/profile/reviewForm" className="addButton">
          <button className="addButton">+</button>
        </NavLink>
      </div>

      
    </div>
  );
}

const mapPropsToState = state => {
  return {
    username: state.reviews.user,
    reviews: state.reviews.reviews,
  };
};

export default connect(
  mapPropsToState,
  { getReviews },
)(Profile);