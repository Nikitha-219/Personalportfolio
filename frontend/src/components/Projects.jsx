import React, { useState, useEffect } from 'react';
import { ExternalLink, Layers, Code, Server } from 'lucide-react';
import { projectService } from '../services/api';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await projectService.getAll();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setProjects([
          {
            id: 1,
            title: "AureLoom Handloom Platform",
            description: "A premium e-commerce full-stack application connecting customers directly with local handloom artisans. Features a rich glassmorphism UI, search & filter, cart service, interactive reviews, and a secure seller/artisan dashboard.",
            technologies: "React, Spring Boot, Spring Security, JWT, MySQL",
            imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600",
            githubUrl: "https://github.com/Nikitha-219/AureLoom",
            liveUrl: "https://aureloom-handloom.vercel.app",
            category: "Fullstack",
            displayOrder: 1
          },
          {
            id: 2,
            title: "Blog Space",
            description: "A modern full-stack blogging platform where users can create, publish, and explore rich blog posts. Features user authentication, markdown-powered editor, comment system, category filtering, and a clean responsive reader experience.",
            technologies: "React, Spring Boot, Spring Security, JWT, MySQL",
            imageUrl: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=600",
            githubUrl: "https://github.com/Nikitha-219/blog-space",
            liveUrl: "",
            category: "Fullstack",
            displayOrder: 2
          },
          {
            id: 3,
            title: "Interactive Weather Dashboard",
            description: "A beautifully designed weather forecasting app presenting detailed atmospheric metrics. Features auto-locating, visual charts tracking daily temperature trends, and real-time alerts using high-performance animations.",
            technologies: "React.js, Tailwind CSS, OpenWeather API, Chart.js",
            imageUrl: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=600",
            githubUrl: "https://github.com/admin/weather-dashboard",
            liveUrl: "https://weather-forecast-live.netlify.app",
            category: "Frontend",
            displayOrder: 3
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const filters = ['All', 'Fullstack', 'Frontend', 'Backend'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category.toLowerCase() === activeFilter.toLowerCase());

  const getCategoryIcon = (category) => {
    switch (category.toLowerCase()) {
      case 'frontend': return <Code size={14} />;
      case 'backend': return <Server size={14} />;
      default: return <Layers size={14} />;
    }
  };

  return (
    <section id="projects" className="section-padding" style={{ background: 'linear-gradient(to bottom, #0D111A, #080B10)' }}>
      <div className="container">

        {/* Title */}
        <div className="section-title-wrapper">
          <h2 className="section-title">My Projects</h2>
          <div className="section-title-line"></div>
        </div>

        {/* Filter Pills */}
        <div className="projects-filter-bar">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`filter-pill ${activeFilter === filter ? 'active' : ''}`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        {loading ? (
          <div style={{ textAlign: 'center', color: 'var(--text-muted)', padding: '48px 0' }}>Loading portfolio projects...</div>
        ) : filteredProjects.length > 0 ? (
          <div className="grid-3">
            {filteredProjects.map((project) => (
              <div key={project.id} className="project-card">
                
                {/* Visual Image container */}
                <div className="project-image-wrapper">
                  <img 
                    src={project.imageUrl || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600'} 
                    alt={project.title}
                    className="project-image"
                    loading="lazy"
                  />
                  {/* Category overlay */}
                  <span className="project-category-tag">
                    {getCategoryIcon(project.category)}
                    {project.category}
                  </span>
                </div>

                {/* Content */}
                <div className="project-info">
                  <h3 className="project-card-title">{project.title}</h3>
                  <p className="project-card-desc">{project.description}</p>
                  
                  {/* Tech tag list */}
                  <div className="project-tech-tags">
                    {project.technologies.split(',').map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech.trim()}
                      </span>
                    ))}
                  </div>

                  {/* Actions links out */}
                  <div className="project-links">
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link-button"
                      >
                        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg> Source Code
                      </a>
                    )}
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link-button accent"
                      >
                        <ExternalLink size={16} /> Live Demo
                      </a>
                    )}
                  </div>
                </div>

              </div>
            ))}
          </div>
        ) : (
          <div className="glass-panel" style={{ textAlign: 'center', maxWidth: '480px', margin: '0 auto', padding: '64px 32px' }}>
            <p style={{ color: 'var(--text-muted)', fontStyle: 'italic' }}>No projects found in this category.</p>
          </div>
        )}

      </div>
    </section>
  );
};

export default Projects;
