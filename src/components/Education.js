import React from 'react';
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "Bachelor of Technology - BTech, Computer Science",
      institution: "Malla Reddy University",
      location: "India",
      period: "Sep 2022 - May 2026 (Expected)",
      description: "Currently pursuing Bachelor of Technology in Computer Science with focus on software development, algorithms, data structures, and modern programming technologies. Maintaining strong academic performance while participating in coding competitions and technical projects.",
      gpa: "In Progress"
    },
    {
      id: 2,
      degree: "Intermediate, MPC",
      institution: "Narayana Junior College",
      location: "India",
      period: "Aug 2020 - Jun 2022",
      description: "Completed intermediate education with Mathematics, Physics, and Computer Science (MPC) stream. Developed strong foundation in mathematics and sciences essential for computer science studies.",
      gpa: "Completed"
    },
    {
      id: 3,
      degree: "Grade X",
      institution: "Vignan Global Gen School",
      location: "India",
      period: "2017 - 2020",
      description: "Completed secondary education with focus on core subjects including mathematics, sciences, and computer fundamentals. Established strong academic foundation for higher studies.",
      gpa: "Completed"
    }
  ];

  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">My academic journey and achievements</p>
        
        <div className="education-timeline">
          {educationData.map((education, index) => (
            <div key={education.id} className="education-item">
              <div className="timeline-marker"></div>
              <div className="education-card card">
                <div className="education-header">
                  <div className="education-icon">
                    <FaGraduationCap />
                  </div>
                  <div className="education-info">
                    <h3 className="degree">{education.degree}</h3>
                    <p className="institution">{education.institution}</p>
                  </div>
                </div>
                
                <div className="education-details">
                  <div className="detail-item">
                    <FaCalendarAlt />
                    <span>{education.period}</span>
                  </div>
                  <div className="detail-item">
                    <FaMapMarkerAlt />
                    <span>{education.location}</span>
                  </div>
                  <div className="detail-item">
                    <span className="gpa-label">Status:</span>
                    <span className="gpa">{education.gpa}</span>
                  </div>
                </div>
                
                <p className="education-description">
                  {education.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education; 