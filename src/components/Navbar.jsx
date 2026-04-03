import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { title: 'HOME', path: '/', isHash: true, hash: '#home' },
    { title: 'RESUME', path: '/resume', isHash: false },
    { title: 'PROJECTS', path: '/', isHash: true, hash: '#projects' },
    { title: 'EXPERIENCE', path: '/', isHash: true, hash: '#experience' },
    { title: 'ABOUT ME', path: '/', isHash: true, hash: '#about' },
    { title: 'CONTACT', path: '/', isHash: true, hash: '#contact' },
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
      <div className="container nav-container">
        <Link to="/" className="logo">
          PORTFOLIO<span className="logo-dot">.</span>
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

        {/* Mobile Menu Icon */}
        <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X color="white" /> : <Menu color="white" />}
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
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
