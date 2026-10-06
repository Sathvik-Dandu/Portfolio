import React from 'react';
import { FaArrowDown, FaArrowRight, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import profileImage from '../Images/Myself.jpeg';

const About = () => (
  <>
    <section id="about" className="hero-section">
      <div className="hero-gridline" aria-hidden="true" />
      <div className="container hero-layout">
        <div className="hero-copy">
          <p className="mono eyebrow"><span className="status-dot" /> CSE STUDENT / DEVELOPER <span className="hero-location">HYDERABAD, IN</span></p>
          <h1 className="hero-title"><span>SATHVIK</span><span className="hero-lastname">DANDU<span className="hero-period">.</span></span></h1>
          <div className="hero-footline"><p>Computer Science Engineering<br />Full-stack development · AI / ML</p><span className="mono hero-index">BUILD LOG&nbsp; 2026</span></div>
          <p className="hero-description">I like turning ideas into working software — from full-stack applications to experiments with AI and machine learning.</p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">Explore selected work <FaArrowDown aria-hidden="true" /></a>
            <a href="https://www.canva.com/design/DAGVZJWvK1o/ebli4POOsND0NrXcUEmF8A/edit?utm_content=DAGVZJWvK1o&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" className="text-link" target="_blank" rel="noopener noreferrer">Resume <FaArrowRight aria-hidden="true" /></a>
          </div>
          <div className="hero-socials"><a href="https://github.com/Sathvik-Dandu" target="_blank" rel="noopener noreferrer"><FaGithub /> GitHub</a><a href="https://www.linkedin.com/in/sathvik-dandu/" target="_blank" rel="noopener noreferrer"><FaLinkedin /> LinkedIn</a><a href="mailto:dsathvik204@gmail.com"><FaEnvelope /> Email</a></div>
        </div>
        <aside className="hero-aside" aria-label="Profile details">
          <div className="portrait-frame"><img src={profileImage} alt="Sathvik Dandu" /><span className="portrait-stamp mono">SD / 01</span></div>
          <div className="aside-coordinate mono">17° 26′ N&nbsp; · &nbsp;78° 26′ E</div>
          <div className="hero-aside-note"><span className="mono">CURRENT FOCUS</span><strong>Build. Learn.<br />Repeat.</strong><span className="mono">JAVA · PYTHON · REACT</span></div>
        </aside>
      </div>
      <div className="hero-bottom container"><span className="mono">SCROLL TO EXPLORE</span><span className="hero-rule" /><span className="mono">01 — 07</span></div>
    </section>
    <section className="about-editorial section" aria-labelledby="about-heading">
      <div className="container about-grid">
        <div className="section-marker"><span className="mono">01 / PROFILE</span><span className="marker-line" /></div>
        <div><h2 id="about-heading" className="editorial-statement">I build software to make <em>useful ideas</em> work in the real world.</h2><p className="about-copy">I’m a Computer Science Engineering student interested in full-stack development, AI/ML, and solving practical problems with software. I’m happiest learning by building and refining projects one detail at a time.</p></div>
        <dl className="profile-facts"><div><dt className="mono">EDUCATION</dt><dd>B.Tech · Computer Science</dd></div><div><dt className="mono">LOCATION</dt><dd>Hyderabad, India</dd></div><div><dt className="mono">FOCUS</dt><dd>Full-stack · AI / ML</dd></div><div><dt className="mono">STATUS</dt><dd><span className="status-dot" /> Student / Developer</dd></div></dl>
      </div>
    </section>
  </>
);

export default About;
