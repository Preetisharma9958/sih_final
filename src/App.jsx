import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./components/Herosection.jsx";
import WalletAddressChart from "./components/WalletAddressChart";
import Insert from "./components/Insert.jsx";
import WalletGraph from "./components/WalletGraph";
import TransactionTable from "./components/TransactionTable"; // Ensure it's imported
import WelcomePage from "./components/Welcome_page.jsx"; // Import the WelcomePage component
import Wallet from "./components/Wallet.jsx";
import "../src/App.css"; // Import App-wide CSS
import AboutUs from "./components/AboutUs.jsx";

// Function to generate a random "Yes" or "No" for mixer usage
const generateRandomMixerUsed = () => {
  return Math.random() < 0.5 ? "Yes" : "No";
};

// Main App Component
const App = () => {
  // Sample transaction data for the table
  const transactions = [
    {
      name: "Harvey",
      sender: " 0x1234567890abcdef1234567890abcdef12345678",
      receiver: "0x7890abcdef1234567890abcdef1234567890abcd",
      frequency: "10",
      mixerUsed: generateRandomMixerUsed(),
      riskScore: 8.5,
      location: "USA",
      dateTime: "2024-09-26T09:15Z",
    },
    {
      name: "Devansh",
      sender: " 0x1234567890abcdef1234567890abcdef12345678",
      receiver: "0x4567890abcdef1234567890abcdef1234567890",
      frequency: "4",
      mixerUsed: generateRandomMixerUsed(),
      riskScore: 3,
      location: "India",
      dateTime: "2024-09-24T12:45Z",
    },
    {
      name: "Aditya",
      sender: " 0x1234567890abcdef1234567890abcdef12345678",
      receiver: "0xabcdef234567890abcdef1234567890abcdef12",
      frequency: "10",
      mixerUsed: generateRandomMixerUsed(),
      riskScore: 9.5,
      location: "India",
      dateTime: "2024-09-23T18:20Z",
    },
    {
      name: "Siddharth",
      sender: " 0x1234567890abcdef1234567890abcdef12345678",
      receiver: "0x234567890abcdef1234567890abcdef12345678",
      frequency: "7",
      mixerUsed: generateRandomMixerUsed(),
      riskScore: 2,
      location: "Australia",
      dateTime: "2024-09-22T16:10Z",
    },
    {
      name: "Priya",
      sender: "0x4567890abcdef1234567890abcdef1234567890",
      receiver: "0xabcdef234567890abcdef1234567890abcdef12",
      frequency: "2",
      mixerUsed: generateRandomMixerUsed(),
      riskScore: 4.5,
      location: "India",
      dateTime: "2024-09-21T20:30Z",
    },
    {
      name: "Akshat",
      sender: "0x1234567890abcdef1234567890abcdef12345678",
      receiver: "0x234567890abcdef1234567890abcdef123456789",
      frequency: "5",
      mixerUsed: generateRandomMixerUsed(),
      riskScore: 4.5,
      location: "USA",
      dateTime: "2024-09-21T20:30Z",
    },
    {
      name: "Daksh",
      sender: "0x3456789012abcdef1234567890abcdef12345678",
      receiver: "0x4567890123abcdef1234567890abcdef12345678",
      frequency: "2",
      mixerUsed: generateRandomMixerUsed(),
      riskScore: 5.5,
      location: "India",
      dateTime: "2024-08-21T20:30Z",
    },
    {
      name: "Deepansh",
      sender: "0x1234567890abcdef1234567890abcdef12345678	",
      receiver: "0x5678901234abcdef1234567890abcdef12345678	",
      frequency: "5",
      mixerUsed: generateRandomMixerUsed(),
      riskScore: 3.5,
      location: "India",
      dateTime: "2024-08-27T20:30Z",
    },
    {
      name: "Deepak",
      sender: "0x5678901234abcdef1234567890abcdef12345678	",
      receiver: "0x234567890abcdef1234567890abcdef123456789	",
      frequency: "7",
      mixerUsed: generateRandomMixerUsed(),
      riskScore: 8.5,
      location: "Canada",
      dateTime: "2024-09-27T20:30Z",
    },
  ];

  return (
    <Router>
      <div className="app-container">
        {/* Define routes for the application */}
        <Routes>
          {/* Route to the Hero Section */}
          <Route path="/" element={<HeroSection />} />
          {/* Route to the Wallet Address Chart */}
          <Route path="/wallet" element={<Wallet />} />
          {/* Route to the Insert Component */}
          <Route path="/insert" element={<Insert />} />
          <Route path="/login" element={<WelcomePage />} />
          {/* Route for the Welcome Page */}
          <Route path="/about-us" element={<AboutUs />} />
          {/* Route for the Welcome Page */}
          {/* Route to the Transactions page */}
          <Route
            path="/transactions"
            element={
              <div className="transactions-page">
                {/* Page Title */}
                {/* <div className="title"></div> */}

                <div className="current">
                  <button>
                    Current Wallet Address:
                    0x1234567890abcdef1234567890abcdef12345678
                  </button>
                </div>

                {/* Wallet Graph Section */}
                <div className="wallet-graph-container">
                  <WalletGraph />
                </div>

                {/* Transaction Table Section */}
                <div className="transaction-table-container">
                  <TransactionTable transactions={transactions} />
                </div>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
