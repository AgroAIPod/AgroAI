import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  const handleDiscoverClick = () => {
    navigate('/technology');
    window.scrollTo(0, 0);
  };
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
          <button className="hero-cta" onClick={handleDiscoverClick}>Discover the Future</button>
        </div>
        <div className="hero-image">
          <div className="agroai-showcase">
            <img src={`${process.env.PUBLIC_URL}/image1.jpg`} alt="AgroAIPod System" className="hero-product-image" />
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
