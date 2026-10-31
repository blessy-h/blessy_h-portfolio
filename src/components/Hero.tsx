import React from 'react';
import { portfolioInfo } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section className="hero section-wrap" id="home">
      <div className="hero-copy reveal">
        <p className="eyebrow">
          <i /> {portfolioInfo.eyebrow}
        </p>

        <h1>
          Hello, I'm<br />
          <em>{portfolioInfo.name}</em>
          <span className="heart">♡</span>
        </h1>

        <div className="role">
          <span>{portfolioInfo.tagline}</span>
          <span className="role-badge">Fresher</span>
        </div>

        <p className="intro">{portfolioInfo.intro}</p>

        <div className="hero-actions">
          <a className="button primary" href="#projects">
            View My Projects <b>↗</b>
          </a>
          <a className="button secondary" href="#contact">
            Contact Me <span>→</span>
          </a>
        </div>

        <div className="hero-note">
          <span>✳</span> Curious mind. Creative approach. Always learning.
        </div>
      </div>

      <div className="hero-visual reveal">
        {/* Animated pastel decorative background */}
        <div className="blob" aria-hidden="true" />

        {/* Floating subtle pastel shapes */}
        <div className="floating-shape shape-circle shape-c1" aria-hidden="true" />
        <div className="floating-shape shape-circle shape-c2" aria-hidden="true" />
        <div className="floating-shape shape-ring" aria-hidden="true" />

        <div className="portrait-frame">
          <img
            src={portfolioInfo.portraitUrl}
            alt="Blessy - SEO & Digital Marketing Fresher"
            loading="eager"
          />
        </div>

        <span className="vertical-note" aria-hidden="true">
          DREAM · LEARN · CREATE
        </span>

        <div className="float-card">
          <img src={portfolioInfo.trophyUrl} alt="" aria-hidden="true" />
          <span>
            <b>Keep growing</b>
            <small>One step at a time</small>
          </span>
        </div>

        <span className="sparkle s1" aria-hidden="true">
          ✳
        </span>
        <span className="sparkle s2" aria-hidden="true">
          ✧
        </span>
      </div>

      <a className="scroll-cue" href="#about" aria-label="Scroll to explore about section">
        ↓ <span>SCROLL TO EXPLORE</span>
      </a>
    </section>
  );
};
