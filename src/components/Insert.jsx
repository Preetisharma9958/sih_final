import React, { useState } from "react";
import "./styles/insert.css"; // Importing the CSS
import { useNavigate } from "react-router-dom";

function WalletForm() {
  const [walletIdVisible, setWalletIdVisible] = useState(false);

  const toggleVisibility = () => {
    setWalletIdVisible(!walletIdVisible);
  };
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSearchClick = () => {
    navigate("/transactions"); // Navigate to WalletForm on click
  };
  return (
    <div className="insertion">
      <div className="wallet-form-container">
        <div className="wallet-form">
          <div className="heading">
            <h3>Please enter wallet address</h3>
          </div>
          <h2>Wallet Address</h2>
          <input
            type="text"
            placeholder="Type your Wallet Address"
            className="wallet-input"
          />

          <h2>Password</h2>
          <div className="wallet-id-input">
            <input
              type={walletIdVisible ? "text" : "password"}
              placeholder="Type your password"
              className="wallet-input"
            />
          </div>

          <button className="search-button" onClick={handleSearchClick}>
            SEARCH
          </button>
        </div>
      </div>
    </div>
  );
}

export default WalletForm;
