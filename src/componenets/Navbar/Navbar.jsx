import { React, useState } from "react";
import "./Navbar.css"; // Import the CSS file
import gsap from "gsap";
import { Link } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";



gsap.registerPlugin(ScrollTrigger);
const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
      setIsNavOpen(!isNavOpen);
    };
  
  return (
    <nav className="navbar">
    <div className="navbar-container">
      <Link to="/" className="logo">
        Logo
      </Link>
      <div
        className={`hamburger ${isNavOpen ? 'active' : ''}`}
        onClick={toggleNav}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul className={`nav-links ${isNavOpen ? 'active' : ''}`}>
        <li>
          <Link to="/" className="nav-link" onClick={() => setIsNavOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-link" onClick={() => setIsNavOpen(false)}>
            About
          </Link>
        </li>
        <li>
          <Link to="/services" className="nav-link" onClick={() => setIsNavOpen(false)}>
            Services
          </Link>
        </li>
        <li>
          <Link to="/contact" className="nav-link" onClick={() => setIsNavOpen(false)}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </nav>
  );
};

export default Navbar;
