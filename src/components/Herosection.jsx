// src/components/HeroSection.jsx
import React from "react";
import "./HeroSection.css"; // Import corresponding CSS

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/5/57/Narcotics_Control_Bureau_Seal.svg/140px-Narcotics_Control_Bureau_Seal.svg.png"
          alt="NCB Logo"
          className="ncb-logo"
        />{" "}
        <div className="ncb-text">
          <p>NCB</p>
        </div>
        <h1 className="hero-title">
          Tracking Transactions, <br />
          Securing the Future.
        </h1>
        <p className="text-content">
          A blockchain model for tracing illegal cryptocurrency transactions,
          detecting <br /> suspicious wallets, and strengthening financial
          security.
        </p>
        <button className="login-button">LOGIN</button>
        {/* Cryptocurrency Icons */}
        <div className="crypto-icons">
          <img
            id="Bitcoin"
            src="./icons/bitcoin.png"
            alt="Bitcoin"
            className="crypto-icon"
          />
          <img
            id="Ethereum"
            src="./icons/ethereum.png"
            alt="Ethereum"
            className="crypto-icon"
          />
          <img
            id="Dogecoin"
            src="./icons/doge.png"
            alt="Dogecoin"
            className="crypto-icon"
          />

          <img
            id="polygon"
            src="./icons/polygon.png"
            alt="Polygon"
            className="crypto-icon"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
