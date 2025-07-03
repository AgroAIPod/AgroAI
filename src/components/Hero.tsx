import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            GROW<br />
            FRESH FOOD<br />
            AT HOME<br />
            EFFORTLESSLY
          </h1>
          <div className="hero-subtitle">
            Automated In-Home Plant Cultivation System
          </div>
          <div className="hero-logo">
            <span className="hero-logo-text">AgroAIPod</span>
          </div>
          <button className="hero-cta">Discover the Future</button>
        </div>
        <div className="hero-image">
          <div className="agroai-showcase">
            <img src="/image1 (1).jpg" alt="AgroAIPod System" className="hero-product-image" />
            <div className="floating-features">
              <div className="feature-badge">AI Monitoring</div>
              <div className="feature-badge">Zero Effort</div>
              <div className="feature-badge">Fresh Produce</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
