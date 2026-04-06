import React from 'react';
import { FaInstagram, FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section section-padding">
      <div className="container footer-container">
        <div className="cta-section">
          <h2 className="cta-title">Lets work together on your <br /> next project</h2>
          <p className="cta-description">
            I’m always excited to collaborate on new projects and bring creative ideas 
            to life. Whether you have a specific vision or just want to discuss 
            web development, feel free to reach out. Let’s build something 
            extraordinary together!
          </p>
          <Link to="/contact" className="btn-primary cta-btn">Contact</Link>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <div className="footer-logo">
            <span className="logo-icon">RB</span>
          </div>
          
          <div className="social-links">
            <a href="https://www.instagram.com/___ritikkaaa?igsh=MWlxMGhxOWZpZmJ1dw==" className="social-icon" target="_blank" rel="noopener noreferrer"><FaInstagram size={20} /></a>
            <a href="https://github.com/ritika448" className="social-icon" target="_blank" rel="noopener noreferrer"><FaGithub size={20} /></a>
            <a href="https://www.linkedin.com/in/ritika-bhangade-41211a2b9/" className="social-icon" target="_blank" rel="noopener noreferrer"><FaLinkedinIn size={20} /></a>
          </div>


          <p className="copyright">&copy; {new Date().getFullYear()} Ritika Bhangade. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
