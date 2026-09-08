import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import jobPortalImg from '../assets/job_portal.png';
import lmsHeroImg from '../assets/lms_hero.png';
import hardwareStoreImg from '../assets/hardware_store.png';
import './ProjectsSection.css';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Job Portal (MERN Stack)',
      category: 'Full Stack Platform',
      description: 'A comprehensive job search and recruitment platform featuring secure authentication, advanced job filtering, and powerful dashboards.',
      tags: ['MERN Stack', 'Express.js', 'Redux'],
      github: 'https://github.com/',
      demo: 'http://72.61.231.123/',
      image: jobPortalImg,
    },
    {
      title: 'LMS - Learning Management System',
      category: 'E-Learning Platform',
      description: 'A professional platform for students to browse courses, track progress, and interact with instructors through an intuitive interface.',
      tags: ['MERN Stack', 'React', 'Redux'],
      github: 'https://github.com/',
      demo: 'http://72.61.231.123/lms/',
      image: lmsHeroImg,
    },
    {
      title: 'Hardware Store Management',
      category: 'Retail Solution',
      description: 'A robust solution for hardware stores featuring fast billing, live inventory management, and integrated UPI payment configurations.',
      tags: ['MERN Stack', 'Billing', 'Inventory'],
      github: 'https://github.com/',
      demo: 'http://72.61.231.123/store/dashboard',
      image: hardwareStoreImg,
    },
  ];

  return (
    <section id="projects" className="projects-section section-padding">
      <div className="container">
        <div className="projects-header">
          <div className="projects-title-area">
            <span className="hero-greeting">FEATURED PROJECTS</span>
            <h2 className="section-title">Selected Work</h2>
          </div>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="project-card glass-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.github} className="project-link-icon" target="_blank" rel="noopener noreferrer" title="View Code">
                      <FaGithub size={22} />
                    </a>
                    <a href={project.demo} className="project-link-icon" target="_blank" rel="noopener noreferrer" title="Live Demo">
                      <ExternalLink size={22} />
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
