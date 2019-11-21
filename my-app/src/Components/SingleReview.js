import React, {useEffect} from "react";
import {connect} from "react-redux";
import {getReviews} from "../store/reviews/reviewsActions";
import {deleteReview, grabReview} from "../store/reviews/reviewsActions";
import styled from "styled-components";



const Img = styled.img`
  display: block;
  margin: 10px auto;
  width: 500px;
  border-radius: 10px;
`;

const DetailContainer = styled.div`
  width: 880px;
  margin: 20px auto;
  padding: 30px;
  font-weight: bold;
  background: #ededed;
  box-shadow: 2px, 2px, 10px, 10px #7c7c7c;
  text-align: center;
  border-radius: 10px;
`;

// const ResTitle = styled.h1`
//   color: #d80000;
//   font-size: 3rem;
// `;

// const ItemTitle = styled.h2`
//   color: #d80000;
//   font-size: 2rem;
// `;

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