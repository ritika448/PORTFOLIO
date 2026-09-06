import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Code, Download, Briefcase, Smile, Coffee, Rocket, Terminal } from 'lucide-react';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiJavascript } from 'react-icons/si';
import heroImage from '../assets/hero_portrait.png';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        {/* LEFT COLUMN - CONTENT */}
        <div className="hero-content-left">
          <span className="hero-greeting-text">HELLO, I'M</span>
          
          <h1 className="hero-main-title">
            Ritika Bhangade<br/>
            Crafting Digital<br/>
            Excellence<br/>
            with Code & Design
          </h1>

          <p className="hero-subtext">
            Creative Developer passionate about building beautiful, 
            high-performance and user-friendly web applications with 
            the <strong>MERN stack</strong>.
          </p>

          <div className="hero-buttons">
            <Link to="/contact" className="btn-dark">
              <Rocket size={18} /> START A PROJECT
            </Link>
            <a href="/resume.pdf" download className="btn-light">
              <Download size={18} /> DOWNLOAD RESUME
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-icon"><Code size={20} color="var(--primary)" /></div>
              <div className="stat-text">
                <strong>2+</strong>
                <span>Years Learning</span>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon"><Briefcase size={20} color="#a855f7" /></div>
              <div className="stat-text">
                <strong>10+</strong>
                <span>Projects Completed</span>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon"><Smile size={20} color="#3b82f6" /></div>
              <div className="stat-text">
                <strong>15+</strong>
                <span>Technologies</span>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon"><Coffee size={20} color="#8b5cf6" /></div>
              <div className="stat-text">
                <strong>100%</strong>
                <span>Passion</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN - IMAGE & WIDGETS */}
        <div className="hero-visuals-right">
          <div className="image-wrapper-main">
            <img src={heroImage} alt="Ritika Bhangade" className="main-hero-img" />
          </div>

          {/* Floating Widgets */}
          <motion.div className="widget widget-code-bracket" animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4 }}>
            <Terminal size={20} color="var(--text-main)" />
            <div className="bracket-lines">
              <div className="b-line w-full"></div>
              <div className="b-line w-half"></div>
            </div>
          </motion.div>

          <motion.div className="widget widget-code-snippet" animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 5 }}>
            <pre>
              <span style={{color: '#c678dd'}}>const</span> <span style={{color: '#e5c07b'}}>developer</span> <span style={{color: '#56b6c2'}}>=</span> {'{'}<br/>
              &nbsp;&nbsp;<span style={{color: '#e06c75'}}>passion</span>: <span style={{color: '#98c379'}}>'Code'</span>,<br/>
              &nbsp;&nbsp;<span style={{color: '#e06c75'}}>skills</span>: [<span style={{color: '#98c379'}}>'React'</span>, <span style={{color: '#98c379'}}>'Node.js'</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{color: '#98c379'}}>'MongoDB'</span>, <span style={{color: '#98c379'}}>'Express'</span>],<br/>
              &nbsp;&nbsp;<span style={{color: '#e06c75'}}>goal</span>: <span style={{color: '#98c379'}}>'Make impact 🚀'</span><br/>
              {'}'}
            </pre>
          </motion.div>

          <motion.div className="widget widget-tech-stack" animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 3 }}>
            <div className="tech-icon"><SiMongodb color="#47A248" /></div>
            <div className="tech-icon"><SiJavascript color="#F7DF1E" /></div>
            <div className="tech-icon"><SiExpress color="#000000" /></div>
            <div className="tech-icon"><FaReact color="#61DAFB" /></div>
          </motion.div>

          <motion.div className="widget widget-freelance" animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 4.5 }}>
            <div className="status-dot"></div>
            <div className="freelance-text">
              <span>Available for</span>
              <strong>Freelance Projects</strong>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
