import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layout, Server, Database, Wrench, Terminal, Cpu, ChevronDown } from 'lucide-react';
import './SkillsSection.css';

const SkillsSection = () => {
  const [openAccordion, setOpenAccordion] = useState(0);

  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind', 'Material UI', 'Responsive Design'],
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth', 'RBAC'],
    },
    {
      title: 'Database',
      skills: ['MongoDB', 'Mongoose', 'Mongo Atlas'],
    },
    {
      title: 'Tools',
      skills: ['Git', 'GitHub', 'Postman', 'Docker', 'AWS'],
    },
    {
      title: 'Programming',
      skills: ['JavaScript', 'TypeScript', 'DSA'],
    }
  ];

  return (
    <section id="skills" className="skills-section section-padding">
      <div className="container">
        <div className="section-header text-center">
          <span className="hero-subtitle">Technical Expertise</span>
          <h2 className="section-title">My Skill Tree</h2>
        </div>

        <div className="rpg-tree-container desktop-only">
          <motion.div 
            className="rpg-tree"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <ul>
              <li>
                <div className="node root-node">
                  <Cpu size={24} style={{ marginRight: '8px' }} />
                  Full Stack Engineer
                </div>
                <ul>
                  {skillCategories.map((category, index) => (
                    <li key={category.title}>
                      <div className="node cat-node">
                        {category.title}
                      </div>
                      <ul className="vertical-leaves">
                        {category.skills.map((skill, sIndex) => (
                          <li key={skill}>
                            <motion.div 
                              className="node leaf-node"
                              initial={{ opacity: 0, y: -20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.3, delay: 0.2 + (index * 0.1) + (sIndex * 0.1) }}
                            >
                              {skill}
                            </motion.div>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* MOBILE ACCORDION VIEW */}
        <div className="mobile-accordion-container mobile-only">
          <div className="accordion-root-header">
            <Cpu size={24} style={{ marginRight: '8px' }} />
            Full Stack Engineer
          </div>
          
          <div className="accordion-list">
            {skillCategories.map((category, index) => {
              const isOpen = openAccordion === index;
              return (
                <div key={category.title} className={`accordion-item ${isOpen ? 'open' : ''}`}>
                  <button 
                    className="accordion-header"
                    onClick={() => setOpenAccordion(isOpen ? -1 : index)}
                  >
                    <span>{category.title}</span>
                    <ChevronDown size={20} className={`accordion-icon ${isOpen ? 'rotated' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="accordion-body"
                      >
                        <div className="accordion-skills-grid">
                          {category.skills.map(skill => (
                            <span key={skill} className="accordion-skill-chip">{skill}</span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;
