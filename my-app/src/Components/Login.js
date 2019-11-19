import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../store/auth/authActions";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";




const Login = ({ errors, touched, ...props }) => {
  return (
    <div className="Login">
      <h1>Capture Your 
      Food Adventures</h1>
      <Form>
        <label>
          <Field className="adv"
            type="text"
            name="username"
            placeholder="Enter Username"
          />
        </label>
        {touched.username && errors.username && (
            <p className="error">{errors.username}</p>
          )}
        <label>
          <Field
            type="password"
            name="password"
            placeholder="Enter Password"
          />
        </label>
        {touched.password && errors.password && (
            <p className="error">{errors.password}</p>
          )}
        <button type="submit">{props.isLoading ? "Loading..." : "Login "}</button>
        </Form>

        <Link to="/register">
          <button>New? Register Here</button>
        </Link>
    </div>
  );
}
const FormikLogin = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || "",
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required("Please enter your username."),
    password: Yup.string().required("Please enter your password."),
  }),

  handleSubmit(values, { resetForm, props }) {
    props.login(values, props.history);
    resetForm();
  },
})(Login);

const mapStateToProps = state => {
  return {
      isLoading: state.auth.isLoading,
      error: state.auth.error,
  }
};

export default connect(
  mapStateToProps,
  { login },
)(FormikLogin);
