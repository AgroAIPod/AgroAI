import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="about-page">
      <div className="about-hero">
        <h1>About AgroAI</h1>
        <p>Revolutionizing home agriculture through artificial intelligence and sustainable technology</p>
      </div>

      <div className="about-content">
        <div className="mission-section">
          <h2>Our Mission</h2>
          <p>
            At AgroAI, we believe that everyone deserves access to fresh, healthy, and sustainable food. 
            Our mission is to democratize agriculture by bringing intelligent, automated growing systems 
            into every home. We're committed to reducing food miles, eliminating pesticides, and empowering 
            individuals to take control of their food production through cutting-edge AI technology.
            <span className="development-status">Currently in active development, we're transforming this innovative concept into reality.</span>
          </p>
        </div>

        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon">🌱</div>
            <h3>Sustainability</h3>
            <p>
              We're passionate about creating a sustainable future. Our systems use 95% less water 
              than traditional farming and eliminate the need for harmful pesticides.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">🔬</div>
            <h3>Innovation</h3>
            <p>
              Cutting-edge AI and IoT technology drive our solutions. We continuously research and 
              develop new ways to optimize plant growth and user experience.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">🏠</div>
            <h3>Accessibility</h3>
            <p>
              Making home agriculture accessible to everyone, regardless of space, experience, or 
              location. Fresh food should be available to all.
            </p>
          </div>
        </div>

        <div className="team-section">
          <h2>Meet Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-photo">
                <img src={`${process.env.PUBLIC_URL}/o.jpg`} alt="Jithin Jose" />
              </div>
              <h4>Jithin Jose</h4>
              <p className="role">CEO & Founder</p>
              <p>Software engineer with 4+ years in AI and Development. Passionate about sustainable technology and urban farming.</p>
            </div>

            {/* <div className="team-member">
              <div className="member-photo">👩‍🔬</div>
              <h4>Dr. Sarah Martinez</h4>
              <p className="role">CTO & Co-Founder</p>
              <p>PhD in Agricultural Sciences from MIT. Leading expert in hydroponic systems and plant biology with 15+ publications.</p>
            </div>

            <div className="team-member">
              <div className="member-photo">👨‍🌾</div>
              <h4>James Thompson</h4>
              <p className="role">Head of Agriculture</p>
              <p>Third-generation farmer turned tech innovator. Bridges traditional farming wisdom with modern technology.</p>
            </div>

            <div className="team-member">
              <div className="member-photo">👩‍💻</div>
              <h4>Maya Patel</h4>
              <p className="role">Lead AI Engineer</p>
              <p>Former Google AI researcher specializing in computer vision and machine learning for agricultural applications.</p>
            </div> */}
          </div>
        </div>

        {/* <div className="stats-section">
          <h2>Our Impact</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <h3>10,000+</h3>
              <p>Homes Growing Fresh Food</p>
            </div>
            <div className="stat-item">
              <h3>2.5M</h3>
              <p>Gallons of Water Saved</p>
            </div>
            <div className="stat-item">
              <h3>98%</h3>
              <p>Customer Satisfaction</p>
            </div>
            <div className="stat-item">
              <h3>45</h3>
              <p>Countries Served</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default About;
