import React, { useState } from 'react';
import { skillsData } from '../data/portfolioData';
import { useTilt } from '../hooks/useTilt';
import { Skill } from '../types';

interface SkillCardItemProps {
  skill: Skill;
}

const SkillCardItem: React.FC<SkillCardItemProps> = ({ skill }) => {
  const { onMouseMove, onMouseLeave } = useTilt({
    maxRotation: 5,
    perspective: 1200,
    scale: 1.015,
    glowColor: 'rgba(51, 51, 51, 0.08)',
  });

  return (
    <article
      className="skill-card"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <div className="skill-icon" aria-hidden="true">
        {skill.icon}
      </div>
      <h3>{skill.title}</h3>
      <p>{skill.description}</p>
      <div className="tags">
        {skill.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </article>
  );
};

export const Skills: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'SEO' | 'Marketing' | 'Development'>('All');

  const filteredSkills =
    filter === 'All'
      ? skillsData
      : skillsData.filter((s) => s.category === filter);

  return (
    <div className="skills-wrapper" id="skills">
      <section className="section section-wrap">
        <div className="section-label">02 / WHAT I DO</div>
        <div className="section-heading">
          <h2>
            Skills &amp; <em>interests.</em>
          </h2>
          <p>
            Foundational skills in search engine visibility, digital strategy, and front-to-back web
            development.
          </p>
        </div>

        <div className="skill-category-filter" role="tablist" aria-label="Skill category filter">
          {(['All', 'SEO', 'Marketing', 'Development'] as const).map((cat) => (
            <button
              key={cat}
              type="button"
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
              role="tab"
              aria-selected={filter === cat}
            >
              {cat === 'All' ? 'All Skills (9)' : cat === 'Development' ? 'Web & Python' : cat}
            </button>
          ))}
        </div>

        <div className="skill-grid">
          {filteredSkills.map((skill) => (
            <SkillCardItem key={skill.id} skill={skill} />
          ))}
        </div>
      </section>
    </div>
  );
};
