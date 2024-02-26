// login.js

import React, { useState } from "react";
import "./login.css";

const Login = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userId, setUserId] = useState(""); // New state for user ID
  const [isSignUp, setIsSignUp] = useState(false);
  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);
  const [signInSuccess, setSignInSuccess] = useState(false);
  const [signUpSuccess, setSignUpSuccess] = useState(false); // New state for sign-up success

  const handleSignIn = async () => {
    try {
      const requestBody = isSignUp
        ? { name, email, password }
        : { userId, email, password }; // Use userId instead of name for sign-in

      const response = await fetch("http://localhost:5000/api/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();
      console.log(data.message);

      if (response.ok) {
        setSignInSuccess(true);
        if (typeof props.onLoginStatusChange === "function") {
          props.onLoginStatusChange(true, userId);
        }
      } else {
        setSignInSuccess(false);
      }
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  const handleSignUp = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();
      console.log(data);
      console.log(data.message);

      if (response.ok) {
        setSignUpSuccess(true);
        setIsSignUp(false); // Switch to sign-in form after successful sign-up
        setUserId(name); // Fetch user ID as name from sign-up form for sign-in
      }
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  const handleForgotPassword = () => {
    setShowForgotPasswordModal(true);
  };

  const handleForgotPasswordSubmit = (e) => {
    e.preventDefault();
    console.log("Forgot Password:", email);
    setShowForgotPasswordModal(false);
  };

  return (
    <div className="main-login-container">
      <div className="box-login-container">
        <div className={`login-container ${isSignUp ? "sign-up" : "sign-in"}`}>
          {signInSuccess ? (
            <p>Sign In Successful!</p>
          ) : (
            <div className="form-login-signup-container">
              <h1>{isSignUp ? "Sign Up" : "Sign In"}</h1>
              {!signUpSuccess && !isSignUp && (
                <p>Please sign up to continue.</p>
              )}
              {signUpSuccess && !isSignUp && <p>Sign Up Successful!</p>}
              <form>
                {isSignUp && (
                  <label>
                    Name:
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </label>
                )}
                {!isSignUp && (
                  <label>
                    User ID:
                    <input
                      type="text"
                      value={userId}
                      onChange={(e) => setUserId(e.target.value)}
                    />
                  </label>
                )}
                <br />
                <label>
                  Email:
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>
                <br />
                <label>
                  Password:
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </label>
                <br />
                {isSignUp && (
                  <div>
                    <label>
                      Confirm Password:
                      <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                    </label>
                    <br />
                  </div>
                )}

                <button
                  type="button"
                  onClick={isSignUp ? handleSignUp : handleSignIn}
                >
                  {isSignUp ? "Sign Up" : "Sign In"}
                </button>
              </form>
              {isSignUp ? null : (
                <p className="forget-button">
                  <button type="button" onClick={handleForgotPassword}>
                    Forgot Password?
                  </button>
                </p>
              )}
              {showForgotPasswordModal && (
                <div className="modal">
                  <form onSubmit={handleForgotPasswordSubmit}>
                    <label>
                      Enter your registered Email:
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </label>
                    <br />
                    <button type="submit">Submit</button>
                  </form>
                </div>
              )}
              <p className="dont-button">
                {isSignUp
                  ? "Already have an account?"
                  : "Don't have an account yet?"}
                <button type="button" onClick={() => setIsSignUp(!isSignUp)}>
                  {isSignUp ? "Sign In" : "Sign Up"}
                </button>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
