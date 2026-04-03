import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import './Resume.css';

const Resume = () => {
  const resumeRef = useRef(null);

  const scrollToResume = () => {
    resumeRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const resumeData = {
    personal: {
      name: "Ritika Bhangade",
      role: "Full Stack Developer | MongoDB, Express, React, Node.js, JavaScript",
      email: "ritikabhangade80@gmail.com",
      phone: "7694871571",
      location: "Indore, Madhya Pradesh",
      github: "ritika448",
      linkedin: "ritika-bhangade-41211a2b9",
    },
    skills: {
      hard: "HTML/CSS, Javascript, React.js, Node.js, Express.js, MongoDB, C++, C, Git, GitHub",
      soft: "Communication, Time Management, Teamwork, Problem-Solving, Decision-Making"
    },
    experience: [
      {
        role: "MERN STACK DEVELOPER",
        period: "Jan 2026 - Present",
        company: "KRISHAA SOFT IT SOLUTION",
        stack: "MongoDB, Express.js, React.js, Node.js, Redux",
        highlights: [
          "Developing high-performance web applications using the MERN stack.",
          "Building scalable backend architectures with Node.js and Express.",
          "Designing intuitive frontends in React and managing complex MongoDB databases."
        ]
      },
      {
        role: "FRONTEND DEVELOPER",
        period: "Aug 2025 - Sep 2025",
        company: "CODEXINTERN",
        stack: "HTML/CSS, React.js, JavaScript, Tailwind CSS",
        highlights: [
          "Built responsive web applications using reactjs javascript html css and tailwind css.",
          "Worked on API integration, client side routing, and interactive UI components.",
          "Developed projects like translator app, random-string-generator and react-router project."
        ]
      },
      {
        role: "FULL STACK DEVELOPER INTERN",
        period: "Sep 2025 - Dec 2025",
        company: "ALIT TECHNOLOGIES",
        stack: "HTML/CSS, React.js, Node.js, MongoDB, JavaScript, TypeScript",
        highlights: [
          "Completed a 3-month internship, gaining exposure to full stack development at Alit Technologies.",
          "Built responsive user interfaces using HTML, CSS, JavaScript, and React.",
          "Contributed to backend development, including server-side work."
        ]
      }
    ],
    projects: [
      {
        name: "Job Portal (MERN Stack)",
        link: "http://72.61.231.123/",
        stack: "React, Node, Express, MongoDB",
        description: "A professional recruitment platform with advanced search, live dashboard, and secure user auth."
      },
      {
        name: "LMS - Learning Management System",
        link: "http://72.61.231.123/lms/",
        stack: "React, Node, Express, MongoDB",
        description: "Modern e-learning hub with course catalog, lesson tracking, and interactive learning tools."
      },
      {
        name: "Hardware Store Management",
        link: "http://72.61.231.123/store/dashboard",
        stack: "React, Node, Express, MongoDB",
        description: "Retail inventory system featuring fast scanning and integrated UPI payment setups."
      }
    ],
    problemSolving: "Ritika Bhangade demonstrated strong problem-solving skills by completing over 100 coding challenges on platforms like HackerRank and Codeforces, showcasing proficiency in algorithms and data structures.",
    education: [
      { school: "SAGE University", degree: "B.Tech | Computer Science Engineering (2021-2025)", score: "70%" },
      { school: "Rai Academy Hs School", degree: "Class XII (2021)", score: "70%" },
      { school: "Govt ACM Girls Maharana Pratap Nagar Indore", degree: "Class X (2019)", score: "66%" }
    ],
    certifications: [
      { name: "FULL STACK DEVELOPER INTERNSHIP", provider: "Alit technologies", date: "December 2025" },
      { name: "C  Cpp certification", provider: "Universal Informatics", date: "September 2024" }
    ]
  };

  return (
    <motion.div
      id="resume"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="resume-page"
    >
      <div className="container">
        <div className="resume-header">
          <span className="hero-subtitle">My Credentials</span>
          <h2 className="section-title">Resume</h2>
          
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
            <button onClick={scrollToResume} className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <FileText size={18} />
              PREVIEW RESUME
            </button>
            <a href="/resume.pdf" download className="btn-lite" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <Download size={18} />
              DOWNLOAD PDF
            </a>
          </div>
        </div>

        <div ref={resumeRef} className="resume-paper">
          <div className="resume-top">
            <h1 className="resume-name">{resumeData.personal.name}</h1>
            <p className="resume-role">{resumeData.personal.role}</p>
            
            <div className="resume-contact-grid">
              <div className="resume-contact-item"><Mail size={14} /> {resumeData.personal.email}</div>
              <div className="resume-contact-item"><Phone size={14} /> {resumeData.personal.phone}</div>
              <div className="resume-contact-item"><MapPin size={14} /> {resumeData.personal.location}</div>
            </div>
            
            <div className="resume-contact-grid" style={{ marginTop: '5px' }}>
              <div className="resume-contact-item">
                <a href={`https://github.com/${resumeData.personal.github}`} target="_blank" rel="noopener noreferrer">
                  <FaGithub size={14} /> GitHub
                </a>
              </div>
              <div className="resume-contact-item">
                <a href={`https://linkedin.com/in/${resumeData.personal.linkedin}`} target="_blank" rel="noopener noreferrer">
                  <FaLinkedinIn size={14} /> LinkedIn
                </a>
              </div>
            </div>
          </div>

          <section className="resume-section">
            <h3 className="resume-section-title">Technical Skills</h3>
            <div style={{ fontSize: '0.95rem', marginTop: '12px' }}>
              <p style={{ margin: '6px 0' }}><strong>Hard Skills:</strong> {resumeData.skills.hard}</p>
              <p style={{ margin: '6px 0' }}><strong>Soft Skills:</strong> {resumeData.skills.soft}</p>
            </div>
          </section>

          <section className="resume-section">
            <h3 className="resume-section-title">Professional Experience</h3>
            {resumeData.experience.map((exp, i) => (
              <div key={i} className="resume-exp-item">
                <div className="resume-exp-header">
                  <h4 className="resume-exp-role">{exp.role}</h4>
                  <span className="resume-exp-period">{exp.period}</span>
                </div>
                <p className="resume-exp-company">{exp.company}</p>
                <p className="resume-exp-stack">{exp.stack}</p>
                <ul className="resume-list">
                  {exp.highlights.map((h, j) => (
                    <li key={j}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          <section className="resume-section">
            <h3 className="resume-section-title">Technical Projects</h3>
            {resumeData.projects.map((proj, i) => (
              <div key={i} className="resume-exp-item">
                <div className="resume-exp-header">
                  <div className="resume-exp-role">{proj.name}</div>
                  <div className="resume-exp-period">2025</div>
                </div>
                <p className="resume-exp-stack">{proj.stack}</p>
                <div style={{ display: 'flex', gap: '15px', marginTop: '4px' }}>
                  <a href={proj.link} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.8rem', color: '#2563eb', textDecoration: 'none', fontWeight: '500' }}>
                    <ExternalLink size={13} /> Live Demo
                  </a>
                </div>
                <ul className="resume-list">
                  <li>{proj.description}</li>
                </ul>
              </div>
            ))}
          </section>

          <section className="resume-section" style={{ marginBottom: 0 }}>
            <h3 className="resume-section-title">Education</h3>
            {resumeData.education.map((edu, i) => (
              <div key={i} className="resume-edu-item">
                <div>
                  <div className="resume-edu-school">{edu.school}</div>
                  <div className="resume-edu-degree">{edu.degree}</div>
                </div>
                <div className="resume-edu-score">
                  {edu.score}
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
