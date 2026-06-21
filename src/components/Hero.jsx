import { FiGithub, FiLinkedin, FiArrowDown } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';
import './Hero.css';

export default function Hero() {
  const scrollTo = (target) => {
    const el = document.getElementById(target);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="hero">
      {/* Animated background */}
      <div className="hero-bg">
        <div className="hero-bg-orb"></div>
        <div className="hero-bg-orb"></div>
        <div className="hero-bg-orb"></div>
      </div>
      <div className="hero-grid"></div>

      <div className="hero-content">
        <span className="hero-greeting">Hola, soy</span>
        <h1 className="hero-name">
          <span className="highlight">{personalInfo.name}</span>
        </h1>
        <p className="hero-title">{personalInfo.title} · {personalInfo.location}</p>

        <div className="hero-actions">
          <button className="hero-btn hero-btn-primary" onClick={() => scrollTo('projects')}>
            Ver Proyectos
            <FiArrowDown />
          </button>
          <button className="hero-btn hero-btn-secondary" onClick={() => scrollTo('contact')}>
            Contacto
          </button>
        </div>

        <div className="hero-social">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-social-link"
            aria-label="GitHub"
          >
            <FiGithub />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-social-link"
            aria-label="LinkedIn"
          >
            <FiLinkedin />
          </a>
        </div>
      </div>

      <div className="hero-scroll">
        <span className="hero-scroll-text">Scroll</span>
        <div className="hero-scroll-line"></div>
      </div>
    </section>
  );
}
