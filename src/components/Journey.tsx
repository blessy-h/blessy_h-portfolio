import React from 'react';
import { timelineData, portfolioInfo } from '../data/portfolioData';

export const Journey: React.FC = () => {
  return (
    <section className="section section-wrap journey" id="education">
      <div className="section-label">05 / EDUCATION</div>
      <div className="section-heading">
        <h2>
          My learning <em>journey.</em>
        </h2>
        <p>
          Building a strong foundation across English language, programming fundamentals, and
          digital marketing.
        </p>
      </div>

      <div className="timeline">
        {timelineData.map((item) => (
          <div key={item.id} className="timeline-item">
            <span className="timeline-dot" aria-hidden="true" />
            {item.yearOrBadge && <small>{item.yearOrBadge}</small>}
            <h3>{item.title}</h3>
            {item.institution && <span className="timeline-institution">{item.institution}</span>}
            <p>{item.description}</p>
            {item.highlights && (
              <ul className="timeline-highlights">
                {item.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      <div className="growth-note">
        <img src={portfolioInfo.trophyUrl} alt="" aria-hidden="true" />
        <div>
          <b>Small steps. Big goals.</b>
          <span>Continuously learning something new and refining practical SEO skills.</span>
        </div>
        <span className="note-sparkle" aria-hidden="true">
          ✧
        </span>
      </div>
    </section>
  );
};
