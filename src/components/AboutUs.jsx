import React from "react";
import "./styles/AboutUs.css"; // Import corresponding CSS for styling

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1>About Us</h1>
      <h2>Team Name: BitsNBytes</h2>
      <div className="team-members">
        <h3>Team Members:</h3>
        <ul>
          <li>Priya Verma (Team Leader)</li>
          <li>Nityaa Goel</li>
          <li>Nishita Sharma</li>
          <li>Arisha Rizwan</li>
          <li>Preeti Sharma</li>
          <li>Priyanshi Jindal</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
