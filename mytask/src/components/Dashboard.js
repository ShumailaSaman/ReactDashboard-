// src/components/Dashboard.js
import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Header />
      <Sidebar />
      {/* Add main content area here later */}
    </div>
  );
};

export default Dashboard;
