// src/components/welcome_page.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/welcome_page.css"; // Import the CSS file

const WelcomePage = () => {
  const navigate = useNavigate();

  const handleLoginButtonClick = () => {
    navigate("/wallet");
  };
  return (
    <div className="welcoming">
      <div className="login-container">
        <div className="login-box">
          <h1>Welcome back!</h1>
          <p>Please login to access your account.</p>

          <label htmlFor="email">E-mail or phone number</label>
          <input
            type="text"
            id="email"
            placeholder="Type your e-mail or phone number"
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Type your password"
          />

          <a href="#" className="forgot-password">
            Forgot Password?
          </a>

          <button className="login-button" onClick={handleLoginButtonClick}>
            Log In
          </button>

          <p className="signup-prompt">
            Don't have an account? <a href="#">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
