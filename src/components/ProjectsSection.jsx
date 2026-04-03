import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import jobPortalImg from '../assets/job_portal.png';
import lmsHeroImg from '../assets/lms_hero.png';
import hardwareStoreImg from '../assets/hardware_store.png';
import './ProjectsSection.css';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Job Portal (MERN Stack)',
      description: 'A comprehensive job search and recruitment platform built with the MERN stack. Features include secure authentication, advanced job filtering, and a powerful dashboard for candidates and employers.',
      tags: ['MERN Stack', 'Express.js', 'Redux'],
      github: 'https://github.com/',
      demo: 'http://72.61.231.123/',
      image: jobPortalImg,
    },
    {
      title: 'LMS - Learning Management System',
      description: 'A professional e-learning platform where students can browse courses, track their learning progress, and interact with top instructors through a clean and intuitive interface.',
      tags: ['MERN Stack', 'React', 'Redux'],
      github: 'https://github.com/',
      demo: 'http://72.61.231.123/lms/',
      image: lmsHeroImg,
    },
    {
      title: 'Hardware Store Management',
      description: 'A robust retail solution for hardware stores featuring fast horizontal billing, live inventory management, and integrated UPI/Scanner-based payment configurations.',
      tags: ['MERN Stack', 'Billing', 'Inventory'],
      github: 'https://github.com/',
      demo: 'http://72.61.231.123/store/dashboard',
      image: hardwareStoreImg,
    },
  ];

  return (
    <section id="projects" className="projects-section section-padding">
      <div className="container">
        <div className="section-header">
          <span className="hero-subtitle">My Creative Work</span>
          <h2 className="section-title">Projects</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.github} className="project-link-icon" title="View Code">
                      <FaGithub size={20} />
                    </a>
                    <a href={project.demo} className="project-link-icon" title="Live Demo">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <a href={project.demo} className="project-btn-lite" target="_blank" rel="noopener noreferrer">
                  {project.title} <ExternalLink size={14} style={{ marginLeft: '5px' }} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
