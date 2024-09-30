import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/Herosection.css";
import logo from "../assets/CipherTrack.png"; // Import the logo image

const HeroSection = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };
  const handleAboutUsClick = () => {
    navigate("/about-us");
  };
  return (
    <div className="hero-container">
      <header className="navbar">
        <div className="logo">
          {/* Include the logo image */}
          <img src={logo} alt="CipherTrack Logo" className="logo-img" />
        </div>
        <nav className="nav-links">
          <button className="nav-button" onClick={handleAboutUsClick}>
            ABOUT US
          </button>
          <button className="nav-button">BLOG</button>
          <button className="nav-button-a">WORK WITH US</button>
        </nav>
      </header>
      <div className="hero-content">
        <h2>
          Crypto Transaction <br />
          Surveillance for Safe Endpoints
        </h2>
        <p>
          A blockchain model for tracing illegal cryptocurrency transactions,
          <br />
          detecting suspicious wallets, and strengthening financial security.
        </p>
        <button className="signup" onClick={handleLoginClick}>
          LOGIN
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
