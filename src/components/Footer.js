import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-section">
          <h3>Explore</h3>
          <ul>
            <li>Home</li>
            <li>Questions</li>
            <li>Articles</li>
            <li>Tutorials</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Support</h3>
          <ul>
            <li>FAQs</li>
            <li>Help</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Stay connected</h3>
          <div className="social-media">
            <span>FB</span>
            <span>Twitter</span>
            <span>Instagram</span>
          </div>
        </div>
      </footer>

      <div className="footer-bottom">
        <p>DEV@Deakin 2022</p>
        <ul>
          <li>Privacy Policy</li>
          <li>Terms</li>
          <li>Code of Conduct</li>
        </ul>
      </div>
    </>
  );
}

export default Footer;
