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
        <img src="assets/images/logo.png" alt="" />
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
            Trang chủ
          </Link>
        </li>
        {/* <li>
          <Link to="/about" className="nav-link" onClick={() => setIsNavOpen(false)}>
            Về chúng tôi
          </Link>
        </li> */}
        <li>
          <Link to="/founder_story" className="nav-link" onClick={() => setIsNavOpen(false)}>
            Thư ngỏ
          </Link>
        </li>
        <li>
          <Link to="/humans" className="nav-link" onClick={() => setIsNavOpen(false)}>
            2G Humans
          </Link>
        </li>
      </ul>
    </div>
  </nav>
  );
};

export default Navbar;
