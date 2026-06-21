import { FiMail, FiPhone, FiLinkedin, FiGithub } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';
import './Contact.css';

export default function Contact() {
  const [ref, isVisible] = useInView();

  const methods = [
    {
      icon: <FiMail />,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: <FiPhone />,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone.replace(/\s/g, '')}`,
    },
    {
      icon: <FiLinkedin />,
      label: 'LinkedIn',
      value: 'Pablo Gómez Arroyo',
      href: personalInfo.linkedin,
    },
    {
      icon: <FiGithub />,
      label: 'GitHub',
      value: 'PabloGomez03',
      href: personalInfo.github,
    },
  ];

  return (
    <section className="section contact" id="contact" ref={ref}>
      <h2 className={`section-title animate-in ${isVisible ? 'visible' : ''}`}>
        <span className="gradient-text">Contact</span>
      </h2>
      <p className={`section-subtitle animate-in ${isVisible ? 'visible' : ''}`}>
        Have a project in mind? Let's talk!
      </p>

      <div className={`contact-wrapper contact-wrapper--centered animate-in ${isVisible ? 'visible' : ''}`}>
        <div className="contact-info">
          <p className="contact-text">
            I'm open to new opportunities and collaborations. Feel free to reach out
            through any of these channels.
          </p>

          <div className="contact-methods">
            {methods.map((method, index) => (
              <a
                key={index}
                className="contact-method"
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                <div className="contact-method-icon">{method.icon}</div>
                <div className="contact-method-details">
                  <span className="contact-method-label">{method.label}</span>
                  <span className="contact-method-value">{method.value}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p className="footer-text">
          © 2026 <span className="gradient-text">{personalInfo.name}</span>. All rights reserved.
        </p>
        <div className="footer-links">
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="footer-link" aria-label="GitHub">
            <FiGithub />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="footer-link" aria-label="LinkedIn">
            <FiLinkedin />
          </a>
          <a href={`mailto:${personalInfo.email}`} className="footer-link" aria-label="Email">
            <FiMail />
          </a>
        </div>
      </footer>
    </section>
  );
}

