import "./Footer.css";
import { forwardRef } from "react";
import { Link } from "react-router-dom";

const Footer = forwardRef((props, ref) => {
  return (
    <footer className="footer" ref={ref}>
      <div className="footer-container">
        <div className="footer-logo">
          <img
            src="assets/images/logo.png"
            alt="Company Logo"
            className="logo"
          />
          <p
            className="footer-bottom"
            style={{
              fontSize: "0.8rem",
              display: "flex",
              flex: "wrap",
              marginLeft: "2.5rem",
            }}
          >
            &copy; {new Date().getFullYear()} 2G Education. All rights reserved.
          </p>
        </div>
        <div className="footer-info">
          <p>Locate Us:</p>
          <ul>
            <li>65 Lê Hồng Phong, thành phố Vinh, tỉnh Nghệ An</li>
          </ul>
          <p>Phone:</p>
          <ul>
            <li>0889 666 900</li>
          </ul>
          <p>Email:</p>
          <ul>
            <li>lenguyen@2g.edu.vn</li>
          </ul>
        </div>
        <div className="footer-links">
          <p>Quick Links:</p>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/founder_story">Thư ngỏ</Link>
            </li>
            <li>
              <Link to="/humans">2G Humans</Link>
            </li>
          </ul>
        </div>
        <div className="footer-social">
          <p>Follow Us:</p>
          <div class="social-icons">
            <a
              href="https://www.facebook.com/2GEducation"
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
              href="https://www.youtube.com/@2GEducation"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <svg
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19.615 3.184H4.385C3.06 3.184 2 4.244 2 5.57v12.86c0 1.327 1.06 2.387 2.385 2.387h15.23c1.326 0 2.385-1.06 2.385-2.387V5.57c0-1.326-1.06-2.386-2.385-2.386zM10 15.5V8.5l6 3.5-6 3.5z" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <svg
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.025-3.037-1.85-3.037-1.851 0-2.134 1.445-2.134 2.94v5.666H9.355V9h3.414v1.561h.049c.476-.899 1.637-1.85 3.368-1.85 3.598 0 4.263 2.368 4.263 5.451v6.29zM5.337 7.433a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM3.665 20.452h3.554V9H3.665v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      {/* <p className="footer-bottom">&copy; {new Date().getFullYear()} 2G Education. All rights reserved.</p> */}
    </footer>
  );
});

export default Footer;
