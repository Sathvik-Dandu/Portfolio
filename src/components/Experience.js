import React from 'react';
import './Education.css';
import digitalConnectLogo from '../Images/Digital_Connect_Logo.png';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const experience = {
  company: 'Digital Connect',
  logo: digitalConnectLogo,
  location: 'India',
  period: 'Apr 2024 - Present',
  roles: [
    'Web Intern',
    'Marketing Intern'
  ],
  description:
    'Working as a Student Intern at Digital Connect, contributing to web development projects and supporting digital marketing initiatives. Gained hands-on experience in web technologies, content creation, and online marketing strategies.'
};

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">Professional work and internships</p>
        <div className="education-card card" style={{ width: '100%', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '2rem', padding: '1rem 2.5rem 1rem 2rem', justifyContent: 'flex-start', textAlign: 'left' }}>
          <div style={{ flex: '0 0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src={experience.logo} alt={experience.company} style={{ width: 80, height: 80, borderRadius: 8, objectFit: 'contain', boxShadow: '0 2px 8px rgba(0,0,0,0.07)' }} />
          </div>
          <div style={{ flex: '1 1 0', minWidth: 0 }}>
            <div className="education-header" style={{ marginBottom: 8 }}>
              <div className="education-info">
                <h3 className="degree" style={{ marginBottom: 4 }}>{experience.company}</h3>
                <p className="institution">{experience.roles.join(' & ')}</p>
              </div>
            </div>
            <div className="education-details" style={{ marginBottom: 8 }}>
              <div className="detail-item">
                <FaCalendarAlt />
                <span>{experience.period}</span>
              </div>
              <div className="detail-item">
                <FaMapMarkerAlt />
                <span>{experience.location}</span>
              </div>
            </div>
            <p className="education-description">{experience.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 