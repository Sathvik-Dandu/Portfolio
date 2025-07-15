import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaCode, FaTerminal } from 'react-icons/fa';
import profileImage from '../Images/Myself.jpeg';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <div className="code-header">
              <span className="code-keyword">const</span> <span className="code-string">developer</span> = {'{'}
            </div>
            
            <h1 className="hero-title">
              <span className="code-keyword">Name</span>: <span className="code-string">"Sathvik Dandu"</span>,
            </h1>
            <h2 className="hero-subtitle">
              <span className="code-keyword">Role</span>: <span className="code-string">"Student & Developer"</span>,
            </h2>
            <p className="hero-description">
              <span className="code-keyword">Description</span>: <span className="code-string">"Passionate student with a love for clean code and innovative solutions. Currently exploring the vast world of software development while building projects that make a difference."</span>,
            </p>
            
            <div className="code-block">
              <div className="code-comment">// Current Status</div>
              <div><span className="code-keyword">status</span>: <span className="code-string">"Learning & Building"</span>,</div>
              <div><span className="code-keyword">location</span>: <span className="code-string">"India"</span>,</div>
              <div><span className="code-keyword">interests</span>: [<span className="code-string">"Web Dev"</span>, <span className="code-string">"AI/ML"</span>, <span className="code-string">"Open Source"</span>]</div>
              {'}'}
            </div>
            
            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary">
                <FaTerminal /> Get In Touch
              </a>
              <a href="https://www.canva.com/design/DAGVZJWvK1o/ebli4POOsND0NrXcUEmF8A/edit?utm_content=DAGVZJWvK1o&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" className="btn btn-secondary">
                <FaDownload /> Download CV
              </a>
            </div>

            <div className="social-links">
              <a href="https://github.com/Sathvik-Dandu" target="_blank" rel="noopener noreferrer" title="GitHub">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/sathvik-dandu/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://mail.google.com/mail/?view=cm&to=dsathvik204@gmail.com" target="_blank" rel="noopener noreferrer" title="Email">
                <FaEnvelope />
              </a>
            </div>
          </div>
          
          <div className="about-image">
            <div className="image-container">
              <img src={profileImage} alt="Sathvik Dandu" className="profile-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 