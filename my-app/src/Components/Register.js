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
            name="username"
            placeholder="Enter your Username"
          />
        </label>
        {touched.username && errors.username && (
            <p className="error">{errors.username}</p>
          )}
        <label>
          <Field
            type="password"
            name="password"
            placeholder="Enter your Password"
          />
        </label>
        {touched.password && errors.password && (
            <p className="error">{errors.password}</p>
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
            name="email"
            placeholder="Enter email"
          />
        </label>
        <label>
          <Field
            type="location"
            name="location"
            placeholder="Enter location"
          />
        </label>
        <button type="submit">{props.isLoading ? "..." : "Submit "}</button>
        </Form>
        <h3>
          Already have an account? <Link to="/login">Sign In</Link> here.{" "}
        </h3>
    </div>
  );
}

const FormikRegister = withFormik({
  mapPropsToValues({ username, password, confirmPassword }) {
    return {
      username: username || "",
      password: password || "",
      confirmPassword: confirmPassword || "",
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required("Please enter your username."),
    password: Yup.string()
      .min(6)
      .required("Please enter at least 6 letters"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Password confirm is required"),
  }),

  handleSubmit(values, { props }) {
    let user = {
      username: values.username,
      password: values.password,
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