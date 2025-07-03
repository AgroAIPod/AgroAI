import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">TECHNOLOGY</h3>
            <ul className="footer-links">
              <li><a href="#ai">AI & Machine Learning</a></li>
              <li><a href="#sensors">Sensor Technology</a></li>
              <li><a href="#hydroponics">Hydroponic Systems</a></li>
              <li><a href="#automation">Automation Features</a></li>
            </ul>
          </div>
          
          
          <div className="footer-section">
            <h3 className="footer-title">COMPANY</h3>
            <ul className="footer-links">
              <li><a href="#about">About AgroAIPod</a></li>
              <li><a href="#mission">Our Mission</a></li>
              <li><a href="#research">Research & Development</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">SUPPORT</h3>
            <ul className="footer-links">
              <li><a href="#contact">Contact Support</a></li>
            </ul>
          </div>
          
          {/* <div className="footer-section">
            <div className="footer-brand">
              <div className="footer-logo">
                <span className="footer-logo-text">AgroAIPod</span>
              </div>
              <p className="footer-description">
                Revolutionary automated in-home plant cultivation systems powered by AI and precision agriculture technology.
              </p>
            </div>
          </div> */}
        </div>
        
        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2025 AgroAIPod. All rights reserved.
          </p>
          <div className="footer-social">
            {/* <a href="#" className="social-link">Facebook</a>
            <a href="#" className="social-link">Instagram</a>
            <a href="#" className="social-link">Twitter</a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
