import { React, useEffect, useRef } from "react";
import "./Navbar.css"; // Import the CSS file
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";



gsap.registerPlugin(ScrollTrigger);
const Navbar = () => {
//   const navRef = useRef(null);

//   useEffect(() => {
//     gsap.to(navRef.current, {
//       y: -100,
//       opacity: 0,
//       duration: 0.5,
//       ease: "power2.out",
//       scrollTrigger: {
//         trigger: "body",
//         start: "top+=50 top",
//         end: "bottom top",
//         scrub: true,
//         markers: true,  // Debugging
//       },
//     });
//   }, []);
  
  return (
    <nav className="navbar" >
      <div className="navbar-container">
        {/* Logo */}
        <a href="#" className="logo">
          MyLogo
        </a>

        {/* Navigation Links */}
        <ul className="nav-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
