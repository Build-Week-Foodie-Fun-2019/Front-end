import React, {useEffect} from "react";
import {connect} from "react-redux";
import {getReviews} from "../store/reviews/reviewsActions";
import {deleteReview, grabReview} from "../store/reviews/reviewsActions";


function SingleReview(props) {
    useEffect(() => {
      props.getReviews();
    }, []);
  
    const review = props.reviews.find(
      review => review.id === parseInt(props.match.params.id, 10),
    );
  
    return (
      <div className="singleReviewBox">
        {typeof review !== "undefined" && (
          <DetailContainer>
            <div>
              {review.restaurant_name}
              <p> {review.restaurant_cuisine}</p>
              {review.menu_item_name}
              <Img src={review.menu_item_photos} alt={review.menu_item_name} />
              <h3>Price: ${review.price.toFixed(2)}</h3>
              <h3>Food rating: {review.menu_item_rating}</h3>
              <p>Comments: {review.menu_item_review}</p>
            </div>
  
            <button
              className="reviewBtn"
              onClick={() => props.grabReview(props.history, review)}
            >
              Edit
            </button>
            <button
              className="reviewBtn"
              onClick={() =>
                props.deleteReview(props.match.params.id, props.history)
              }
            >
              Delete
            </button>
            </DetailContainer>
        )}
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
    { getReviews, deleteReview, grabReview },
  )(SingleReview);