import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaCode, FaLaptop, FaServer, FaMobile, FaDatabase } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: "CarbonCalc - CO₂ Emission Predictions",
      description: "🌱 CarbonCalc – Smarter CO₂ Emission Predictions Made Easy. CarbonCalc is an eco-conscious web application designed to help users analyze, predict, and visualize CO₂ emissions based on vehicle specifications.",
      technologies: ["Python", "Streamlit", "Machine Learning", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn"],
      image: "https://www.ecomatcher.com/wp-content/uploads/2020/09/Carbon-Footprint-copy.jpg",
      github: "https://github.com/Sathvik-Dandu/CarbonCalc",
      live: "https://carboncalc-ml.streamlit.app/",
      category: "machine-learning"
    },
    {
      id: 2,
      title: "CrushIt File Forge",
      description: "CrushIt File Forge is a smart file compression tool that reduces the size of all types of files without losing quality. Once compressed, it instantly generates a QR code so users can easily download and share the files on any other device.",
      technologies: ["React 18", "TypeScript", "Supabase", "Tailwind CSS", "shadcn/ui", "TanStack Query"],
      image: "https://repository-images.githubusercontent.com/285477529/64000a00-1bca-11eb-8abe-52d910158400",
      github: "https://github.com/Sathvik-Dandu/crushit-file-forge",
  
      live: "https://crushitt.netlify.app/",
      category: "fullstack"
    },
    {
      id: 3,
      title: "Task Management API",
      description: "A RESTful API for task management with user authentication, CRUD operations, and advanced filtering. Includes comprehensive documentation and automated testing.",
      technologies: ["Node.js", "Express", "PostgreSQL", "JWT", "Jest", "Swagger"],
      image: "https://via.placeholder.com/400x250/d29922/ffffff?text=Task+API",
      github: "#",
      live: "#",
      category: "backend"
    },
    {
      id: 4,
      title: "React Portfolio Website",
      description: "A responsive portfolio website built with React featuring dark/light mode, smooth scrolling, and modern design principles. Includes contact form and project showcase.",
      technologies: ["React", "CSS3", "React Icons", "Responsive Design", "Local Storage"],
      image: "https://via.placeholder.com/400x250/f85149/ffffff?text=Portfolio",
      github: "#",
      live: "#",
      category: "frontend"
    },
    {
      id: 5,
      title: "Weather Dashboard",
      description: "A weather application that displays current conditions and forecasts using OpenWeatherMap API. Features interactive charts, location-based weather, and responsive design.",
      technologies: ["JavaScript", "HTML5/CSS3", "Chart.js", "OpenWeatherMap API", "Geolocation"],
      image: "https://via.placeholder.com/400x250/6f42c1/ffffff?text=Weather+App",
      github: "#",
      live: "#",
      category: "frontend"
    },
    {
      id: 6,
      title: "Database Management System",
      description: "A content management system with user roles, rich text editor, and SEO optimization. Built with Django and PostgreSQL for robust backend functionality.",
      technologies: ["Django", "Python", "PostgreSQL", "Django REST", "Celery", "Redis"],
      image: "https://via.placeholder.com/400x250/1a7f37/ffffff?text=CMS",
      github: "#",
      live: "#",
      category: "backend"
    }
  ];

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'fullstack':
        return <FaCode />;
      case 'frontend':
        return <FaCode />;
      case 'backend':
        return <FaServer />;
      case 'mobile':
        return <FaMobile />;
      case 'machine-learning':
        return <FaDatabase />;
      default:
        return <FaCode />;
    }
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">Some of my recent development work and personal projects</p>
        
        <div className="projects-grid">
          {projectsData.map((project) => (
            <div key={project.id} className="project-card card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" title="View Code">
                      <FaGithub />
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer" title="Live Demo">
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
                <div className="project-category">
                  {getCategoryIcon(project.category)}
                  <span>{project.category}</span>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 