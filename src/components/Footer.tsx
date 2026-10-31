import React from 'react';
import { portfolioInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="footer-wrapper">
      <footer className="footer section-wrap">
        <a className="brand" href="#home" onClick={scrollToTop}>
          {portfolioInfo.name}<span>.</span>
        </a>

        <span>Made with care &amp; a little creativity ♡</span>

        <a href="#home" onClick={scrollToTop} className="footer-top-link">
          Back to top ↑
        </a>
      </footer>
    </div>
  );
};
