import React from 'react';
import { educationData, portfolioInfo } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section className="section section-wrap" id="education">
      <div className="section-label">04 / EDUCATION</div>
      <div className="section-heading">
        <h2>
          Academic &amp; <em>Technical Background.</em>
        </h2>
        <p>A multidimensional foundation combining degree-level communication with full-stack programming.</p>
      </div>

      <div className="education-timeline">
        {educationData.map((item) => (
          <div key={item.id} className="timeline-card">
            <span className="timeline-dot-anchor" aria-hidden="true" />
            <span className="timeline-badge">{item.period}</span>
            <h3>{item.degree}</h3>
            <div className="institution">{item.institutionOrField}</div>
            <p>{item.description}</p>
            <ul className="timeline-highlights">
              {item.highlights.map((h, idx) => (
                <li key={idx}>{h}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="growth-callout-banner">
        <img src={portfolioInfo.trophyUrl} alt="" aria-hidden="true" />
        <div>
          <b>Small steps. Big ambitions.</b>
          <span>Learning something new every single day with curiosity and discipline.</span>
        </div>
        <span className="growth-sparkle" aria-hidden="true">
          ✧
        </span>
      </div>
    </section>
  );
};
