import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section brand-section">
                    <h3 className="footer-brand">
                        Secure<span className="core-text">Core</span>
                        <span className="brand-dot"></span>
                    </h3>
                    <p className="footer-description">
                        Revolutionizing product certification with blockchain technology for a sustainable future.
                    </p>
                </div>

                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul className="footer-links">
                        <li><a href="#features">Features</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#">Documentation</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Services</h4>
                    <ul className="footer-links">
                        <li><a href="#">Product Verification</a></li>
                        <li><a href="#">Certification</a></li>
                        <li><a href="#">Consulting</a></li>
                        <li><a href="#">Support</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Contact Info</h4>
                    <ul className="footer-contact">
                        <li>
                            <i className="fas fa-map-marker-alt"></i>
                            <span>123 Blockchain Street, Tech City, TC 12345</span>
                        </li>
                        <li>
                            <i className="fas fa-envelope"></i>
                            <span>contact@securecore.com</span>
                        </li>
                        <li>
                            <i className="fas fa-phone"></i>
                            <span>+1 (555) 123-4567</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-bottom-content">
                    <p>&copy; {new Date().getFullYear()} SecureCore. All rights reserved.</p>
                    <div className="footer-bottom-links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                        <a href="#">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;