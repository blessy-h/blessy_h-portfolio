import React from 'react';
import { portfolioInfo } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section className="section section-wrap about" id="about">
      <div className="section-label">01 / ABOUT ME</div>
      <div className="section-heading">
        <h2>
          A little about <em>my journey.</em>
        </h2>
        <p>{portfolioInfo.aboutSub}</p>
      </div>

      <div className="about-grid">
        <div className="about-photo">
          <img
            src={portfolioInfo.portraitUrl}
            alt="Blessy portrait"
            loading="lazy"
          />
          <span className="photo-caption">A little creativity goes a long way ♡</span>
        </div>

        <div className="about-text">
          <p className="dropcap">
            {portfolioInfo.aboutParagraphs[0]}
          </p>
          <p>
            {portfolioInfo.aboutParagraphs[1]}
          </p>
          <p>
            {portfolioInfo.aboutParagraphs[2]}
          </p>

          <div className="quick-facts">
            {portfolioInfo.quickFacts.map((fact) => (
              <div key={fact.label} className="quick-fact-card">
                <b>{fact.label}</b>
                <small>{fact.sub}</small>
                {fact.badge && <span className="quick-fact-badge">{fact.badge}</span>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
