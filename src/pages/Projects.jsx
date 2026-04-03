import React from 'react';
import { motion } from 'framer-motion';
import ProjectsSection from '../components/ProjectsSection';

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{ paddingTop: '80px' }}
    >
      <ProjectsSection />
    </motion.div>
  );
};

export default Projects;
