import { React, useEffect, useRef } from "react";
import "./Navbar.css"; // Import the CSS file
import gsap from "gsap";
import { Link } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";



gsap.registerPlugin(ScrollTrigger);
const Navbar = () => {
  return (
    <nav className="navbar" >
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="logo">Logo</Link>

        {/* Navigation Links */}
        <ul className="nav-links">
          <li>
          <Link to="/" className="nav-link">Home</Link>
          </li>
          <li>
          <Link to="/" className="nav-link">About</Link>
          </li>
          <li>
          <Link to="/" className="nav-link">Services</Link>
          </li>
          <li>
          <Link to="/" className="nav-link">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
