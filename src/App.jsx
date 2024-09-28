// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./components/Herosection.jsx";
import WalletAddressChart from "./components/WalletAddressChart";
import Insert from "./components/insert.jsx";  // Explicit extension
import WelcomePage from "./components/welcome_page.jsx"; // Import the WelcomePage component
import "../src/App.css"; // Import App-wide CSS

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<HeroSection />} /> {/* Hero section */}
          <Route path="/wallet" element={<WalletAddressChart />} /> {/* Wallet Address Chart */}
          <Route path="/insert" element={<Insert />} />  {/* Insert the Insert component */}
          <Route path="/login" element={<WelcomePage />} /> {/* Route for the Welcome Page */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
