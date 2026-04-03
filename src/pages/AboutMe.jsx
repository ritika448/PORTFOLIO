import React from 'react';
import AboutSection from '../components/AboutSection';
import { motion } from 'framer-motion';

const AboutMe = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{ paddingTop: '80px' }}
    >
      <AboutSection />
    </motion.div>
  );
};

export default AboutMe;
