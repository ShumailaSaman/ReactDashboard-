// src/components/NavItem.js
import React from "react";
import "./NavItem.css";
// Import your icon library and icons here

const NavItem = ({ label }) => {
  return (
    <div className="nav-item">
      {/* Add icon here */}
      <span>{label}</span>
    </div>
  );
};

export default NavItem;
