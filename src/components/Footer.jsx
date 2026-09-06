import React from 'react';
import { FaInstagram, FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import { Link, useLocation } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const location = useLocation();

  const handleContactClick = () => {
    if (location.pathname === '/contact') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer-section section-padding">
      <div className="container footer-container">
        
        <div className="contact-wrapper">
          <div className="contact-info">
            <span className="hero-greeting">LET'S CONNECT</span>
            <h2 className="cta-title">Have a project in mind?<br/>Let's create something amazing<br/>together.</h2>
          </div>
          
          <div className="cta-action">
            <Link 
              to="/contact" 
              onClick={handleContactClick}
              className="btn-primary" 
              style={{ padding: '1.2rem 2.5rem', fontSize: '1.1rem' }}
            >
              Start a Conversation <ArrowUpRight size={20} />
            </Link>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <div className="footer-logo">
            <span className="footer-name">Ritika Bhangade</span>
          </div>
          
          <p className="copyright">&copy; {new Date().getFullYear()} Ritika Bhangade. All rights reserved.</p>
          
          <div className="social-links">
            <a href="https://www.instagram.com/___ritikkaaa?igsh=MWlxMGhxOWZpZmJ1dw==" className="social-icon" target="_blank" rel="noopener noreferrer"><FaInstagram size={18} /></a>
            <a href="https://github.com/ritika448" className="social-icon" target="_blank" rel="noopener noreferrer"><FaGithub size={18} /></a>
            <a href="https://www.linkedin.com/in/ritika-bhangade-41211a2b9/" className="social-icon" target="_blank" rel="noopener noreferrer"><FaLinkedinIn size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
