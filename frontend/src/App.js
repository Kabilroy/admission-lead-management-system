import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import StudentsPage from "./pages/StudentsPage";
import UploadPage from "./pages/UploadPage";

import "./App.css";

function App() {
  return (
    <div className="app-container">

      {/* Sidebar */}

      <div className="sidebar">

        <h2 className="sidebar-title">Admin Panel</h2>

        <nav className="sidebar-menu">

          <NavLink to="/" className="menu-item">
            📊 Dashboard
          </NavLink>

          <NavLink to="/students" className="menu-item">
            👨‍🎓 Students
          </NavLink>

          <NavLink to="/upload" className="menu-item">
            📤 Upload CSV
          </NavLink>

        </nav>

      </div>

      {/* Main Content */}

      <div className="main-content">

        <Routes>

          <Route path="/" element={<Dashboard />} />
          <Route path="/students" element={<StudentsPage />} />
          <Route path="/upload" element={<UploadPage />} />

        </Routes>

      </div>

    </div>
  );
}

export default App;