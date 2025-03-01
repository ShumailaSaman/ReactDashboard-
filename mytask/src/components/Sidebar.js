// src/components/Sidebar.js
import React from "react";
import NavItem from "./NavItem";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="performer-section">
        <div className="circle">35</div>
        <div>
          <p>PERFORMER</p>
          <p>3540 pts</p>
        </div>
      </div>
      <nav>
        <NavItem label="Dashboard" />
        <NavItem label="Market" />
        <NavItem label="New Issue" />
        <NavItem label="Exchange" />
        <NavItem label="Activity" />
        <NavItem label="Blotter" />
        <NavItem label="Company Profile" />
        <NavItem label="Analytics" />
      </nav>
      <div className="footer">
        <p>Elysium Finance</p>
        <p>All rights reserved</p>
      </div>
    </aside>
  );
};

export default Sidebar;
