import "./Footer.css";
import logo from "./assets/logowhite.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-grid">

          {/* LEFT */}
          <div className="footer-left">
            <a href="https://www.hiration.com/" className="logo">
             <img src={logo} alt="" id="logo-img"/>
            </a>

            <p className="copyright">
              © {currentYear} Hiration, Inc. All rights reserved.
            </p>

            <div className="footer-links">
              <a href="https://www.hiration.com/terms-and-conditions/">Terms of Service</a>
              <a href="https://www.hiration.com/privacy/">Privacy Policy</a>
            </div>
          </div>

          {/* GET STARTED */}
          <div className="footer-column">
            <h3>Get Started</h3>
            <ul>
              <li><a href="https://www.hiration.com/about-us/">About Us</a></li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div className="footer-column">
            <h3>Support</h3>
            <ul>
              <li><a href="mailto:team@hiration.com">Contact Us</a></li>
            </ul>
          </div>

          {/* PRODUCT */}
          <div className="footer-column">
            <h3>Product Suite</h3>
            <ul>
              <li><a href="https://www.hiration.com/app/resume-builder/">Resume Builder</a></li>
              <li><a href="https://www.hiration.com/job-search/free-resume-review/">Resume Review</a></li>
              <li><a href="https://www.hiration.com/app/cover-letter">Cover Leter Builder</a></li>
              <li><a href="https://www.hiration.com/app/linkedin-review">LinkedIn Review</a></li>
              <li><a href="https://www.hiration.com/app/video-interview-prep">Interview Practice</a></li>
            </ul>
          </div>
 <div className="footer-column">
            <h3>Important Resources</h3>
            <ul>
              <li><a href="https://www.hiration.com/blog/">Blog</a></li>
              <li><a href="https://www.hiration.com/job-search/resume-examples/">Resume Examples</a></li>
              <li><a href="https://www.hiration.com/resume-templates/">Resume Templates</a></li>
              <li><a href="https://www.hiration.com/technology-resume-examples/">Technology Resume Examples</a></li>
              <li><a href="https://www.hiration.com/sales-resume-examples/">Sales Resume Examples</a></li>
            </ul>
          </div>
        </div>


      </div>
    </footer>
  );
}