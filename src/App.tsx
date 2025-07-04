import React from 'react';
import './App.css';
import { Header, Hero, ProductSection, Footer } from './components';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <ProductSection 
        title="AUTOMATED IN-HOME PLANT CULTIVATION"
        description="Meet AgroAIPod - the ultimate convenience in smart home agriculture. Our compact, robotic system cultivates plants and vegetables autonomously with zero effort or gardening knowledge required. Perfect for urban dwellers seeking fresh, pesticide-free produce year-round."
        imagePosition="right"
        darkBackground={true}
        showGrowingCabinet={false}
        productImage={`${process.env.PUBLIC_URL}/image4.jpg`}
      />
      <ProductSection 
        title="AI-POWERED PRECISION GROWING"
        description="Advanced sensors monitor oxygen, water, nutrients, and light conditions 24/7. Our machine learning algorithms analyze plant health, diagnose issues, and optimize growing parameters automatically. From seed to harvest, experience the future of home agriculture."
        imagePosition="left"
        darkBackground={false}
        showGrowingCabinet={false}
        productImage={`${process.env.PUBLIC_URL}/image2.jpg`}
      />
      <ProductSection 
        title="SPACE-OPTIMIZED FOR MODERN LIVING"
        description="Designed for apartments, condos, and urban homes. Our modular hydroponic system maximizes yield while minimizing space. Grow fresh herbs, leafy greens, and small vegetables right in your kitchen or living room."
        imagePosition="right"
        darkBackground={true}
        showGrowingCabinet={false}
        productImage={`${process.env.PUBLIC_URL}/image3.jpg`}
      />
      <Footer />
    </div>
  );
}

export default App;
