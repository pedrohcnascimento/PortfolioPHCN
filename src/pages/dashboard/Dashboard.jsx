import React, { useState, useEffect } from 'react';
import './Dashboard.css';
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
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    const sections = document.querySelectorAll('section');
    sections.forEach((sec) => observer.observe(sec));

    return () => observer.disconnect();
  }, []);

  const skills = {
    languages: ['Java', 'HTML', 'CSS', 'JavaScript', 'MySQL', 'C++', 'Kotlin', 'Python'],
    frameworks: ['React', 'Vue/Vite', 'Spring Boot'],
    tools: ['Git/GitHub', 'Microsoft Copilot', 'IntelliJ', 'VSCode', 'Microsoft Office Suite', 'Power BI'],
    methodologies: ['Scrum'],
    concepts: ['Back-end Development', 'Front-end Development', 'Digital Environment Routines']
  };

  const experiences = [ { technologies: ['React', 'Spring Boot', 'JavaScript', 'Java'], links: { backend: 'https://github.com/Arthur2060/Inpark-backend', frontend: 'https://github.com/DiegoGenuino/frontend-inpark' } } ];

  const projects = [
    {
      link: 'https://github.com/pedrohcnascimento/ProjectAurora',
      technologies: ['Python']
    },
    {
      link: 'https://github.com/Arthur2060/Inpark-backend',
      technologies: ['Java', 'Spring Boot']
    },
    {
      link: 'https://github.com/DiegoGenuino/frontend-inpark',
      technologies: ['React', 'JavaScript']
    }
  ];

  const education = [];

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
            <div className="profile-placeholder">
              <span>PHCN</span>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <span>{t.hero.scroll} </span>
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
          <p className="about-text">
            {t.about.text1}
          </p>
          <p className="about-text">
            {t.about.text2}
          </p>
          <div className="interests-section">
            <h3>{t.about.interestsTitle}</h3>
            <p>{t.about.interestsText}</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="content-section skills-section">
        <div className="section-header">
          <h2>{t.skills.title}</h2>
          <div className="section-divider"></div>
        </div>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>{t.skills.languages}</h3>
            <div className="skill-tags">
              {skills.languages.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
          <div className="skill-category">
            <h3>{t.skills.frameworks}</h3>
            <div className="skill-tags">
              {skills.frameworks.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
          <div className="skill-category">
            <h3>{t.skills.tools}</h3>
            <div className="skill-tags">
              {skills.tools.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
          <div className="skill-category">
            <h3>{t.skills.methodologies}</h3>
            <div className="skill-tags">
              {skills.methodologies.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
          <div className="skill-category">
            <h3>{t.skills.concepts}</h3>
            <div className="skill-tags">
              {skills.concepts.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
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
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="experience-header">
                <h3>{t.experience.items[index].title}</h3>
                <span className={`experience-type ${t.experience.items[index].type}`}>{t.experience.items[index].type}</span>
              </div>
              <div className="experience-meta">
                <span className="company">{t.experience.items[index].company}</span>
                <span className="period">{t.experience.items[index].period}</span>
              </div>
              <p className="experience-description">{t.experience.items[index].description}</p>
              <div className="experience-tech">
                {exp.technologies.map((tech, techIndex) => (
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
                    <a href={exp.links.backend} target="_blank" rel="noopener noreferrer" className="experience-link">
                      {t.experience.backend}
                    </a>
                    <a href={exp.links.frontend} target="_blank" rel="noopener noreferrer" className="experience-link">
                      {t.experience.frontend}
                    </a>
                  </div>
                )}
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
          {education.map((edu, index) => (
            <div key={index} className="education-card">
              <div className="education-header">
                <h3>{t.education.items[index].title}</h3>
                <span className={`education-status ${t.education.items[index].status.toLowerCase()}`}>{t.education.items[index].status}</span>
              </div>
              <div className="education-meta">
                <span className="institution">{t.education.items[index].institution}</span>
                <span className="period">{t.education.items[index].period}</span>
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
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <h3>{t.projects.items[index].title}</h3>
              </div>
              <p className="project-description">{t.projects.items[index].description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, techIndex) => (
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
        </div>
      </section>
    </div>
  );
}
