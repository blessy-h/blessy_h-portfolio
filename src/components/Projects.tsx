import React from 'react';
import { projectsData } from '../data/portfolioData';
import { useTilt } from '../hooks/useTilt';
import { Project } from '../types';

interface ProjectCardItemProps {
  project: Project;
}

const ProjectCardItem: React.FC<ProjectCardItemProps> = ({ project }) => {
  const { onMouseMove, onMouseLeave } = useTilt({
    maxRotation: 6,
    perspective: 1000,
    scale: 1.015,
    glowColor:
      project.type === 'restaurant'
        ? 'rgba(168, 191, 163, 0.45)'
        : 'rgba(184, 216, 240, 0.45)',
  });

  return (
    <article
      className="project-card"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {project.type === 'restaurant' ? (
        <div className="project-art restaurant-art" aria-label="Grand Festive Cafe Art Banner">
          <span>GFC</span>
          <small>{project.subtitle}</small>
          <div className="plate" aria-hidden="true">
            ✿
          </div>
        </div>
      ) : (
        <div className="project-art seo-art" aria-label="SEO Practice Art Banner">
          <span className="search-symbol" aria-hidden="true">
            ⌕
          </span>
          <span className="seo-word">
            SEO
            <small>{project.subtitle}</small>
          </span>
          <div className="orbit-dot" aria-hidden="true">
            ✧
          </div>
        </div>
      )}

      <div className="project-info">
        <div className="project-meta">{project.badge}</div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        {/* SEO Work Performed Section */}
        <div className="project-seo-section">
          <h4>
            <span>✦</span> SEO Work Performed:
          </h4>
          <ul className="project-seo-list">
            {project.seoWork.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Technologies Used */}
        <div className="tags" style={{ marginTop: 0 }}>
          {project.technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        {/* Project Actions */}
        <div className="project-actions">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link-btn"
            >
              Live Website <span>↗</span>
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-github-link"
            >
              GitHub Source <span>↗</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export const Projects: React.FC = () => {
  return (
    <section className="section section-wrap projects" id="projects">
      <div className="section-label">03 / SELECTED WORK</div>
      <div className="section-heading">
        <h2>
          Things I've <em>worked on.</em>
        </h2>
        <p>
          Practical projects reflecting hands-on SEO implementations, keyword targeting, and
          responsive website development.
        </p>
      </div>

      <div className="project-grid">
        {projectsData.map((project) => (
          <ProjectCardItem key={project.id} project={project} />
        ))}
      </div>

      <p className="project-footnote">
        Projects are hosted live on GitHub Pages. Click <strong>Live Website ↗</strong> to explore
        the interactive builds.
      </p>
    </section>
  );
};
