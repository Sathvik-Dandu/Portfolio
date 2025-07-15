import React from 'react';
import { FaCertificate, FaExternalLinkAlt, FaCalendarAlt } from 'react-icons/fa';
import pythonEssentials1 from '../Images/Python Essentials-1.png';
import pythonEssentials2 from '../Images/Python Essentials-2.png';
import programmingInJava from '../Images/Programming in Java.png';
import canvaCert from '../Images/Canva.png';
import programmingFundamentals from '../Images/Programming fundamentals.png';
import pythonDataStructures from '../Images/Python Data Structures.png';
import GettingStartedWithPython from '../Images/GettingStartedWithPython.png';
import VerbalVoyage from '../Images/VerbalVoyage.png';
import './Certificates.css';

const Certificates = () => {
  const certificatesData = [
    {
      id: 1,
      title: "Python Essentials 1",
      issuer: "Cisco Networking Academy",
      date: "Jun 2025",
      description: "Comprehensive Python programming fundamentals covering syntax, data types, and basic programming concepts.",
      link: "https://drive.google.com/file/d/14qV3GFa7x49zMlq_glrumKiEfHz5qDdL/view?usp=drive_link",
      image: pythonEssentials1
    },
    {
      id: 2,
      title: "Python Essentials 2",
      issuer: "Cisco Networking Academy",
      date: "Jun 2025",
      description: "Advanced Python programming concepts including OOP, data structures, and practical applications.",
      link: "https://drive.google.com/file/d/1sgGRHwOKmzPI6mw79Af8dZTOySsOPLtZ/view?usp=sharing",
      image: pythonEssentials2
    },
    {
      id: 3,
      title: "Programming in Java",
      issuer: "NPTEL",
      date: "May 2024",
      description: "Comprehensive Java programming course covering core concepts, OOP principles, and practical development.",
      link: "https://drive.google.com/file/d/1rOtWWyNIq0RVM0PmCZTUfFpM7BP3r7o3/view?usp=sharing",
      image: programmingInJava
    },
    {
      id: 4,
      title: "Use Canva to Create Desktop and Mobile-friendly Web Pages",
      issuer: "Coursera",
      date: "Oct 2023",
      description: "Web design and development using Canva for creating responsive and user-friendly web pages.",
      link: "https://drive.google.com/file/d/1zRdUo_ZqqVLtRPH9yxFc0ZWuUTwSSzbp/view?usp=sharing",
      image: canvaCert
    },
    {
      id: 5,
      title: "Programming Fundamentals",
      issuer: "Coursera",
      date: "Jun 2023",
      description: "Foundation course covering programming basics, algorithms, and problem-solving techniques using C language.",
      link: "https://drive.google.com/file/d/1-wspQob8zoYz-2cnwyzcj6hZAe5ONG8G/view?usp=sharing",
      image: programmingFundamentals
    },
    {
      id: 6,
      title: "Programming for Everybody (Getting Started with Python)",
      issuer: "Coursera",
      date: "May 2023",
      description: "Introduction to Python programming for beginners, covering basic syntax and programming concepts.",
      link: "https://drive.google.com/file/d/1BQaL3jMxgmkUqNCSm7KuvXbRabX4ySra/view?usp=sharing",
      image: GettingStartedWithPython
    },
    {
      id: 7,
      title: "Python Data Structures",
      issuer: "Coursera",
      date: "May 2023",
      description: "Advanced course on Python data structures including lists, dictionaries, tuples, and custom data structures.",
      link: "https://drive.google.com/file/d/1jzq6KseZ8bixUOx7_mK4CYKwvTSScVWe/view?usp=sharing",
      image: pythonDataStructures
    },
    {
      id: 8,
      title: "Certificate of Participation - Verbal Voyage",
      issuer: "Verbal Voyage",
      date: "2024",
      description: "Certificate of participation for Verbal Voyage event, recognizing active involvement and contribution.",
      link: "https://drive.google.com/file/d/141xNRD69YEHv3eMcoPXhM45D-CngLiYv/view?usp=sharing",
      image: VerbalVoyage 
    }
  ];

  return (
    <section id="certificates" className="section">
      <div className="container">
        <h2 className="section-title">Certificates</h2>
        <p className="section-subtitle">Professional certifications and achievements</p>
        
        <div className="certificates-grid">
          {certificatesData.map((certificate) => (
            <div key={certificate.id} className="certificate-card card">
              <div className="certificate-image">
                <img src={certificate.image} alt={certificate.title} />
                <div className="certificate-overlay">
                  <FaCertificate className="certificate-icon" />
                </div>
              </div>
              
              <div className="certificate-content">
                <h3 className="certificate-title">{certificate.title}</h3>
                <p className="certificate-issuer">{certificate.issuer}</p>
                
                <div className="certificate-meta">
                  <div className="meta-item">
                    <FaCalendarAlt />
                    <span>{certificate.date}</span>
                  </div>
                </div>
                
                <p className="certificate-description">
                  {certificate.description}
                </p>
                
                <a 
                  href={certificate.link} 
                  className="certificate-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt />
                  View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates; 