import React, { useState, useEffect } from 'react';
import {
  FileText,
  ArrowRight,
  Sparkles,
  Building2,
  GraduationCap,
  Github,
  Linkedin,
  Mail,
  CheckCircle,
  ExternalLink,
  Code2,
  Database,
  BarChart3,
  Terminal,
  Award
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % personalInfo.titles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero-wrapper">
      {/* Background Ambient Glows */}
      <div className="hero-blob hero-blob-1"></div>
      <div className="hero-blob hero-blob-2"></div>
      <div className="hero-blob hero-blob-3"></div>

      <div className="container position-relative z-1 py-4">
        <div className="row align-items-center g-5">
          {/* Left Column: Headlines & Call to Actions */}
          <div className="col-lg-7 text-center text-lg-start">
            {/* Live Availability & Company Badges */}
            <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-2 mb-3">
              <span className="badge-pill-custom">
                <span className="pulse-dot" style={{ background: '#10b981' }}></span>
                <span>{personalInfo.availabilityStatus}</span>
              </span>
              <span className="badge-pill-custom" style={{ borderColor: 'rgba(59, 130, 246, 0.4)' }}>
                <Building2 size={14} className="text-primary" />
                <span>{personalInfo.experienceBadge}</span>
              </span>
              <span className="badge-pill-custom" style={{ borderColor: 'rgba(139, 92, 246, 0.4)' }}>
                <GraduationCap size={14} style={{ color: '#8b5cf6' }} />
                <span>{personalInfo.educationBadge}</span>
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="hero-main-title font-heading mb-2">
              Hi, I'm <span className="text-gradient">{personalInfo.fullName}</span>
            </h1>

            {/* Rotating Title */}
            <div className="hero-rotating-title-wrap mb-3 mb-sm-4">
              <div
                className="hero-rotating-title font-heading text-primary transition-all d-flex align-items-center justify-content-center justify-content-lg-start gap-2"
                key={titleIndex}
                style={{ animation: 'fadeIn 0.5s ease' }}
              >
                <Sparkles size={20} className="text-warning flex-shrink-0" />
                <span>{personalInfo.titles[titleIndex]}</span>
              </div>
            </div>

            {/* Value Proposition Description */}
            <p className="hero-lead-desc text-secondary mb-4 mx-auto mx-lg-0">
              Aspiring Data Analyst equipped with an <strong className="text-primary">M.Sc. in Computer Science</strong> from SRM IST. Skilled in <strong className="text-primary">SQL</strong>, <strong className="text-primary">Python</strong>, <strong className="text-primary">Power BI</strong>, <strong className="text-primary">Excel</strong>, and exploratory data analysis. Experienced in cleaning and transforming large datasets, authoring international machine learning research (CIMA 2026, Malaysia), and developing decision-ready executive dashboards.
            </p>

            {/* Action Buttons */}
            <div className="hero-cta-group d-flex flex-wrap justify-content-center justify-content-lg-start gap-2 gap-sm-3 mb-4">
              <a href="#projects" className="btn-glow-primary">
                <span>Explore Projects</span>
                <ArrowRight size={18} />
              </a>

              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-glass"
              >
                <FileText size={18} className="text-success" />
                <span>View Resume</span>
              </a>

              <a href="#contact" className="btn-outline-glass">
                <Mail size={18} />
                <span>Get in Touch</span>
              </a>
            </div>

            {/* Social Links & Quick Direct Contact */}
            <div className="d-flex flex-column flex-sm-row align-items-center justify-content-center justify-content-lg-start gap-3 pt-3 border-top border-secondary border-opacity-10">
              <span className="text-muted small fw-semibold text-uppercase" style={{ letterSpacing: '1px', fontSize: '0.75rem' }}>
                Connect Directly:
              </span>
              <div className="d-flex align-items-center gap-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn"
                  title="GitHub Profile (@Ram2142004)"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn"
                  title="LinkedIn Profile"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="social-icon-btn"
                  title={`Email ${personalInfo.email}`}
                  aria-label="Email"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: High-End Framed Portrait with Floating Indicators */}
          <div className="col-lg-5 d-flex justify-content-center">
            <div className="profile-frame-wrap">
              {/* Floating Top Badge */}
              <div className="floating-badge floating-badge-top">
                <div className="d-flex align-items-center justify-content-center rounded-circle flex-shrink-0" style={{ width: '38px', height: '38px', background: 'rgba(245, 158, 11, 0.2)', color: '#fbbf24' }}>
                  <GraduationCap size={20} />
                </div>
                <div>
                  <div className="fw-bold small text-high-contrast-title font-heading" style={{ fontSize: '0.88rem' }}>8.28 / 10 CGPA</div>
                  <div className="text-high-contrast-muted" style={{ fontSize: '0.74rem' }}>SRM Institute of Science &amp; Tech</div>
                </div>
              </div>

              {/* User Photo */}
              <img
                src="/profile.jpg"
                alt={personalInfo.fullName}
                className="profile-img-styled"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop";
                }}
              />

              {/* Floating Bottom Badge */}
              <div className="floating-badge floating-badge-bottom">
                <div className="d-flex align-items-center justify-content-center rounded-circle flex-shrink-0" style={{ width: '38px', height: '38px', background: 'rgba(16, 185, 129, 0.2)', color: '#34d399' }}>
                  <BarChart3 size={20} />
                </div>
                <div>
                  <div className="fw-bold small text-high-contrast-title font-heading" style={{ fontSize: '0.88rem' }}>10+ Analytics Projects</div>
                  <div className="text-high-contrast-muted" style={{ fontSize: '0.74rem' }}>Power BI, SQL, Python &amp; ML</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
