import React, { useState, useEffect } from 'react';
import './MenuHamburguer.css';
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../translations/translations";

const MenuHamburguer = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuClosing, setIsMenuClosing] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { language } = useLanguage();
  const t = translations[language];

  const navItems = [
    { id: 'hero', label: t.menu.home },
    { id: 'about', label: t.menu.about },
    { id: 'skills', label: t.menu.skills },
    { id: 'experience', label: t.menu.experience },
    { id: 'education', label: t.menu.education },
    { id: 'projects', label: t.menu.projects },
    { id: 'contact', label: t.menu.contact }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let current = 'hero';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 150) {
          current = section.getAttribute('id');
        }
      });

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsMenuClosing(true);
      setTimeout(() => {
        setIsMenuOpen(false);
        setIsMenuClosing(false);
      }, 300);
    } else {
      setIsMenuOpen(true);
    }
  };

  const closeMenu = () => {
    setIsMenuClosing(true);
    setTimeout(() => {
      setIsMenuOpen(false);
      setIsMenuClosing(false);
    }, 300);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    closeMenu();
  };

  return (
    <>
      {/* Desktop Floating Header */}
      <header className="desktop-header">
        <nav className="desktop-nav">
          <ul className="desktop-menu">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  className={`desktop-link ${activeSection === item.id ? 'active' : ''}`}
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Mobile Hamburger Button */}
      <button 
        className={`floating-hamburger ${isMenuOpen ? 'active' : ''}`} 
        onClick={toggleMenu} 
        aria-label="Menu"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className={`menu-overlay ${isMenuClosing ? 'closing' : ''}`} onClick={closeMenu}>
          <ul className="nav-menu" onClick={(e) => e.stopPropagation()}>
            {navItems.map((item) => (
              <li key={item.id} className="nav-item-wrapper">
                <button
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default MenuHamburguer;
