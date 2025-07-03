import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <span className="logo-text">AgroAIPod</span>
        </div>
        <nav className="nav">
          <a href="#home" className="nav-link">Home</a>
          <a href="#technology" className="nav-link">Technology</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
