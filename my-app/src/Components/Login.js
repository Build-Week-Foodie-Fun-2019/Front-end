import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../store/auth/authActions";
import { Form, Field, withFormik } from "formik";
import eat from "./images/eat.jpg";
import * as Yup from "yup";

const Login = ({ errors, touched, ...props }) => {
  return (
    <>
      <span>
        <img className="eat-img" src={eat} />
      </span>
      <div className="Login">
        <h1>A New Food Adventure Awaits Welcome Back.</h1>
        <Form>
          <label>
            <Field
              className="user-login"
              type="text"
              name="user_username"
              placeholder="Enter Username"
            />
          </label>
          {touched.user_username && errors.user_username && (
            <p className="error">{errors.user_username}</p>
          )}
          <label>
            <Field
              className="user-password"
              type="password"
              name="user_password"
              placeholder="Enter Password"
            />
          </label>
          {touched.user_password && errors.user_password && (
            <p className="error">{errors.user_password}</p>
          )}

          <button className="login-btn" type="submit">
            {props.isLoading ? "Loading..." : "Login "}
          </button>
        </Form>

        <Link to="/register">
          <button className="reg-btn">New? Register Here</button>
        </Link>
      </div>
    </>
  );
};
const FormikLogin = withFormik({
  mapPropsToValues({ user_username, user_password }) {
    return {
      user_username: user_username || "",
      user_password: user_password || ""
    };
  },

  validationSchema: Yup.object().shape({
    user_username: Yup.string().required("Please enter your username."),
    user_password: Yup.string().required("Please enter your password.")
  }),

  handleSubmit(values, { resetForm, props }) {
    props.login(values, props.history);
    resetForm();
  }
})(Login);

const mapStateToProps = state => {
  return {
    isLoading: state.auth.isLoading,
    error: state.auth.error
  };
};

export default connect(mapStateToProps, { login })(FormikLogin);
