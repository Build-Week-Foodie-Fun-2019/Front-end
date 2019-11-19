import React, { useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { addReview, getReviews, editReview } from "../store/reviews/reviewsActions";

import styled from "styled-components";

const LoginTitle = styled.h1`
  color: #d80000;
  text-align: center;
`;

const BtnDiv = styled.div`
  text-align: center;
  grid-column: 1 / span 2;
`;

const FormContainer = styled.div`
  width: 880px;
  margin: 0 auto;
  padding: 30px;
  font-weight: bold;
  background: #ededed;
  box-shadow: 2px, 2px, 10px, 10px #7c7c7c;
`;

function ReviewForm({ touched, errors, ...props }) {
  useEffect(() => {
    if (props.activeReview) {
      props.setValues(props.activeReview);
    }
  }, [props.activeReview]);

  return (
    <div>
      
      <FormContainer>
        <LoginTitle>
          {props.activeReview
            ? "Editing a review!"
            : "Create a new review here!"}
        </LoginTitle>

        <Form className="review_form">
          <label className="restaurant_name">
            Restaurant
            <Field className="review_input" type="text" name="restaurant_name" />
            {touched.restaurant_name && errors.restaurant_name && (
              <p className="error">{errors.restaurant_name}</p>
            )}
          </label>
          <label className="restaurant_type">
            Restaurant Type
            <Field className="review_input" type="text" name="restaurant_cuisine" />
            {touched.restaurant_cuisine && errors.restaurant_cuisine && (
              <p className="error">{errors.restaurant_cuisine}</p>
            )}
          </label>
          <label className="item_name">
            Food Item
            <Field className="review_input" type="text" name="menu_item_name" />
            {touched.menu_item_name && errors.menu_item_name && (
              <p className="error">{errors.menu_item_name}</p>
            )}
          </label>
          
          <label className="menu_item_price">
            Price
            <Field className="review_input" type="number" min={0} step={0.01} name="menu_item_price" />
            {touched.menu_item_price && errors.menu_item_price && (
              <p className="error">{errors.menu_item_price}</p>
            )}
          </label>
          <label className="menu_item_rating">
            Rating
            <Field
              className="review_input"
              type="number"
              min={1}
              max={5}
              step={0.1}
              name="menu_item_rating"
            />
            {touched.menu_item_rating && errors.menu_item_rating && (
              <p className="error">{errors.menu_item_rating}</p>
            )}
          </label>
          <label className="menu_item_photos">
            Photo of Order
            <Field className="review_input" type="text" name="menu_item_photos" placeholder="Photo url" />
            {touched.menu_item_photos && errors.menu_item_photos && (
              <p className="error">{errors.menu_item_photos}</p>
            )}
          </label>
          <label className="menu_item_review">
            Other Comments
            <Field component="textarea" name="menu_item_review" />
            {touched.menu_item_review && errors.menu_item_review && (
              <p className="error">{errors.comments}</p>
            )}
          </label>

          <BtnDiv><button className="submitBtn" type="submit">
            {props.isLoading ? "..." : "Submit "}
          </button></BtnDiv>
        </Form>
      </FormContainer>
    </div>
  );
}

const FormikReviewForm = withFormik({
  mapPropsToValues(values) {
    return {
      user_id: parseInt(localStorage.getItem("user_id")),
      restaurant_name: values.restaurant_name || "",
      restaurant_cuisine: values.restaurant_cuisine || "",
      menu_item_name: values.menu_item_name || "",
      menu_item_price: values.menu_item_price || "",
      menu_item_rating: values.menu_item_rating || "",
      menu_item_review: values.menu_item_review || "",
      menu_item_photos: values.menu_item_photos || "https://cdn1.imggmi.com/uploads/2019/8/30/0529c2e79be5339e9cf244e25b84642d-full.png"
    };
  },

  validationSchema: Yup.object().shape({
    restaurant_name: Yup.string().required(
      "Restaurant name is a required field.",
    ),
    restaurant_cuisine: Yup.string(),
    menu_item_name: Yup.string().required("Food item is a required field."),
    menu_item_price: Yup.number().required("Price is a required field."),
    menu_item_rating: Yup.number().required("Rating is a required field."),
    menu_item_review: Yup.string(),
    menu_item_photos: Yup.string()
      .url()
      .required("Photo of order is a required field."),
  }),

  handleSubmit(values, { props }) {
    if (props.activeReview) {
      props.editReview(values, props.history, props.activeReview.id);
    } else {
      props.addReview(values, props.history);
    }
  },
})(ReviewForm);

const mapStateToProps = state => {
  return {
    reviews: state.reviews.reviews,
    activeReview: state.reviews.activeReview,
    error: state.reviews.error,
    isLoading: state.reviews.isLoading,
  };
};

export default connect(
  mapStateToProps,
  { addReview, getReviews, editReview },
)(FormikReviewForm);