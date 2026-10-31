import React from 'react';
import { portfolioInfo } from '../data/portfolioData';
import { useTilt } from '../hooks/useTilt';

export const Hero: React.FC = () => {
  const { onMouseMove, onMouseLeave } = useTilt({
    maxRotation: 6,
    perspective: 1000,
    scale: 1.02,
    glowColor: 'rgba(51, 51, 51, 0.08)',
  });

  return (
    <div className="hero-wrapper" id="home">
      {/* Background Decorative Soft Pastel Elements */}
      <div className="hero-backdrop-circle hero-circle-blush" aria-hidden="true" />
      <div className="hero-backdrop-circle hero-circle-powder" aria-hidden="true" />

      <section className="section-wrap hero-layout">
        {/* Left Side: Professional Editorial Introduction */}
        <div className="hero-content reveal">
          <div className="hero-eyebrow">
            <span className="eyebrow-accent" />
            <span>PORTFOLIO 2026</span>
          </div>

          <h1 className="hero-title">
            Hello,
            <br />
            I'm Blessy.
          </h1>

          <p className="hero-headline">
            An aspiring SEO &amp; Digital Marketing Specialist.
          </p>

          <p className="hero-description">
            Passionate about SEO, digital marketing, website development and creating meaningful
            digital experiences.
          </p>

          <div className="hero-btn-group">
            <a href="#projects" className="hero-btn hero-btn-primary">
              VIEW MY PROJECTS
            </a>
            <a href="#about" className="hero-btn hero-btn-secondary">
              ABOUT ME
            </a>
          </div>
        </div>

        {/* Right Side: Realistic Hanging Floating Profile ID Card */}
        <div className="hero-badge-stage reveal">
          {/* Lanyard Suspended Strap & Hardware Clip */}
          <div className="lanyard-rig" aria-hidden="true">
            <div className="lanyard-strap" />
            <div className="lanyard-clip-body">
              <div className="clip-hook" />
              <div className="clip-metal-clasp" />
            </div>
          </div>

          {/* The Suspended Profile ID Card */}
          <div
            className="hanging-id-card"
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            role="region"
            aria-label="Blessy - Official Profile Identification Card"
          >
            {/* Top Punch Hole Slot */}
            <div className="id-punch-slot" aria-hidden="true" />

            {/* Header / Security Band */}
            <div className="id-card-header">
              <span className="id-org-badge">OFFICIAL IDENTIFICATION</span>
              <span className="id-status-pill">
                <i className="status-dot" /> 2026 PASS
              </span>
            </div>

            {/* Profile Photograph */}
            <div className="id-photo-frame">
              <img
                src={portfolioInfo.portraitUrl}
                alt="Blessy - Profile Portrait"
                className="id-photo-img"
                loading="eager"
              />
            </div>

            {/* Identity Details */}
            <div className="id-info-block">
              <h2 className="id-person-name">{portfolioInfo.name}</h2>
              <p className="id-person-role">SEO &amp; DIGITAL MARKETING</p>
              <div className="id-serial-number">
                <span>SERIAL:</span> <strong>BLS-2026-SEO</strong>
              </div>
            </div>

            {/* Card Footer: QR Code & Security Details */}
            <div className="id-card-footer">
              {/* Detailed Decorative QR Code SVG */}
              <div className="id-qr-box" title="Scan to visit Blessy's portfolio">
                <svg
                  viewBox="0 0 33 33"
                  className="id-qr-svg"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Portfolio QR Code"
                >
                  {/* Top-Left Position Square */}
                  <rect x="1" y="1" width="9" height="9" fill="#333333" />
                  <rect x="2.5" y="2.5" width="6" height="6" fill="#FFFFFF" />
                  <rect x="4" y="4" width="3" height="3" fill="#333333" />

                  {/* Top-Right Position Square */}
                  <rect x="23" y="1" width="9" height="9" fill="#333333" />
                  <rect x="24.5" y="2.5" width="6" height="6" fill="#FFFFFF" />
                  <rect x="26" y="4" width="3" height="3" fill="#333333" />

                  {/* Bottom-Left Position Square */}
                  <rect x="1" y="23" width="9" height="9" fill="#333333" />
                  <rect x="2.5" y="24.5" width="6" height="6" fill="#FFFFFF" />
                  <rect x="4" y="26" width="3" height="3" fill="#333333" />

                  {/* Matrix QR Data Dots */}
                  <rect x="12" y="2" width="2" height="2" fill="#333333" />
                  <rect x="15" y="2" width="2" height="2" fill="#333333" />
                  <rect x="19" y="2" width="2" height="2" fill="#333333" />
                  <rect x="12" y="5" width="2" height="2" fill="#333333" />
                  <rect x="16" y="6" width="2" height="2" fill="#333333" />
                  <rect x="18" y="5" width="2" height="2" fill="#333333" />

                  {/* Timing line */}
                  <rect x="12" y="8" width="8" height="1.5" fill="#333333" />

                  <rect x="2" y="12" width="2" height="2" fill="#333333" />
                  <rect x="6" y="12" width="2" height="2" fill="#333333" />
                  <rect x="9" y="14" width="2" height="2" fill="#333333" />
                  <rect x="13" y="12" width="2.5" height="2.5" fill="#333333" />
                  <rect x="17" y="13" width="2" height="2" fill="#333333" />
                  <rect x="21" y="12" width="2" height="2" fill="#333333" />
                  <rect x="25" y="13" width="2" height="2" fill="#333333" />
                  <rect x="29" y="12" width="2" height="2" fill="#333333" />

                  <rect x="13" y="17" width="2" height="2" fill="#333333" />
                  <rect x="17" y="17" width="2" height="2" fill="#333333" />
                  <rect x="21" y="17" width="2" height="2" fill="#333333" />
                  <rect x="25" y="16" width="2" height="2" fill="#333333" />
                  <rect x="28" y="17" width="2" height="2" fill="#333333" />

                  <rect x="12" y="21" width="2" height="2" fill="#333333" />
                  <rect x="16" y="21" width="2" height="2" fill="#333333" />
                  <rect x="19" y="21" width="2" height="2" fill="#333333" />
                  <rect x="23" y="21" width="2" height="2" fill="#333333" />

                  <rect x="12" y="25" width="2" height="2" fill="#333333" />
                  <rect x="15" y="25" width="2" height="2" fill="#333333" />
                  <rect x="19" y="26" width="2" height="2" fill="#333333" />
                  <rect x="23" y="25" width="2" height="2" fill="#333333" />
                  <rect x="27" y="25" width="2" height="2" fill="#333333" />
                  <rect x="30" y="25" width="2" height="2" fill="#333333" />

                  <rect x="12" y="29" width="2" height="2" fill="#333333" />
                  <rect x="17" y="29" width="2" height="2" fill="#333333" />
                  <rect x="21" y="29" width="2" height="2" fill="#333333" />
                  <rect x="26" y="29" width="2" height="2" fill="#333333" />
                </svg>
              </div>

              <div className="id-meta-text">
                <span className="id-meta-label">SPECIALIST ID</span>
                <span className="id-meta-val">VERIFIED CANDIDATE</span>
                <small className="id-meta-sub">SEO · MARKETING · WEB</small>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
