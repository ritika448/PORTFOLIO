import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import aboutImage from '../assets/about_portrait.png';
import './AboutSection.css';

const AboutSection = () => {
  const skills = [
    { name: 'MongoDB', icon: '🍃' },
    { name: 'Express', icon: '🚂' },
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'JavaScript', icon: '📜' },
  ];

  return (
    <section id="about" className="about-section section-padding">
      <div className="container about-container">
        <motion.div 
          className="about-image-container"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="about-image-wrapper">
            <img src={aboutImage} alt="Developer Bio" className="about-image" />
          </div>
          <div className="about-image-accent"></div>
        </motion.div>

        <motion.div 
          className="about-content"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="hero-subtitle">About me</span>
          <h2 className="section-title">Who Am I</h2>
          <p className="about-description">
            I am a passionate MERN Stack Developer with a strong focus on building 
            full-stack web applications. I specialize in creating seamless user 
            interfaces with React and developing robust backends using Node.js, 
            Express, and MongoDB.
          </p>
          <p className="about-description">
            I love solving complex problems and I'm dedicated 
            to writing clean, efficient code while constantly learning new technologies 
            to deliver high-quality digital solutions.
          </p>
          
          <div className="skills-marquee">
            <div className="skills-track">
              {skills.map((skill) => (
                <div key={skill.name} className="skill-item">
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
              {/* Duplicated skills for seamless loop */}
              {skills.map((skill) => (
                <div key={`${skill.name}-duplicate`} className="skill-item">
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <Link to="/resume" className="btn-primary btn-with-icon">
            <ExternalLink size={18} />
            VIEW PORTFOLIO
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
