import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">TECHNOLOGY</h3>
            <ul className="footer-links">
              <li><Link to="/technology" onClick={handleLinkClick}>AI & Machine Learning</Link></li>
              <li><Link to="/technology" onClick={handleLinkClick}>Sensor Technology</Link></li>
              <li><Link to="/technology" onClick={handleLinkClick}>Hydroponic Systems</Link></li>
              <li><Link to="/technology" onClick={handleLinkClick}>Automation Features</Link></li>
            </ul>
          </div>
          
          
          <div className="footer-section">
            <h3 className="footer-title">COMPANY</h3>
            <ul className="footer-links">
              <li><Link to="/about" onClick={handleLinkClick}>About AgroAIPod</Link></li>
              <li><Link to="/about" onClick={handleLinkClick}>Our Mission</Link></li>
              <li><Link to="/about" onClick={handleLinkClick}>Research & Development</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">SUPPORT</h3>
            <ul className="footer-links">
              <li><Link to="/contact" onClick={handleLinkClick}>Contact Support</Link></li>
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
