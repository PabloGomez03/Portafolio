import { FiMapPin, FiMail, FiPhone, FiGithub } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';
import profileImg from '../assets/profile.jpeg';
import './About.css';

export default function About() {
  const [ref, isVisible] = useInView();

  const details = [
    { icon: <FiMapPin />, label: 'Location', value: personalInfo.location },
    { icon: <FiMail />, label: 'Email', value: personalInfo.email },
    { icon: <FiPhone />, label: 'Phone', value: personalInfo.phone },
    { icon: <FiGithub />, label: 'GitHub', value: 'PabloGomez03' },
  ];

  return (
    <section className="section about" id="about" ref={ref}>
      <h2 className={`section-title animate-in ${isVisible ? 'visible' : ''}`}>
        <span className="gradient-text">About Me</span>
      </h2>
      <p className={`section-subtitle animate-in ${isVisible ? 'visible' : ''}`}>
        Get to know me a little better
      </p>

      <div className={`about-wrapper animate-in ${isVisible ? 'visible' : ''}`}>
        <div className="about-avatar-wrapper">
          <img src={profileImg} alt="Pablo Gómez Arroyo" className="about-avatar" />
        </div>

        <div className="about-info">
          <p className="about-text">{personalInfo.bio}</p>

          <div className="about-details">
            {details.map((detail, index) => (
              <div className="about-detail" key={index}>
                <span className="about-detail-icon">{detail.icon}</span>
                <div className="about-detail-content">
                  <span className="about-detail-label">{detail.label}</span>
                  <span className="about-detail-value">{detail.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
