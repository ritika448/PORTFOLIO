import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { title: 'Home', path: '/', isHash: true, hash: '#home' },
    { title: 'About', path: '/', isHash: true, hash: '#about' },
    { title: 'Skills', path: '/', isHash: true, hash: '#skills' },
    { title: 'Experience', path: '/', isHash: true, hash: '#experience' },
    { title: 'Work', path: '/', isHash: true, hash: '#projects' },
    { title: 'Contact', path: '/contact', isHash: false },
  ];

  const handleScroll = (e, link) => {
    if (link.isHash) {
      if (window.location.pathname === '/') {
        e.preventDefault();
        const element = document.getElementById(link.hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-container glass-panel">
          <Link to="/" className="logo">
            <div className="logo-text-container">
              <span className="logo-text">Er. Ritika Bhangade</span>
              <span className="logo-subtext">Software Engineer · Full Stack Developer</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="nav-links">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                to={link.isHash ? link.path + link.hash : link.path}
                className={`nav-item`}
                onClick={(e) => handleScroll(e, link)}
              >
                {link.title}
              </Link>
            ))}
          </div>

          <div className="nav-actions">
            <Link to="/contact" className="btn-secondary nav-btn">
              Let's Talk <ArrowUpRight size={16} />
            </Link>
            
            {/* Mobile Menu Icon */}
            <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X color="var(--text-main)" /> : <Menu color="var(--text-main)" />}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu glass-panel ${isOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.title}
              to={link.isHash ? link.path + link.hash : link.path}
              className={`mobile-nav-item`}
              onClick={(e) => handleScroll(e, link)}
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
