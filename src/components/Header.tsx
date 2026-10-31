import React, { useState } from 'react';
import { portfolioInfo } from '../data/portfolioData';

interface HeaderProps {
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  const navLinks = [
    { href: '#home', id: 'home', label: 'Home' },
    { href: '#about', id: 'about', label: 'About' },
    { href: '#skills', id: 'skills', label: 'Skills' },
    { href: '#projects', id: 'projects', label: 'Projects' },
    { href: '#certifications', id: 'certifications', label: 'Certifications' },
    { href: '#education', id: 'education', label: 'Education' },
    { href: '#contact', id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="site-header">
      <a className="brand" href="#home" onClick={closeNav} aria-label={`${portfolioInfo.name} Portfolio Home`}>
        {portfolioInfo.name}<span>.</span>
      </a>

      <button
        className="menu-toggle"
        aria-label={isNavOpen ? 'Close navigation' : 'Open navigation'}
        aria-expanded={isNavOpen}
        onClick={toggleNav}
        type="button"
      >
        {isNavOpen ? '×' : '☰'}
      </button>

      <nav className={`nav ${isNavOpen ? 'open' : ''}`} aria-label="Main navigation">
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={link.href}
            className={activeSection === link.id ? 'active' : ''}
            onClick={closeNav}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <a className="resume-link" href="#contact" onClick={closeNav}>
          Let's connect <span>↗</span>
        </a>
      </div>
    </header>
  );
};
