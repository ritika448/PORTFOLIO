import React from 'react';
import { motion } from 'framer-motion';
import InternshipsSection from '../components/InternshipsSection';

const Internships = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{ paddingTop: '80px' }}
    >
      <InternshipsSection />
    </motion.div>
  );
};

export default Internships;
