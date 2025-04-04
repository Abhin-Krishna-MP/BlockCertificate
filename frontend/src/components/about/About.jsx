import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-header">
          <h2>About <span className="highlight">SecureCore</span></h2>
          <p className="subtitle">Revolutionizing Product Certification with Blockchain Technology</p>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <div className="about-description">
              <p>SecureCore is at the forefront of sustainable product certification, leveraging cutting-edge blockchain technology to ensure transparency and authenticity in product verification. Our platform connects manufacturers, consumers, and certification bodies in a secure, decentralized ecosystem.</p>
              
              <div className="stats-container">
                <div className="stat-item">
                  <span className="stat-number">1000+</span>
                  <span className="stat-label">Products Certified</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Partner Companies</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">99.9%</span>
                  <span className="stat-label">Verification Accuracy</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-features">
            <div className="feature-item">
              <div className="feature-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>To create a transparent and sustainable future through blockchain-powered product certification.</p>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">👥</div>
              <h3>Our Team</h3>
              <p>Comprised of blockchain experts, sustainability specialists, and industry veterans.</p>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">🌍</div>
              <h3>Global Impact</h3>
              <p>Making sustainable product verification accessible worldwide through innovative technology.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 