import React, { useState, useEffect } from 'react';
import './Dashboard.css';

export default function Dashboard() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('visible', entry.isIntersecting);
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

  const experiences = [
    {
      type: 'professional',
      title: 'Project Aurora',
      company: 'Freelance (Data Curve.ai)',
      period: 'August 2025 - October 2025',
      description: 'Freelance project using Python to create real-world software development problems and solutions. An AI system would attempt to solve these problems 10 times, with a target success rate of at most 30%. Each properly executed problem was saved in the company\'s database and later sold to other companies interested in training or improving their AIs.',
      technologies: ['Python'],
      link: 'https://github.com/pedrohcnascimento/ProjectAurora'
    },
    {
      type: 'academic',
      title: 'Inpark',
      company: 'SENAI Technical Course Project',
      period: 'July 2025 - Present',
      description: 'Final technical course project with 6 members. Our solution operates on two fronts: simplifying the daily routine of drivers looking for parking quickly and with reliable information, and driving the growth and digitalization of local parking facilities. I was responsible for the project idea, team organization, and development of tests (both back-end and front-end).',
      technologies: ['React', 'Spring Boot', 'JavaScript', 'Java'],
      links: {
        backend: 'https://github.com/Arthur2060/Inpark-backend',
        frontend: 'https://github.com/DiegoGenuino/frontend-inpark'
      }
    }
  ];

  const education = [
    {
      title: 'Analysis and Software Development',
      institution: 'FIAP',
      period: 'Expected completion: December 2027',
      status: 'In-Progress'
    },
    {
      title: 'Technical Course in Software Development',
      institution: 'SENAI Anchieta School',
      period: 'Completed: December 2025',
      status: 'Completed'
    },
    {
      title: 'Fluent English',
      institution: 'EF Education First',
      period: 'Completed: November 2024',
      status: 'Completed'
    }
  ];

  const projects = [
    {
      title: 'Project Aurora',
      description: 'Exercises for AI training databases',
      link: 'https://github.com/pedrohcnascimento/ProjectAurora',
      technologies: ['Python']
    },
    {
      title: 'Inpark Backend',
      description: 'Backend for a parking management system',
      link: 'https://github.com/Arthur2060/Inpark-backend',
      technologies: ['Java', 'Spring Boot']
    },
    {
      title: 'Inpark Frontend',
      description: 'Frontend for a parking management system',
      link: 'https://github.com/DiegoGenuino/frontend-inpark',
      technologies: ['React', 'JavaScript']
    }
  ];

  return (
    <div className={`dashboard ${isVisible ? 'visible' : ''}`}>
      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Pedro Henrique Carvalho do Nascimento</h1>
            <p className="hero-subtitle">Full-Stack Developer & Systems Development Student</p>
            <p className="hero-location">📍 São Paulo, Brazil</p>
          </div>
          <div className="hero-image">
            <div className="profile-placeholder">
              <span>PHCN</span>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <span>Scroll Down</span>
          <div className="arrow">↓</div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="content-section about-section">
        <div className="section-header">
          <h2>About Me</h2>
          <div className="section-divider"></div>
        </div>
        <div className="about-content">
          <p className="about-text">
            I am a dedicated and enthusiastic young professional currently pursuing a technical degree in Systems Development.
            I am fluent in English and have strong knowledge of full-stack programming. Additionally, I have hands-on experience
            with version control using Git/GitHub and familiarity with Microsoft Copilot, as well as programming tools such as
            IntelliJ and VSCode.
          </p>
          <p className="about-text">
            I am seeking my first professional opportunity to apply my quick learning ability and passion for technology.
          </p>
          <div className="interests-section">
            <h3>Interests</h3>
            <p>🎵 Passionate about music (studying music theory and singing), demonstrating dedication and discipline.</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="content-section skills-section">
        <div className="section-header">
          <h2>Technical Skills</h2>
          <div className="section-divider"></div>
        </div>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Programming Languages</h3>
            <div className="skill-tags">
              {skills.languages.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
          <div className="skill-category">
            <h3>Frameworks & Libraries</h3>
            <div className="skill-tags">
              {skills.frameworks.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
          <div className="skill-category">
            <h3>Tools & Technologies</h3>
            <div className="skill-tags">
              {skills.tools.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
          <div className="skill-category">
            <h3>Agile Methodologies</h3>
            <div className="skill-tags">
              {skills.methodologies.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
          <div className="skill-category">
            <h3>Core Concepts</h3>
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
          <h2>Experience</h2>
          <div className="section-divider"></div>
        </div>
        <div className="experience-grid">
          {experiences.map((exp, index) => (
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
                {exp.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="experience-links">
                {exp.link && (
                  <a href={exp.link} target="_blank" rel="noopener noreferrer" className="experience-link">
                    View Project →
                  </a>
                )}
                {exp.links && (
                  <div className="project-links">
                    <a href={exp.links.backend} target="_blank" rel="noopener noreferrer" className="experience-link">
                      Backend →
                    </a>
                    <a href={exp.links.frontend} target="_blank" rel="noopener noreferrer" className="experience-link">
                      Frontend →
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
          <h2>Education & Courses</h2>
          <div className="section-divider"></div>
        </div>
        <div className="education-grid">
          {education.map((edu, index) => (
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
          <h2>Projects</h2>
          <div className="section-divider"></div>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <h3>{project.title}</h3>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="content-section contact-section">
        <div className="section-header">
          <h2>Contact Information</h2>
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
              <a href="https://linkedin.com/in/pedrohcnascimento" target="_blank" rel="noopener noreferrer">Pedro H.</a>
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
              <h3>Location</h3>
              <span>São Paulo, Brazil</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
