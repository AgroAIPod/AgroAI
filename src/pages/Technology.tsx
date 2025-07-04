import React from 'react';
import './Technology.css';

const Technology: React.FC = () => {
  return (
    <div className="technology-page">
      <div className="technology-hero">
        <h1>Advanced Technology</h1>
        <p>Discover the cutting-edge innovations that power AgroAIPod's intelligent farming system</p>
      </div>

      <div className="tech-grid">
        <div className="tech-card">
          <div className="tech-icon">🧠</div>
          <h3>AI-Powered Plant Recognition</h3>
          <p>Our advanced computer vision system uses machine learning to identify plant species, growth stages, and health conditions with 99.2% accuracy.</p>
          <div className="tech-specs">
            <h4>Key Features:</h4>
            <ul>
              <li>Real-time disease detection</li>
              <li>Growth stage monitoring</li>
              <li>Nutrient deficiency analysis</li>
              <li>Automated harvest timing</li>
            </ul>
          </div>
        </div>

        <div className="tech-card">
          <div className="tech-icon">📊</div>
          <h3>Smart Sensor Network</h3>
          <p>Precision environmental monitoring with IoT sensors that track every aspect of your plant's ecosystem in real-time.</p>
          <div className="tech-specs">
            <h4>Monitored Parameters:</h4>
            <ul>
              <li>pH levels (±0.1 accuracy)</li>
              <li>Nutrient concentration</li>
              <li>Water temperature</li>
              <li>Humidity & air quality</li>
              <li>Light spectrum & intensity</li>
            </ul>
          </div>
        </div>

        <div className="tech-card">
          <div className="tech-icon">💡</div>
          <h3>LED Spectrum Optimization</h3>
          <p>Full-spectrum LED arrays with dynamic adjustment capabilities that mimic natural sunlight patterns for optimal photosynthesis.</p>
          <div className="tech-specs">
            <h4>Specifications:</h4>
            <ul>
              <li>400-700nm full spectrum</li>
              <li>Programmable light cycles</li>
              <li>Energy-efficient design</li>
              <li>50,000+ hour lifespan</li>
            </ul>
          </div>
        </div>

        <div className="tech-card">
          <div className="tech-icon">🔄</div>
          <h3>Automated Hydroponic System</h3>
          <p>Precision nutrient delivery system with automated mixing, pH balancing, and circulation for optimal plant nutrition.</p>
          <div className="tech-specs">
            <h4>System Features:</h4>
            <ul>
              <li>Automated nutrient dosing</li>
              <li>pH auto-adjustment</li>
              <li>Oxygenated water circulation</li>
              <li>Backup power system</li>
            </ul>
          </div>
        </div>

        <div className="tech-card">
          <div className="tech-icon">📱</div>
          <h3>Mobile App Integration</h3>
          <p>Comprehensive mobile application for remote monitoring, control, and receiving intelligent recommendations for your garden.</p>
          <div className="tech-specs">
            <h4>App Capabilities:</h4>
            <ul>
              <li>Real-time monitoring</li>
              <li>Push notifications</li>
              <li>Growth analytics</li>
              <li>Recipe suggestions</li>
            </ul>
          </div>
        </div>

        <div className="tech-card">
          <div className="tech-icon">⚡</div>
          <h3>Energy Management</h3>
          <p>Intelligent power management system that optimizes energy consumption while maintaining optimal growing conditions.</p>
          <div className="tech-specs">
            <h4>Efficiency Features:</h4>
            <ul>
              <li>Smart scheduling</li>
              <li>Low-power standby mode</li>
              <li>Solar panel compatibility</li>
              <li>60% less energy than traditional growing</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
