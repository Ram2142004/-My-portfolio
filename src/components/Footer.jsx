import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, FileText, Heart, Phone } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-custom">
      <div className="container">
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-4 pb-4 border-bottom border-secondary border-opacity-15">
          {/* Brand & Tagline */}
          <div className="text-center text-md-start">
            <h4 className="fs-5 fw-bold font-heading mb-1 text-primary">
              {personalInfo.fullName}
            </h4>
            <p className="small text-muted mb-0">
              Aspiring Data Analyst • SQL, Python, Excel & Power BI • M.Sc. CS @ SRM IST
            </p>
          </div>

          {/* Social Links */}
          <div className="d-flex align-items-center gap-2">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              title="GitHub"
            >
              <Github size={17} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              title="LinkedIn"
            >
              <Linkedin size={17} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="social-icon-btn"
              title="Email"
            >
              <Mail size={17} />
            </a>
            <a
              href={`tel:${personalInfo.phone}`}
              className="social-icon-btn"
              title="Phone"
            >
              <Phone size={17} />
            </a>
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn text-success"
              title="Resume"
            >
              <FileText size={17} />
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="btn-outline-glass py-2 px-3 small d-inline-flex align-items-center gap-1.5"
            style={{ fontSize: '0.82rem' }}
          >
            <span>Back to Top</span>
            <ArrowUp size={15} />
          </button>
        </div>

        {/* Bottom Rights Bar */}
        <div className="d-flex flex-column flex-sm-row align-items-center justify-content-between gap-2 pt-4 small text-muted">
          <div>
            © {new Date().getFullYear()} {personalInfo.fullName}. All rights reserved.
          </div>
          <div className="d-flex align-items-center gap-1">
            <span>Data Analyst & BI Specialist • Bengaluru, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
