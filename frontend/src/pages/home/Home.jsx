import React from 'react'
import './home.css'
import About from '../../components/about/About'
import Contact from '../../components/contact/Contact'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  const handleVerificationClick = () => {
    navigate('/verification')
  }

  return (
    <div className="home-container">
      <div className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Certify Your Product's <span className="highlight">Sustainability</span></h1>
          <p>Blockchain-powered certification system ensuring transparency and authenticity in sustainable product verification</p>
          <div className="hero-buttons">
            <button className="primary-btn" onClick={()=>{handleVerificationClick,navigate('/verify')}}>Verify Product</button>
            <button className="secondary-btn" onClick={handleVerificationClick}>Apply for certification</button>
          </div>
        </div>
      </div>
      <div className="main-content">
        <div id="features" className="features-grid">
          <div className="feature-card">
            <div className="content-wrapper">
              <div className="feature-icon">🌱</div>
              <h3>Sustainable Verification</h3>
              <p>Verify product sustainability credentials with immutable blockchain technology</p>
            </div>
          </div>
          <div className="feature-card">
            <div className="content-wrapper">
              <div className="feature-icon">⛓️</div>
              <h3>Blockchain Security</h3>
              <p>Tamper-proof certification system ensuring complete data integrity</p>
            </div>
          </div>
          <div className="feature-card">
            <div className="content-wrapper">
              <div className="feature-icon">🌍</div>
              <h3>Global Impact</h3>
              <p>Contributing to global sustainability goals through transparent certification</p>
            </div>
          </div>
          <div className="feature-card">
            <div className="content-wrapper">
              <div className="feature-icon">📱</div>
              <h3>Easy Verification</h3>
              <p>Instant product verification through our user-friendly platform</p>
            </div>
          </div>
        </div>
      </div>
      <About />
      <Contact />
    </div>
  )
}

export default Home