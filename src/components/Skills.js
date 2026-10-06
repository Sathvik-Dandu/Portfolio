import React from 'react';
import { FaCode, FaDatabase, FaLanguage, FaCloud, FaPalette, FaChartLine } from 'react-icons/fa';

const Skills = () => {
  const skillsData = {
    languages: {
      title: "01 / Languages",
      icon: <FaLanguage />,
      skills: ["Python", "Java", "C", "JavaScript"]
    },
    webTech: {
      title: "02 / Web",
      icon: <FaCode />,
      skills: ["React", "MERN stack", "TypeScript", "WordPress"]
    },
    cloud: {
      title: "03 / Platforms",
      icon: <FaCloud />,
      skills: ["AWS", "Salesforce"]
    },
    databases: {
      title: "04 / Data",
      icon: <FaDatabase />,
      skills: ["MySQL", "MongoDB", "Supabase"]
    },
    marketing: {
      title: "05 / Beyond code",
      icon: <FaChartLine />,
      skills: ["SEO", "Digital marketing"]
    },
    design: {
      title: "06 / Design",
      icon: <FaPalette />,
      skills: ["Canva"]
    }
  };

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-heading"><p className="mono eyebrow">04 / TOOLKIT</p><h2 className="section-title">The things<br /><em>I work with.</em></h2><p className="section-subtitle">Tools and technologies I’ve used across coursework and projects.</p></div>
        
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
