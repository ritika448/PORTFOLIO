import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Calendar, MapPin, Briefcase } from 'lucide-react';
import './InternshipsSection.css';

const ExperienceSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      company: 'ALIT TECHNOLOGIES',
      logoUrl: 'https://logo.clearbit.com/alittech.com',
      role: 'Full Stack Developer Intern',
      period: 'Sep 2025 - Dec 2025',
      location: 'India',
      description: 'Completed a 3-month internship, gaining exposure to full stack development at Alit Technologies. Built responsive user interfaces using HTML, CSS, JavaScript, and React. Contributed to backend development, including server-side work.',
      tags: ['HTML/CSS', 'React.js', 'Node.js', 'MongoDB', 'JavaScript'],
    },
    {
      company: 'CODEXINTERN',
      logoUrl: 'https://logo.clearbit.com/codexintern.in',
      role: 'Frontend Developer',
      period: 'Aug 2025 - Sep 2025',
      location: 'Remote',
      description: 'Built responsive web applications using React.js, JavaScript, HTML, CSS, and Tailwind CSS. Worked on API integration, client-side routing, and interactive UI components. Developed projects like a translator app, random-string-generator, and react-router project.',
      tags: ['HTML/CSS', 'React.js', 'JavaScript', 'Tailwind CSS'],
    },
    {
      company: 'Krishaa Soft',
      logoUrl: 'https://logo.clearbit.com/krishaasoft.com',
      role: 'MERN Stack Developer',
      period: 'Jan 2026 - Jun 2026',
      location: 'Indore, India',
      description: 'Developing high-performance web applications using the MERN stack. Responsible for building scalable backend architectures with Node.js and Express, designing intuitive frontends in React, and managing complex MongoDB databases. Collaborating with cross-functional teams to deliver end-to-end digital solutions.',
      tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Redux'],
    },
    {
      company: 'Gnv India Techverse',
      logoUrl: 'https://logo.clearbit.com/gnvindiatechverse.com',
      role: 'Software Engineer',
      period: 'Jul 2026 - Present',
      location: 'Indore, MP, India (On-site)',
      description: 'Working as a full-time Software Engineer developing scalable web applications. Responsible for implementing complex features, maintaining code quality, and collaborating with the team to deliver robust software solutions.',
      tags: ['Software Engineering', 'Full Stack Development', 'React.js', 'Node.js'],
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % experiences.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [experiences.length]);

  return (
    <section id="experience" className="internships-section section-padding">
      <div className="container">
        <div className="section-header text-center">
          <span className="hero-subtitle">Professional Growth</span>
          <h2 className="section-title">My Experience</h2>
        </div>

        <div className="experience-tabs-container">
          {/* LEFT SIDEBAR - TABS */}
          <div className="tabs-sidebar">
            <div className="tabs-list">
              {experiences.map((exp, index) => {
                const colors = ['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6'];
                const color = colors[index % colors.length];
                return (
                  <button
                    key={exp.company}
                    className={`tab-btn ${activeTab === index ? 'active' : ''}`}
                    onClick={() => setActiveTab(index)}
                  >
                    <div className="tab-btn-content">
                      <span className="tab-btn-text">{exp.company}</span>
                    </div>
                    {activeTab === index && (
                      <motion.div 
                        className="tab-indicator"
                        layoutId="tabIndicator"
                        initial={false}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT CONTENT PANE */}
          <div className="tabs-content-pane glass-panel">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="tab-content"
              >
                <div className="tab-header">
                  <div className="tab-header-top">
                    <h3 className="tab-role">
                      {experiences[activeTab].role} 
                      <span className="tab-company-highlight"> @ {experiences[activeTab].company}</span>
                    </h3>
                  </div>
                  <div className="tab-meta">
                    <span className="meta-item"><Calendar size={16} /> {experiences[activeTab].period}</span>
                    <span className="meta-item"><MapPin size={16} /> {experiences[activeTab].location}</span>
                  </div>
                </div>

                <div className="tab-body">
                  <p className="tab-description">{experiences[activeTab].description}</p>
                </div>

                <div className="tab-footer">
                  <div className="tab-tags">
                    {experiences[activeTab].tags.map(tag => (
                      <span key={tag} className="tab-tag">
                        <Briefcase size={14} style={{ marginRight: '6px' }}/>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
