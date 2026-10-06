import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const certifications = [
  { issuer: 'SALESFORCE', title: 'Agentforce Specialist' },
  { issuer: 'CISCO NETWORKING ACADEMY', title: 'Python Essentials 1', href: 'https://drive.google.com/file/d/14qV3GFa7x49zMlq_glrumKiEfHz5qDdL/view?usp=drive_link' },
  { issuer: 'CISCO NETWORKING ACADEMY', title: 'Python Essentials 2', href: 'https://drive.google.com/file/d/1sgGRHwOKmzPI6mw79Af8dZTOySsOPLtZ/view?usp=sharing' },
  { issuer: 'NPTEL', title: 'Programming in Java', href: 'https://drive.google.com/file/d/1rOtWWyNIq0RVM0PmCZTUfFpM7BP3r7o3/view?usp=sharing' },
  { issuer: 'COURSERA', title: 'Python Data Structures', href: 'https://drive.google.com/file/d/1jzq6KseZ8bixUOx7_mK4CYKwvTSScVWe/view?usp=sharing' },
  { issuer: 'COURSERA', title: 'Programming Fundamentals', href: 'https://drive.google.com/file/d/1-wspQob8zoYz-2cnwyzcj6hZAe5ONG8G/view?usp=sharing' }
];

const Certificates = () => (
  <section id="certificates" className="section certificates-section">
    <div className="container certificates-layout">
      <div className="section-heading"><p className="mono eyebrow">06 / CREDENTIALS</p><h2 className="section-title">Learning<br /><em>keeps going.</em></h2></div>
      <div className="certificate-list">{certifications.map((cert, index) => <article className="credential-row" key={cert.title}><span className="mono credential-number">{String(index + 1).padStart(2, '0')}</span><div><p className="mono credential-issuer">{cert.issuer}</p><h3>{cert.title}</h3></div>{cert.href ? <a href={cert.href} target="_blank" rel="noopener noreferrer" aria-label={`View ${cert.title} credential`}><FaExternalLinkAlt /></a> : <span className="credential-note mono">CERTIFICATE</span>}</article>)}</div>
    </div>
  </section>
);

export default Certificates;
