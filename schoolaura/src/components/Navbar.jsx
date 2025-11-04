import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo-wrapper">
          <img src={logo} alt="SchoolAura Logo" className="logo" />
        </div>
      </div>

      <div className="navbar-center">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>

          <li
            className="dropdown"
            onMouseEnter={() => setOpenMenu("exam")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <Link to="#">Exam Solution ▾</Link>
            {openMenu === "exam" && (
              <ul className="dropdown-menu">
                <li><Link to="#">1st–12th Exam</Link></li>
                <li><Link to="#">Competitive Exam</Link></li>
                <li><Link to="#">Entrance Exam</Link></li>
              </ul>
            )}
          </li>

          <li
            className="dropdown"
            onMouseEnter={() => setOpenMenu("study")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <Link to="#">Online Study ▾</Link>
            {openMenu === "study" && (
              <ul className="dropdown-menu">
                <li><Link to="#">1st–12th Study</Link></li>
                <li><Link to="#">Competitive Study</Link></li>
                <li><Link to="#">Entrance Study</Link></li>
              </ul>
            )}
          </li>

          <li
            className="dropdown"
            onMouseEnter={() => setOpenMenu("tutor")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <Link to="#">Tutor Solution ▾</Link>
            {openMenu === "tutor" && (
              <ul className="dropdown-menu">
                <li><Link to="#">Find Tutor</Link></li>
                <li><Link to="#">Book Tutor</Link></li>
              </ul>
            )}
          </li>

          <li><Link to="#">Blogs</Link></li>
          <li><Link to="#">Contact Us</Link></li>
        </ul>
      </div>

      <div className="navbar-right">
        <button className="school-btn">🏫 School Management</button>
      </div>
    </nav>
  );
};

export default Navbar;
