import { FiFolder, FiStar, FiCode } from 'react-icons/fi';
import { projects } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';
import './Projects.css';

export default function Projects() {
  const [ref, isVisible] = useInView();

  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section className="section projects" id="projects" ref={ref}>
      <h2 className={`section-title animate-in ${isVisible ? 'visible' : ''}`}>
        <span className="gradient-text">Projects</span>
      </h2>
      <p className={`section-subtitle animate-in ${isVisible ? 'visible' : ''}`}>
        A selection of my most notable work
      </p>

      {/* Featured Projects */}
      <div className="project-featured stagger-children">
        {featured.map((project, index) => (
          <div
            key={index}
            className={`project-featured-card animate-in ${isVisible ? 'visible' : ''}`}
          >
            <div className="project-featured-info">
              <span className="project-featured-badge">
                <FiStar /> Featured
              </span>
              <h3 className="project-featured-title">{project.title}</h3>
              <p className="project-featured-subtitle">{project.subtitle}</p>
              <p className="project-featured-desc">{project.description}</p>
              <div className="project-card-tech">
                {project.tech.map((t) => (
                  <span key={t} className="project-tech-tag">{t}</span>
                ))}
              </div>
            </div>
            <div className="project-featured-visual">
              <div className="project-code-lines">
                <div className="project-code-line"></div>
                <div className="project-code-line"></div>
                <div className="project-code-line"></div>
                <div className="project-code-line"></div>
                <div className="project-code-line"></div>
              </div>
              <FiCode className="project-featured-visual-icon" />
            </div>
          </div>
        ))}
      </div>

      {/* Other Projects Grid */}
      <div className="projects-grid stagger-children">
        {others.map((project, index) => (
          <div
            key={index}
            className={`project-card animate-in ${isVisible ? 'visible' : ''}`}
          >
            <div className="project-card-header">
              <FiFolder className="project-card-icon" />
              <span className="project-card-date">{project.date}</span>
            </div>
            <h3 className="project-card-title">{project.title}</h3>
            <p className="project-card-subtitle">{project.subtitle}</p>
            <p className="project-card-desc">{project.description}</p>
            <div className="project-card-tech">
              {project.tech.map((t) => (
                <span key={t} className="project-tech-tag">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
