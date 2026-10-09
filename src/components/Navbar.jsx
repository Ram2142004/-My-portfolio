import React, { useState, useEffect } from 'react';
import { Sun, Moon, FileText, Menu, X, Sparkles, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ theme, toggleTheme, onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "BI Dashboards", href: "#live-dashboards" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" }
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar-custom fixed-top ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container h-100 d-flex align-items-center justify-content-between">
        {/* Brand */}
        <a href="#home" className="navbar-brand-modern">
          <span className="brand-name-glow">
            {personalInfo.fullName}
          </span>
          <span className="brand-role-pill d-none d-xl-inline-flex">
            <span className="brand-live-dot"></span>
            <span>Data Analyst &amp; BI Specialist</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="d-none d-lg-flex align-items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="nav-link-custom text-decoration-none"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Action Controls: Theme Switch & Resume */}
        <div className="d-flex align-items-center gap-2">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="theme-toggle-btn"
            title={theme === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode"}
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={18} className="text-warning" /> : <Moon size={18} />}
          </button>

          {/* Resume CTA */}
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow-primary d-none d-sm-inline-flex text-decoration-none py-2 px-3 small"
            style={{ fontSize: '0.85rem' }}
          >
            <FileText size={16} />
            <span>Resume</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="d-lg-none theme-toggle-btn ms-1"
            aria-label="Open navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay Backdrop & Drawer */}
      {mobileMenuOpen && (
        <>
          <div
            className="navbar-backdrop-overlay d-lg-none"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="navbar-mobile-drawer d-lg-none">
            <div className="d-flex flex-column gap-2 mb-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="nav-link-custom text-decoration-none fs-6 py-2.5 px-3"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="d-flex gap-2 pt-3 border-top border-secondary border-opacity-25">
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glow-primary w-100 justify-content-center text-decoration-none py-2.5"
              >
                <FileText size={18} />
                <span>View Resume (PDF)</span>
              </a>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
