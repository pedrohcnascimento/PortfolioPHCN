import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import profileImage from "../../assets/Perfil.jpeg";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../translations/translations";

export default function Dashboard() {
  const [isVisible, setIsVisible] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    setIsVisible(true);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.15 }
    );

    const sections = document.querySelectorAll('section');
    sections.forEach((sec) => observer.observe(sec));

    return () => observer.disconnect();
  }, []);

  const skills = {
    languages: ['Java', 'MySQL', 'C++', 'Kotlin', 'Python'],
    frameworks: ['React', 'Vue/Vite', 'Spring Boot', 'JPA/Hibernate','FastAPI'],
    tools: ['Git/GitHub', 'Microsoft Copilot', 'IntelliJ', 'VSCode', 'Microsoft Office Suite', 'Power BI'],
    methodologies: ['Scrum','Model-View-Controller', 'Test Driven Development', 'Object-Oriented Programming','Clean Code Principles', 'Domain-Driven Design', 'APIs Rest'],
  };

  return (
    <div className={`dashboard ${isVisible ? 'visible' : ''}`}>

      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">{t.hero.title}</h1>
            <p className="hero-subtitle">{t.hero.subtitle}</p>
            <p className="hero-location">📍 {t.hero.location}</p>
          </div>
          <div className="hero-image">
            <img
              src={profileImage}
              alt="Pedro Henrique Carvalho"
              className="profile-image"
            />
        </div>
        </div>
        <div className="scroll-indicator">
          <span>{t.hero.scroll}</span>
          <div className="arrow">↓</div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="content-section about-section">
        <div className="section-header">
          <h2>{t.about.title}</h2>
          <div className="section-divider"></div>
        </div>
        <div className="about-content">
          <p className="about-text">{t.about.text1}</p>
          <p className="about-text">{t.about.text2}</p>
          <div className="interests-section">
            <h3>{t.about.interestsTitle}</h3>
            <p>{t.about.interestsText}</p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="content-section experience-section">
        <div className="section-header">
          <h2>{t.experience.title}</h2>
          <div className="section-divider"></div>
        </div>
        <div className="experience-grid">
          {t.experience.items.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="experience-header">
                <h3>{exp.title}</h3>
                <span className={`experience-type ${exp.type}`}>{exp.type}</span>
              </div>
              <div className="experience-meta">
                <span className="company">{exp.company}</span>
                <span className="period">{exp.period}</span>
              </div>
              <p className="experience-description">{exp.description}</p>
              <div className="experience-tech">
                {(exp.technologies || []).map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="experience-links">
                {exp.link && (
                  <a href={exp.link} target="_blank" rel="noopener noreferrer" className="experience-link">
                    {t.experience.viewProject}
                  </a>
                )}
                {exp.links && (
                  <div className="project-links">
                    {exp.links.backend && (
                      <a href={exp.links.backend} target="_blank" rel="noopener noreferrer" className="experience-link">
                        {t.experience.backend}
                      </a>
                    )}
                    {exp.links.frontend && (
                      <a href={exp.links.frontend} target="_blank" rel="noopener noreferrer" className="experience-link">
                        {t.experience.frontend}
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="content-section skills-section">
        <div className="section-header">
          <h2>{t.skills.title}</h2>
          <div className="section-divider"></div>
        </div>
        <div className="skills-grid">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="skill-category">
              <h3>{t.skills[category]}</h3>
              <div className="skill-tags">
                {skillList.map((skill, idx) => <span key={idx} className="skill-tag">{skill}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="content-section education-section">
        <div className="section-header">
          <h2>{t.education.title}</h2>
          <div className="section-divider"></div>
        </div>
        <div className="education-grid">
          {t.education.items.map((edu, index) => (
            <div key={index} className="education-card">
              <div className="education-header">
                <h3>{edu.title}</h3>
                <span className={`education-status ${edu.status.toLowerCase()}`}>{edu.status}</span>
              </div>
              <div className="education-meta">
                <span className="institution">{edu.institution}</span>
                <span className="period">{edu.period}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="content-section projects-section">
        <div className="section-header">
          <h2>{t.projects.title}</h2>
          <div className="section-divider"></div>
        </div>
        <div className="projects-grid">
          {t.projects.items.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <h3>{project.title}</h3>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {(project.technologies || []).map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                {t.projects.viewGithub}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="content-section contact-section">
        <div className="section-header">
          <h2>{t.contact.title}</h2>
          <div className="section-divider"></div>
        </div>
        <div className="contact-grid">
          <div className="contact-item">
            <div className="contact-icon">📧</div>
            <div className="contact-info">
              <h3>Email</h3>
              <a href="mailto:pedrohenrique.cn07@gmail.com">pedrohenrique.cn07@gmail.com</a>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon">💼</div>
            <div className="contact-info">
              <h3>LinkedIn</h3>
              <a href="https://www.linkedin.com/in/pedrohenriquecn07/" target="_blank" rel="noopener noreferrer">Pedro H.</a>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon">💻</div>
            <div className="contact-info">
              <h3>GitHub</h3>
              <a href="https://github.com/pedrohcnascimento" target="_blank" rel="noopener noreferrer">pedrohcnascimento</a>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon">📍</div>
            <div className="contact-info">
              <h3>{t.contact.location}</h3>
              <span>São Paulo, Brazil</span>
            </div>
          </div>
          <div className="contact-item resume-download">
            <div className="contact-icon">📄</div>
            <div className="contact-info">
              <h3>{t.contact.resume}</h3>
              <a 
                href={language === 'en' ? '/PedroCVEnglish.pdf' : '/PedroCV.pdf'} 
                download={language === 'en' ? 'Pedro_Carvalho_Resume.pdf' : 'Pedro_Carvalho_Curriculo.pdf'}
              >
                {t.contact.download}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}