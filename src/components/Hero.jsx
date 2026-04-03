import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import heroImage from '../assets/hero_portrait.png';
import './Hero.css';

const Hero = () => {
  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="hero-label">RITIKA BHANGADE</span>
          <h1 className="hero-title">
            Crafting Digital <span className="highlight-text">Excellence</span> <br />
            with Code & Design
          </h1>
          
          <div className="hero-typewriter">
            <span className="static-text">I am </span>
            <Typewriter
              words={['MERN Stack Developer', 'a Problem Solver', 'a Creative Developer']}
              loop={0}
              cursor
              cursorStyle='|'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </div>

          <p className="hero-description">
            Turning complex requirements into seamless, high-performance web solutions. 
            Focused on building scalable applications with the modern MERN stack.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="btn-primary" onClick={(e) => handleScroll(e, '#contact')}>START A PROJECT</a>
            <a href="#projects" className="btn-lite" onClick={(e) => handleScroll(e, '#projects')}>VIEW WORK</a>
          </div>
        </motion.div>

        <motion.div 
          className="hero-image-container"
          initial={{ opacity: 0, scale: 0.8, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <div className="hero-image-wrapper small-frame">
            <img src={heroImage} alt="Ritika Bhangade" className="hero-image grayscale" />
            <div className="hero-image-glow"></div>
            <div className="hero-frame-accent"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
