import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../store/auth/authActions";
import { Form, Field, withFormik } from "formik";
import newimage from "./images/newimage.jpg";
import * as Yup from "yup";
import "./Login.css";

const Login = ({ errors, touched, ...props }) => {
  return (
    <div className="loginContainer">
      <div>
        <img className="eat-img" src={newimage} />
      </div>
      <div className="Login">
        <h1 className="login-title">
          A New Food Adventure Awaits Welcome Back.
        </h1>
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
    </div>
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
