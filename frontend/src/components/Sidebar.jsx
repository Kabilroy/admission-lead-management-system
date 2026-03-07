import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">

      <h2 className="sidebar-title">Admin Panel</h2>

      <nav className="sidebar-menu">

        <Link to="/" className="sidebar-item">
          📊 Dashboard
        </Link>

        <Link to="/students" className="sidebar-item">
          🎓 Students
        </Link>

        <Link to="/upload" className="sidebar-item">
          📤 Upload CSV
        </Link>

      </nav>

    </div>
  );
}

export default Sidebar;