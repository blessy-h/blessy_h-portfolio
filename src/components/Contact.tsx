import React, { useState } from 'react';
import { portfolioInfo } from '../data/portfolioData';
import { useTilt } from '../hooks/useTilt';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [message, setMessage] = useState('');

  const { onMouseMove, onMouseLeave } = useTilt({
    maxRotation: 3.5,
    perspective: 1200,
    scale: 1.01,
    glowColor: 'rgba(51, 51, 51, 0.06)',
  });

  const handleCopyEmail = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(portfolioInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Portfolio Inquiry from ${senderName || 'Recruiter / Collaborator'}`
    );
    const body = encodeURIComponent(
      `Hi Blessy,\n\n${message}\n\nFrom: ${senderName}\nEmail: ${senderEmail}`
    );
    window.location.href = `mailto:${portfolioInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="contact-wrapper" id="contact">
      <section className="section section-wrap">
        <div className="contact-inner">
          <div>
            <div className="section-label">06 / SAY HELLO</div>
            <h2>
              Let's create
              <br />
              <em>something good.</em>
            </h2>
            <p>
              I am actively seeking entry-level <strong>SEO</strong> and{' '}
              <strong>Digital Marketing</strong> opportunities. Whether you have an open role, an
              internship, or a project in mind, I would love to connect!
            </p>

            <div className="contact-details-list">
              <div className="contact-detail-item">
                <span className="contact-detail-icon">✉</span>
                <span>
                  <strong>Email:</strong> {portfolioInfo.email}
                </span>
              </div>
              <div className="contact-detail-item">
                <span className="contact-detail-icon">📍</span>
                <span>
                  <strong>Location:</strong> {portfolioInfo.location}
                </span>
              </div>
              <div className="contact-detail-item">
                <span className="contact-detail-icon">💼</span>
                <span>
                  <strong>Status:</strong> Open to Full-time / Junior &amp; Fresher Roles
                </span>
              </div>
            </div>
          </div>

          <div
            className="contact-card"
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
          >
            <span className="contact-flower" aria-hidden="true">
              ✿
            </span>
            <h3>Have an opportunity?</h3>
            <p>Feel free to reach out directly. I respond quickly to emails and messages.</p>

            <div className="email-copy-row">
              <a
                href={`mailto:${portfolioInfo.email}`}
                className="contact-email"
                title="Click to open email client"
              >
                {portfolioInfo.email} ↗
              </a>
              <button
                type="button"
                className="copy-btn"
                onClick={handleCopyEmail}
                aria-label="Copy email address"
              >
                {copied ? 'Copied! ♡' : 'Copy Email'}
              </button>
            </div>

            <div className="socials">
              {portfolioInfo.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill"
                >
                  {social.label}
                </a>
              ))}
            </div>

            {/* Quick Connect Form */}
            <form className="inquiry-form" onSubmit={handleSendMessage}>
              <h4>Quick Inquiry</h4>
              <input
                type="text"
                placeholder="Your Name / Company"
                className="inquiry-input"
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="inquiry-input"
                value={senderEmail}
                onChange={(e) => setSenderEmail(e.target.value)}
                required
              />
              <textarea
                placeholder="How can we collaborate? (e.g., SEO Fresher Role, Project)..."
                rows={3}
                className="inquiry-textarea"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
              <button type="submit" className="inquiry-send-btn">
                Send Message via Email ↗
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
