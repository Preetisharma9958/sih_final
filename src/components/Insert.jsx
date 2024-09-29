import React, { useState } from "react";
import "./styles/insert.css"; // Importing the CSS

function WalletForm() {
  const [walletIdVisible, setWalletIdVisible] = useState(false);

  const toggleVisibility = () => {
    setWalletIdVisible(!walletIdVisible);
  };

  return (
    <div className="wallet-form-container">
      <div className="wallet-form">
        <h2>Wallet Address</h2>
        <input
          type="text"
          placeholder="Type your Wallet Address"
          className="wallet-input"
        />

        <h2>Wallet Id</h2>
        <div className="wallet-id-input">
          <input
            type={walletIdVisible ? "text" : "password"}
            placeholder="Type your wallet Id"
            className="wallet-input"
          />
          <span onClick={toggleVisibility} className="eye-icon">
            {walletIdVisible ? "👁️" : "🙈"}
          </span>
        </div>

        <button className="search-button">SEARCH</button>
      </div>
    </div>
  );
}

export default WalletForm;
