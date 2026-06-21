import { FiAward, FiGlobe } from 'react-icons/fi';
import { education, certifications, languages } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';
import './Education.css';

export default function Education() {
  const [ref, isVisible] = useInView();

  return (
    <section className="section education" id="education" ref={ref}>
      <h2 className={`section-title animate-in ${isVisible ? 'visible' : ''}`}>
        <span className="gradient-text">Educación</span>
      </h2>
      <p className={`section-subtitle animate-in ${isVisible ? 'visible' : ''}`}>
        Mi formación académica y certificaciones
      </p>

      <div className={`education-content animate-in ${isVisible ? 'visible' : ''}`}>
        {/* Timeline */}
        <div className="education-timeline">
          {education.map((edu, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-dot"></div>
              <span className="timeline-date">{edu.period}</span>
              <h3 className="timeline-title">{edu.degree}</h3>
              <p className="timeline-institution">{edu.institution}</p>
              <p className="timeline-location">{edu.location}</p>
              {edu.description && (
                <p className="timeline-desc">{edu.description}</p>
              )}
            </div>
          ))}
        </div>

        {/* Certifications & Languages */}
        <div className="certifications-section">
          <h3 className="certifications-title">
            <FiAward className="certifications-title-icon" />
            Certificaciones
          </h3>

          {certifications.map((cert, index) => (
            <div className="cert-card" key={index}>
              <div className="cert-icon">
                <FiAward />
              </div>
              <div className="cert-info">
                <span className="cert-name">{cert.name}</span>
                <span className="cert-issuer">{cert.issuer}</span>
              </div>
            </div>
          ))}

          {/* Languages */}
          <div className="languages-section">
            <h3 className="languages-title">
              <FiGlobe className="languages-title-icon" />
              Idiomas
            </h3>
            <div className="language-bars">
              {languages.map((lang) => (
                <div className="language-item" key={lang.name}>
                  <div className="language-header">
                    <span className="language-name">{lang.name}</span>
                    <span className="language-level">{lang.level}</span>
                  </div>
                  <div className="language-bar">
                    <div
                      className="language-bar-fill"
                      style={{ width: isVisible ? `${lang.percentage}%` : '0%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
