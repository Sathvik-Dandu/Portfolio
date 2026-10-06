import React from 'react';
import digitalConnectLogo from '../Images/Digital_Connect_Logo.png';

const Experience = () => (
  <section id="experience" className="section experience-section">
    <div className="container">
      <div className="section-heading"><p className="mono eyebrow">03 / EXPERIENCE</p><h2 className="section-title">Work in<br /><em>progress.</em></h2></div>
      <article className="experience-entry">
        <div className="experience-year mono">2024<span>—</span></div>
        <div className="experience-marker" aria-hidden="true"><i /></div>
        <div className="experience-details"><p className="mono experience-meta">APR 2024 — PRESENT <span>·</span> INDIA</p><h3>Digital Connect</h3><p className="experience-roles">Web Intern / Marketing Intern</p><p className="experience-copy">Student internship contributing to web development projects and supporting digital marketing initiatives, including content and website-related work.</p></div>
        <img className="experience-logo" src={digitalConnectLogo} alt="Digital Connect logo" />
      </article>
    </div>
  </section>
);

export default Experience;
