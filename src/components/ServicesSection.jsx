import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Code, Layout, UserCircle, LifeBuoy, Flag, ArrowUpRight } from 'lucide-react';
import './ServicesSection.css';

const ServicesSection = () => {
  const services = [
    {
      title: 'Product Design',
      description: 'Designing intuitive and engaging user interfaces for web and mobile products.',
      icon: <Palette size={32} color="var(--accent)" />,
    },
    {
      title: 'UI/UX Design',
      description: 'Creating seamless user experiences through research, wireframing and prototyping.',
      icon: <Layout size={32} color="var(--accent)" />,
    },
    {
      title: 'Design Systems',
      description: 'Building scalable design systems and component libraries for consistent experiences.',
      icon: <Code size={32} color="var(--accent)" />,
    },
    {
      title: 'User Research',
      description: 'Understanding users deeply through research and data to inform better design.',
      icon: <UserCircle size={32} color="var(--accent)" />,
    },
  ];

  return (
    <section id="services" className="services-section section-padding">
      <div className="container">
        <div className="services-header">
          <span className="hero-greeting">WHAT I DO</span>
          <h2 className="section-title">Services I Offer</h2>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div 
              key={service.title}
              className="service-card glass-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="service-icon-wrapper">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              
              <div className="service-arrow">
                <ArrowUpRight size={20} color="var(--text-secondary)" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
