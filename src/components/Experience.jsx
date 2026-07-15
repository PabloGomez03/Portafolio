import { experience } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';
import './Experience.css';

export default function Experience() {
  const [ref, isVisible] = useInView();

  return (
    <section className="section experience" id="experience" ref={ref}>
      <h2 className={`section-title animate-in ${isVisible ? 'visible' : ''}`}>
        <span className="gradient-text">Work Experience</span>
      </h2>
      <p className={`section-subtitle animate-in ${isVisible ? 'visible' : ''}`}>
        My professional career and work history
      </p>

      <div className={`experience-content animate-in ${isVisible ? 'visible' : ''}`}>
        <div className="experience-timeline">
          {experience.map((exp, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-dot"></div>
              <span className="timeline-date">{exp.period}</span>
              <h3 className="timeline-title">{exp.role}</h3>
              <span className="timeline-company">{exp.company}</span>
              {exp.location && <p className="timeline-location">{exp.location}</p>}
              {exp.description && <p className="timeline-desc">{exp.description}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
