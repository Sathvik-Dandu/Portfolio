import React from 'react';
import { FaCode, FaDatabase, FaTools, FaLanguage, FaServer, FaMobile, FaCloud, FaPalette, FaChartLine } from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  const skillsData = {
    languages: {
      title: "Programming Languages",
      icon: <FaLanguage />,
      skills: ["Python", "Java", "C (Programming Language)"]
    },
    webTech: {
      title: "Web Technologies",
      icon: <FaCode />,
      skills: ["MERN Stack", "WordPress Design", "Web Design", "Web Development"]
    },
    cloud: {
      title: "Cloud & Platforms",
      icon: <FaCloud />,
      skills: ["Amazon Web Services (AWS)", "Salesforce Developer"]
    },
    databases: {
      title: "Databases",
      icon: <FaDatabase />,
      skills: ["MySQL", "Database Management System (DBMS)"]
    },
    marketing: {
      title: "Digital Marketing",
      icon: <FaChartLine />,
      skills: ["Search Engine Optimization (SEO)", "Off-Page SEO", "Digital Marketing"]
    },
    design: {
      title: "Design Tools",
      icon: <FaPalette />,
      skills: ["Canva"]
    }
  };

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">Technologies and tools in my development stack</p>
        
        <div className="skills-grid">
          {Object.entries(skillsData).map(([key, category]) => (
            <div key={key} className="skill-category card">
              <div className="category-header">
                <div className="category-icon">
                  {category.icon}
                </div>
                <h3 className="category-title">{category.title}</h3>
              </div>
              
              <div className="skills-list">
                {category.skills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <span className="skill-name">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 