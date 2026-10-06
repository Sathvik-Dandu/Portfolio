import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import crushItImage from '../Images/Crushit.png';

const projects = [
  { title: 'CertiChain', kind: 'BLOCKCHAIN / VERIFICATION', summary: 'A certificate verification system combining blockchain, IPFS and SHA-256 hashing, with AI-assisted fraud detection.', technologies: ['Ethereum', 'IPFS', 'SHA-256', 'AI-assisted detection'], github: 'https://github.com/Sathvik-Dandu/Certichain', live: 'https://certiichain.vercel.app/', glyph: 'CERT / 01' },
  { title: 'CrushIt File Forge', kind: 'FULL STACK / UTILITIES', summary: 'A file compression tool that generates a QR code to make sharing compressed files between devices easier.', technologies: ['React', 'TypeScript', 'Supabase', 'Tailwind CSS'], github: 'https://github.com/Sathvik-Dandu/crushit-file-forge', live: 'https://crushitt.netlify.app/', image: crushItImage, glyph: 'FILE / QR' },
  { title: 'CarbonCalc', kind: 'DATA / VISUALIZATION', summary: 'A Python application for analyzing and visualizing estimated vehicle emissions from vehicle specifications.', technologies: ['Python', 'Streamlit', 'Pandas', 'Scikit-learn'], github: 'https://github.com/Sathvik-Dandu/CarbonCalc', live: 'https://carboncalc-ml.streamlit.app/', glyph: 'CO₂ / DATA' }
];

const ProjectVisual = ({ project, index, total }) => (
  <div className={`project-visual visual-${index + 1}`} role="img" aria-label={`${project.title} abstract visual`}>
    {project.image ? <img className="project-screenshot" src={project.image} alt="CrushIt File Forge preview" /> : <>
      <div className="visual-topbar"><span className="visual-controls"><i /><i /><i /></span><span className="mono">SATHVIK / LAB_{String(index + 1).padStart(2, '0')}</span><span className="visual-status">●</span></div>
      <div className="visual-canvas"><div className="visual-crosshair" aria-hidden="true">+</div><span className="visual-glyph mono">{project.glyph}</span><span className="visual-caption mono">FIELD NOTE&nbsp; / &nbsp;{String(index + 1).padStart(2, '0')}</span><div className="visual-lines"><i /><i /><i /></div></div>
    </>}
    <span className="project-index mono">{String(index + 1).padStart(2, '0')} <b>/ {String(total).padStart(2, '0')}</b></span>
  </div>
);

const Projects = () => (
  <section id="projects" className="section projects-section">
    <div className="container">
      <div className="projects-heading"><div><p className="mono eyebrow">02 / SELECTED WORK</p><h2 className="section-title">Built to<br /><em>be useful.</em></h2></div><p className="projects-intro">A growing collection of software projects, experiments, and practical tools.</p></div>
      <div className="projects-list">
        {projects.map((project, index) => (
          <article key={project.title} className={`project-showcase ${index % 2 ? 'project-reverse' : ''}`}>
            <ProjectVisual project={project} index={index} total={projects.length} />
            <div className="project-content">
              <p className="mono project-kind">{project.kind}</p>
              <h3 className="project-title">{project.title}<span className="project-title-arrow"><FaExternalLinkAlt /></span></h3>
              <p className="project-description">{project.summary}</p>
              <ul className="project-technologies" aria-label={`${project.title} technologies`}>{project.technologies.map((tech) => <li key={tech}>{tech}</li>)}</ul>
              {(project.github || project.live) && <div className="project-links">
                {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer"><FaGithub aria-hidden="true" /> GitHub</a>}
                {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt aria-hidden="true" /> Live demo</a>}
              </div>}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
