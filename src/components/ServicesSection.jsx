import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Code, Layout, UserCircle, LifeBuoy, Flag } from 'lucide-react';
import './ServicesSection.css';

const ServicesSection = () => {
  const services = [
    {
      title: 'Creative Design',
      description: 'Leveraging artistic elements and aesthetic principles to craft visually appealing and engaging user experiences.',
      icon: <Palette size={32} color="var(--primary)" />,
    },
    {
      title: 'Clean Code',
      description: 'Writing code that is well-structured, readable, and maintainable. It involves following coding best practices.',
      icon: <Code size={32} color="var(--primary)" />,
    },
    {
      title: 'User Interface',
      description: 'Creating intuitive and user-friendly designs that prioritize usability, accessibility, and a seamless user experience.',
      icon: <Layout size={32} color="var(--primary)" />,
    },
    {
      title: 'User Experience',
      description: 'Understanding user behaviors, needs, and preferences to create interfaces that are intuitive, efficient, and enjoyable to use.',
      icon: <UserCircle size={32} color="var(--primary)" />,
    },
    {
      title: 'Fast Support',
      description: 'Address and resolve user-reported issues or inquiries related to the website or application promptly.',
      icon: <LifeBuoy size={32} color="var(--primary)" />,
    },
    {
      title: 'Branding',
      description: 'Creating consistent and cohesive brand experiences through the use of logos, color schemes, typography, and other branding assets.',
      icon: <Flag size={32} color="var(--primary)" />,
    },
  ];

  return (
    <section className="services-section section-padding">
      <div className="container">
        <div className="services-header">
          <span className="hero-subtitle">My Services</span>
          <h2 className="section-title">What Can I Do</h2>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div 
              key={service.title}
              className="service-card"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -15,
                scale: 1.05,
                transition: { duration: 0.4, ease: "easeOut" }
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
            >
              <div className="service-icon-wrapper">
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {service.icon}
                </motion.div>
                <div className="icon-glow"></div>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
