import React, { useState } from 'react';
import './FlavorSelection.css';

interface Product {
  id: string;
  name: string;
  description: string;
  features: string[];
  image: string;
  price: string;
}

const products: Product[] = [
  {
    id: 'starter',
    name: 'AgroAIPod Starter',
    description: 'Perfect for beginners - grow herbs and leafy greens',
    features: ['4 Plant Capacity', 'Basic AI Monitoring', 'Mobile App Control', '6 Month Consumables'],
    image: '/image1 (2).jpg',
    price: '$599'
  },
  {
    id: 'pro',
    name: 'AgroAIPod Pro',
    description: 'Advanced system for serious home growers',
    features: ['8 Plant Capacity', 'Advanced AI & Analytics', 'Automated Nutrient Dosing', '12 Month Consumables'],
    image: '/image1 (3).jpg',
    price: '$899'
  },
  {
    id: 'max',
    name: 'AgroAIPod Max',
    description: 'Professional-grade system for maximum yield',
    features: ['12 Plant Capacity', 'Full Automation Suite', 'Climate Control', 'Premium Support'],
    image: '/image1 (4).jpg',
    price: '$1299'
  }
];

const FlavorSelection: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<string>('pro');

  return (
    <section className="product-showcase">
      <div className="showcase-container">
        <h2 className="showcase-title">CHOOSE YOUR AGROAIPOD</h2>
        <p className="showcase-subtitle">Automated growing systems designed for every home and lifestyle</p>
        <div className="products-grid">
          {products.map((product) => (
            <div 
              key={product.id}
              className={`product-card ${selectedProduct === product.id ? 'selected' : ''}`}
              onClick={() => setSelectedProduct(product.id)}
            >
              <div className="product-image-container">
                <img src={product.image} alt={product.name} className="product-image" />
                <div className="price-tag">{product.price}</div>
              </div>
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <ul className="product-features">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <button className="preorder-btn">Pre-Order Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlavorSelection;
