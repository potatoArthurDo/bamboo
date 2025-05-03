import "./Footer.css";
import { forwardRef } from "react";
import { Link } from "react-router-dom";

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
              <li><Link to="/">Home</Link></li>
              <li>
              <Link to= '/founder_story'>Thư ngỏ</Link></li>
              <li className="hidden_on_mobile"><Link to="/instructors">2G Humans</Link></li>
            </ul>
          </div>
          <div className="footer-social">
            <p>Follow Us:</p>
            <div class="social-icons">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <svg
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12.07C22 6.48 17.52 2 12 2S2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.88v-6.99h-2.54v-2.89h2.54V9.41c0-2.51 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.89h-2.34v6.99C18.34 21.2 22 17.06 22 12.07z" />
                  </svg>
                </a>

                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <svg
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.28 4.28 0 001.88-2.37 8.6 8.6 0 01-2.7 1.03 4.27 4.27 0 00-7.3 3.89A12.1 12.1 0 013 5.16a4.27 4.27 0 001.32 5.7 4.2 4.2 0 01-1.93-.53v.05a4.27 4.27 0 003.42 4.18 4.26 4.26 0 01-1.92.07 4.27 4.27 0 003.98 2.96 8.56 8.56 0 01-6.3 1.76A12.07 12.07 0 008.29 21c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.35-.02-.53A8.34 8.34 0 0022.46 6z" />
                  </svg>
                </a>

                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <svg
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm4.88-.38a1.12 1.12 0 110 2.24 1.12 1.12 0 010-2.24z" />
                  </svg>
                </a>
              </div>
          </div>
        </div>
        <p className="footer-bottom">&copy; {new Date().getFullYear()} 2G Education. All rights reserved.</p>
      </footer>
    );
  });
  
  export default Footer;
  