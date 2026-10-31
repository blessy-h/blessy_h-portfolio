import React from 'react';
import { SearchCheck, Monitor, Target } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';
import { useTilt } from '../hooks/useTilt';
import { Certification } from '../types';

interface CertCardItemProps {
  cert: Certification;
}

const getCertIcon = (id: string) => {
  if (id.includes('seo')) return <SearchCheck size={14} strokeWidth={2} />;
  if (id.includes('python')) return <Monitor size={14} strokeWidth={2} />;
  return <Target size={14} strokeWidth={2} />;
};

const CertCardItem: React.FC<CertCardItemProps> = ({ cert }) => {
  const { onMouseMove, onMouseLeave } = useTilt({
    maxRotation: 4.5,
    perspective: 1200,
    scale: 1.015,
    glowColor: 'rgba(51, 51, 51, 0.06)',
  });

  return (
    <article
      className="cert-card"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <div className="cert-badge">
        <span className="cert-badge-icon">{getCertIcon(cert.id)}</span>
        <span>{cert.year}</span>
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
    <div className="certifications-wrapper" id="certifications">
      <section className="section section-wrap">
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
    </div>
  );
};
