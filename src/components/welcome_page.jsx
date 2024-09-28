// src/components/welcome_page.jsx
import React from "react";
import './welcome_page.css'; // Import the CSS file

const WelcomePage = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Welcome back!</h1>
        <p>Please login to access your account.</p>
        
        <label htmlFor="email">E-mail or phone number</label>
        <input type="text" id="email" placeholder="Type your e-mail or phone number" />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="Type your password" />

        <a href="#" className="forgot-password">Forgot Password?</a>

        <button className="login-button">Log In</button>

        <p className="signup-prompt">Don't have an account? <a href="#">Sign Up</a></p>
      </div>
    </div>
  );
};

export default WelcomePage;

