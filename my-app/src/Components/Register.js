import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { register } from "../store/auth/authActions";




  const Register = ({ errors, touched, ...props }) => {
  return (
    <div className="Register">
      <h1>Stay Updated, Subscribe to Foodies!</h1>
      <Form>
        <label>
          <Field
            type="text"
            name="user_username"
            placeholder="Enter your Username"
          />
        </label>
        {touched.user_username && errors.user_username && (
            <p className="error">{errors.user_username}</p>
          )}
        <label>
          <Field
            type="password"
            name="user_password"
            placeholder="Enter your Password"
          />
        </label>
        {touched.user_password && errors.user_password && (
            <p className="error">{errors.user_password}</p>
          )}
        <label>
          <Field
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
          />
        </label>
        {touched.confirmPassword && errors.confirmPassword && (
            <p className="error">{errors.confirmPassword}</p>
          )}
          <label>
          <Field
            type="email"
            name="user_email"
            placeholder="Enter email"
          />
        </label>
        {touched.user_email && errors.user_email && (
            <p className="error">{errors.user_email}</p>
          )}
        <label>
          <Field
            type="location"
            name="user_location"
            placeholder="Enter location"
          />
        </label>
        {touched.user_location && errors.user_location && (
            <p className="error">{errors.user_location}</p>
          )}
        <button type="submit">{props.isLoading ? "Loading..." : "Submit "}</button>
        </Form>
        <h3>
          Already have an account? <Link to="/login">Sign In</Link> here.{" "}
        </h3>
    </div>
  );
}

const FormikRegister = withFormik({
  mapPropsToValues({ user_username, user_password, confirmPassword, user_email, user_location }) {
    return {
      user_username: user_username || "",
      user_password: user_password || "",
      confirmPassword: confirmPassword || "",
      user_email: user_email || "",
      user_location: user_location || ""
    };
  },

  validationSchema: Yup.object().shape({
    user_username: Yup.string().required("Please enter your username."),
    user_password: Yup.string()
      .min(6)
      .required("Please enter at least 6 letters"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("user_password"), null], "Passwords must match")
      .required("Password confirm is required"),
  }),

  handleSubmit(values, { props }) {
    let user = {
      user_username: values.user_username,
      user_password: values.user_password,
      user_email: values.user_email,
      user_location: values.user_location
    };

    props.register(user, props.history);
  },
})(Register);

const mapPropsToState = state => {
  return {
      isLoading: state.auth.isLoading,
      error: state.auth.error,
  }
};

export default connect(
  mapPropsToState,
  { register },
)(FormikRegister);