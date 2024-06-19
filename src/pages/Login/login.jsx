import React, { useState } from "react";
import "../Styles/Login/login.css";
import registerUser from "../../services/api/registerApi";
import loginUser from "../../services/api/loginApi";

import { ReactComponent as Logo } from "../../assets/images/Login/logo.svg";
import { ReactComponent as Register } from "../../assets/images/Login/register.svg";

const SignInSignUp = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const switchToSignUp = () => {
    setIsSignUp(true);
  };

  const switchToSignIn = () => {
    setIsSignUp(false);
  };

  const handleSignUp = async (event) => {
    event.preventDefault();

    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    try {
      const userData = { username, email, password };
      const response = await registerUser(userData);

      // Handle success, e.g., show a success message or redirect to login
      console.log("Registration successful", response);
    } catch (error) {
      // Handle error, e.g., show an error message
      console.error("Registration error:", error.message);
    }
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    const username = event.target.username.value;
    const password = event.target.password.value;

    try {
      const credentials = { username, password };
      const response = await loginUser(credentials);

      // Handle success, e.g., save token, redirect, etc.
      console.log("Login successful", response);
    } catch (error) {
      // Handle error, e.g., show an error message
      console.error("Login error:", error.message);
    }
  };

  return (
    <div className={`container ${isSignUp ? "sign-up-mode" : ""}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form
            onSubmit={handleLogin}
            className={`sign-in-form ${isSignUp ? "hidden" : ""}`}
          >
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" name="username" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" name="password" placeholder="Password" />
            </div>
            <input type="submit" value="Login" className="btn solid" />
          </form>

          <form
            onSubmit={handleSignUp}
            className={`sign-up-form ${isSignUp ? "" : "hidden"}`}
          >
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" name="username" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="email" name="email" placeholder="Email" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" name="password" placeholder="Password" />
            </div>
            <input type="submit" className="btn" value="Sign up" />
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              Sign up now and start exploring! Create an account to access our
              features and get started today.
            </p>
            <button
              className="btn transparent"
              id="sign-up-btn"
              onClick={switchToSignUp}
            >
              Sign up
            </button>
          </div>
          <Logo className="image" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
              Sign in to access your account and pick up where you left off.
              Enter your username and password to get started!
            </p>
            <button
              className="btn transparent"
              id="sign-in-btn"
              onClick={switchToSignIn}
            >
              Sign in
            </button>
          </div>
          <Register className="image" />
        </div>
      </div>
    </div>
  );
};

export default SignInSignUp;
