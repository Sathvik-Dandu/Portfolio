import React from 'react';
import { FaCode, FaDatabase, FaGlobe, FaCloud, FaTools, FaCogs } from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  const skillsData = {
    programming: {
      title: "Programming",
      icon: <FaCode />,
      skills: ["Java", "Python", "JavaScript"]
    },
    webDev: {
      title: "Web Development",
      icon: <FaGlobe />,
      skills: ["MERN Stack", "HTML", "CSS", "WordPress"]
    },
    database: {
      title: "Database",
      icon: <FaDatabase />,
      skills: ["SQL", "MongoDB"]
    },
    cloud: {
      title: "Cloud & Platforms",
      icon: <FaCloud />,
      skills: ["Salesforce (Admin & Developer)", "AWS"]
    },
    tools: {
      title: "Tools & Technologies",
      icon: <FaTools />,
      skills: ["Git", "GitHub", "VS Code", "WordPress", "Canva"]
    },
    concepts: {
      title: "Core Concepts",
      icon: <FaCogs />,
      skills: ["OOPs", "DBMS"]
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