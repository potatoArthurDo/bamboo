import "./Footer.css";
import { forwardRef } from "react";
const Footer = forwardRef((props, ref) => {
    return (
      <footer className="footer" ref={ref}>
        <div className="footer-container">
          <div className="footer-logo">
            <img src="assets/images/logo.png" alt="Company Logo" className="logo" />
          </div>
          <div className="footer-info">
            <p>Branches:</p>
            <ul>
              <li>New York, USA</li>
              <li>London, UK</li>
              <li>Tokyo, Japan</li>
            </ul>
            <p>Phone: +1 234 567 890</p>
          </div>
          <div className="footer-links">
            <p>Quick Links:</p>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/founder_story">Thư ngỏ</a></li>
              <li><a href="/instructors">2G Humans</a></li>
            </ul>
          </div>
          <div className="footer-social">
            <p>Follow Us:</p>
            <a href="#"><img src="/facebook-icon.png" alt="Facebook" /></a>
            <a href="#"><img src="/twitter-icon.png" alt="Twitter" /></a>
            <a href="#"><img src="/instagram-icon.png" alt="Instagram" /></a>
          </div>
        </div>
        <p className="footer-bottom">&copy; {new Date().getFullYear()} 2G Education. All rights reserved.</p>
      </footer>
    );
  });
  
  export default Footer;
  