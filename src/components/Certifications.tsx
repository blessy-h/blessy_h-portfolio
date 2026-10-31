import React from 'react';
import { certificationsData } from '../data/portfolioData';
import { useTilt } from '../hooks/useTilt';
import { Certification } from '../types';

interface CertCardItemProps {
  cert: Certification;
}

const CertCardItem: React.FC<CertCardItemProps> = ({ cert }) => {
  const { onMouseMove, onMouseLeave } = useTilt({
    maxRotation: 6,
    perspective: 900,
    scale: 1.02,
    glowColor:
      cert.colorTheme === 'pink'
        ? 'rgba(244, 198, 215, 0.45)'
        : cert.colorTheme === 'blue'
        ? 'rgba(184, 216, 240, 0.45)'
        : 'rgba(168, 191, 163, 0.45)',
  });

  return (
    <article
      className={`cert-card theme-${cert.colorTheme}`}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <div className="cert-badge">
        <span>★</span> {cert.year}
      </div>
      <h3>{cert.title}</h3>
      <div className="cert-issuer">{cert.issuer}</div>
      <p>{cert.description}</p>
      <div className="cert-skills">
        {cert.skillsCovered.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>
    </article>
  );
};

export const Certifications: React.FC = () => {
  return (
    <section className="section section-wrap certifications" id="certifications">
      <div className="section-label">04 / CERTIFICATIONS</div>
      <div className="section-heading">
        <h2>
          Certifications &amp; <em>credentials.</em>
        </h2>
        <p>
          Formal training and qualifications reinforcing digital marketing, search strategy, and
          technical web competencies.
        </p>
      </div>

      <div className="cert-grid">
        {certificationsData.map((cert) => (
          <CertCardItem key={cert.id} cert={cert} />
        ))}
      </div>
    </section>
  );
};
