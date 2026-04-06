import React from 'react';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import ExperienceSection from '../components/InternshipsSection';

const Home = () => {
  return (
    <div className="home-scrolling-container">
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
    </div>
  );
};

export default Home;
