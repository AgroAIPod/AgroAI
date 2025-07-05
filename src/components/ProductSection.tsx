import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductSection.css';

interface ProductSectionProps {
  title: string;
  description: string;
  imagePosition: 'left' | 'right';
  darkBackground: boolean;
  showGrowingCabinet?: boolean;
  productImage?: string;
}

const ProductSection: React.FC<ProductSectionProps> = ({
  title,
  description,
  imagePosition,
  darkBackground,
  showGrowingCabinet = false,
  productImage
}) => {
  const navigate = useNavigate();

  const handleLearnMoreClick = () => {
    navigate('/technology');
    window.scrollTo(0, 0);
  };

  return (
    <section className={`product-section ${darkBackground ? 'dark' : 'light'}`}>
      <div className="product-container">
        <div className={`product-content ${imagePosition === 'left' ? 'reverse' : ''}`}>
          <div className="product-text">
            <h2 className="product-title">{title}</h2>
            <p className="product-description">{description}</p>
            <button className="product-button" onClick={handleLearnMoreClick}>Learn More</button>
          </div>
          <div className="product-image-container">
            {showGrowingCabinet ? (
              <div className="growing-cabinet">
                <div className="cabinet-frame">
                  <div className="cabinet-top">
                    <div className="led-display">25°C</div>
                    <div className="control-buttons">
                      <div className="button"></div>
                      <div className="button"></div>
                    </div>
                  </div>
                  <div className="cabinet-body">
                    <div className="glass-panel">
                      <div className="shelf shelf-1">
                        <div className="plant plant-1"></div>
                        <div className="plant plant-2"></div>
                      </div>
                      <div className="shelf shelf-2">
                        <div className="plant plant-3"></div>
                        <div className="plant plant-4"></div>
                      </div>
                      <div className="shelf shelf-3">
                        <div className="plant plant-5"></div>
                        <div className="plant plant-6"></div>
                      </div>
                    </div>
                    <div className="led-lights"></div>
                  </div>
                  <div className="cabinet-base">
                    <div className="ventilation"></div>
                    <div className="power-button"></div>
                  </div>
                </div>
              </div>
            ) : productImage ? (
              <div className="product-real-image">
                <img src={productImage} alt={title} className="section-product-image" />
              </div>
            ) : (
              <div className="product-bottle-display">
                <div className="bottle-mockup"></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
