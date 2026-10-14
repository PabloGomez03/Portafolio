import { FiMapPin, FiCalendar } from 'react-icons/fi';
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
          {experience.map((exp, index) => {
            const isCurrent = exp.period && exp.period.toLowerCase().includes('present');

            return (
              <div
                className={`timeline-item ${isCurrent ? 'timeline-item-current' : ''}`}
                key={index}
              >
                <div className="timeline-dot"></div>

                <div className="timeline-meta">
                  <span className="timeline-date">
                    <FiCalendar className="timeline-meta-icon" />
                    {exp.period}
                  </span>
                  {isCurrent && <span className="timeline-current-badge">Current Role</span>}
                </div>

                <h3 className="timeline-title">{exp.role}</h3>

                <div className="timeline-company-bar">
                  <span className="timeline-company">{exp.company}</span>
                  {exp.employmentType && (
                    <span className="timeline-type-badge">{exp.employmentType}</span>
                  )}
                  {exp.location && (
                    <span className="timeline-location">
                      <FiMapPin className="timeline-location-icon" />
                      {exp.location}
                    </span>
                  )}
                </div>

                <div className="timeline-card">
                  {exp.description && (
                    <p className="timeline-intro">{exp.description}</p>
                  )}

                  {exp.responsibilities && exp.responsibilities.length > 0 && (
                    <ul className="timeline-responsibilities">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="timeline-resp-item">
                          <span className="timeline-resp-bullet">▹</span>
                          <div className="timeline-resp-content">
                            {resp.label && (
                              <strong className="timeline-resp-label">{resp.label}: </strong>
                            )}
                            <span className="timeline-resp-text">{resp.text}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}

                  {exp.technologies && exp.technologies.length > 0 && (
                    <div className="timeline-tech-tags">
                      {exp.technologies.map((t) => (
                        <span key={t} className="timeline-tech-tag">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
