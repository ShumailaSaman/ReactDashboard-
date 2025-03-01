// src/components/Header.js
import React from "react";
import "./Header.css";
// Import your icon library and search icon here

const Header = () => {
  return (
    <header className="header">
      <div className="search-bar">
        <input type="text" placeholder="Dashboard" />
        {/* Add search icon here */}
      </div>
      <div className="user-section">
        <span>Credit Invest ABC</span>
        <div className="avatar"> {/* Add avatar image here */} </div>
      </div>
    </header>
  );
};

export default Header;
