import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Calendar, MapPin, Briefcase } from 'lucide-react';
import './InternshipsSection.css';

const ExperienceSection = () => {
  const experiences = [
    {
      company: 'Krishaa Soft IT Solution',
      role: 'MERN Stack Developer',
      period: 'Jan 2026 - Present',
      location: 'Indore, India',
      description: 'Developing high-performance web applications using the MERN stack. Responsible for building scalable backend architectures with Node.js and Express, designing intuitive frontends in React, and managing complex MongoDB databases. Collaborating with cross-functional teams to deliver end-to-end digital solutions.',
      tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Redux'],
    },
    {
      company: 'CODEXINTERN',
      role: 'Frontend Developer',
      period: 'Aug 2025 - Sep 2025',
      location: 'Remote',
      description: 'Built responsive web applications using React.js, JavaScript, HTML, CSS, and Tailwind CSS. Worked on API integration, client-side routing, and interactive UI components. Developed projects like a translator app, random-string-generator, and react-router project.',
      tags: ['HTML/CSS', 'React.js', 'JavaScript', 'Tailwind CSS'],
    },
    {
      company: 'ALIT TECHNOLOGIES',
      role: 'Full Stack Developer Intern',
      period: 'Sep 2025 - Dec 2025',
      location: 'India',
      description: 'Completed a 3-month internship, gaining exposure to full stack development at Alit Technologies. Built responsive user interfaces using HTML, CSS, JavaScript, and React. Contributed to backend development, including server-side work.',
      tags: ['HTML/CSS', 'React.js', 'Node.js', 'MongoDB', 'JavaScript', 'TypeScript'],
    },
  ];

  return (
    <section id="experience" className="internships-section section-padding">
      <div className="container">
        <div className="section-header">
          <span className="hero-subtitle">Professional Growth</span>
          <h2 className="section-title">My Experience</h2>
        </div>

        <div className="timeline-wrapper">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company + index}
              className="timeline-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <div className="role-company">
                    <h3 className="intern-role">{exp.role}</h3>
                    <div className="intern-company">
                      <Building2 size={16} />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  <div className="intern-period">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <div className="intern-location">
                  <MapPin size={14} />
                  <span>{exp.location}</span>
                </div>

                <p className="intern-description">{exp.description}</p>

                <div className="intern-tags">
                  {exp.tags.map(tag => (
                    <span key={tag} className="intern-tag">
                      <Briefcase size={12} />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
