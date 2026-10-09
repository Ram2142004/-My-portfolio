import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './App.css';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import About from './components/About';
import LiveDashboards from './components/LiveDashboards';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';

export default function App() {
  // Theme State with localStorage persistence
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('ram_portfolio_theme');
    if (saved) return saved;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches
      ? 'light'
      : 'dark';
  });

  // Modal State for Live Interactive Dashboards
  const [activeProjectModal, setActiveProjectModal] = useState(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('ram_portfolio_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleOpenProjectModal = (project) => {
    setActiveProjectModal(project);
  };

  const handleCloseProjectModal = () => {
    setActiveProjectModal(null);
  };

  return (
    <div className="portfolio-app-root">
      {/* Navigation Bar */}
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* Main Page Content */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Quick Numbers Bar */}
        <StatsBar />

        {/* About Background & Engineering Pillars */}
        <About />

        {/* Spotlight Live Interactive BI Dashboards (Apple, Zepto, Titanic) */}
        <LiveDashboards onOpenProjectModal={handleOpenProjectModal} />

        {/* Featured Projects Showcase with Categorized Filters */}
        <Projects onOpenProjectModal={handleOpenProjectModal} />

        {/* Skills & Technologies Matrix */}
        <Skills />

        {/* Experience Timeline */}
        <Experience />

        {/* Education & Verified Industry Credentials */}
        <Education />

        {/* Contact & Inquiry Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Live Interactive Dashboard Modal */}
      {activeProjectModal && (
        <ProjectModal
          project={activeProjectModal}
          onClose={handleCloseProjectModal}
        />
      )}
    </div>
  );
}
