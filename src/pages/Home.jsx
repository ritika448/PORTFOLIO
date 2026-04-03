import React from 'react';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import ExperienceSection from '../components/InternshipsSection';
import ContactMe from './ContactMe';

const Home = () => {
  return (
    <div className="home-scrolling-container">
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactMe />
    </div>
  );
};

export default Home;
