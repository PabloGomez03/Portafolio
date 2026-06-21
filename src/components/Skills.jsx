import { FiCode, FiLayers, FiSettings, FiBookOpen } from 'react-icons/fi';
import { skills } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';
import './Skills.css';

const categoryIcons = {
  languages: <FiCode />,
  frameworks: <FiLayers />,
  devops: <FiSettings />,
  theory: <FiBookOpen />,
};

export default function Skills() {
  const [ref, isVisible] = useInView();

  return (
    <section className="section skills" id="skills" ref={ref}>
      <h2 className={`section-title animate-in ${isVisible ? 'visible' : ''}`}>
        <span className="gradient-text">Skills</span>
      </h2>
      <p className={`section-subtitle animate-in ${isVisible ? 'visible' : ''}`}>
        Technologies and knowledge I work with
      </p>

      <div className="skills-grid stagger-children">
        {Object.entries(skills).map(([key, category]) => (
          <div
            key={key}
            className={`skill-category animate-in ${isVisible ? 'visible' : ''}`}
          >
            <div className="skill-category-icon">{categoryIcons[key]}</div>
            <h3 className="skill-category-title">{category.title}</h3>
            <div className="skill-tags">
              {category.items.map((item) => (
                <span key={item} className="skill-tag">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
