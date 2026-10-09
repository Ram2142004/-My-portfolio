import React, { useState, useMemo } from 'react';
import {
  ExternalLink,
  Github,
  Play,
  Sparkles,
  Search,
  Filter,
  CheckCircle2,
  FolderGit2
} from 'lucide-react';
import { projects } from '../data/portfolioData';

export default function Projects({ onOpenProjectModal }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", "Resume Highlight", "Data Analytics & BI", "Machine Learning & Research", "Interactive Live Demo"];

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const matchesCategory =
        activeCategory === "All" ||
        (activeCategory === "Resume Highlight" && p.badge === "Resume Highlight") ||
        (activeCategory === "Data Analytics & BI" && p.category.includes("Data Analytics")) ||
        (activeCategory === "Machine Learning & Research" && (p.category.includes("Machine Learning") || p.category.includes("Research"))) ||
        (activeCategory === "Interactive Live Demo" && p.isInteractiveDashboard);

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        p.title.toLowerCase().includes(query) ||
        p.desc.toLowerCase().includes(query) ||
        p.tech.some((t) => t.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="projects" className="py-5 position-relative">
      <div className="container py-4">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Featured Portfolio</span>
          <h2 className="section-title">Projects & Analytics Showcase</h2>
          <p className="section-subtitle">
            A comprehensive showcase of enterprise commercial analytics, high-volume transaction analytics, Google Play Store metrics, EV machine learning research, and interactive BI dashboards.
          </p>
          <div className="section-divider"></div>
        </div>

        {/* Filter Controls & Search */}
        <div className="projects-controls-bar d-flex flex-column flex-lg-row align-items-stretch align-items-lg-center justify-content-between gap-3 mb-4">
          {/* Category Tabs */}
          <div className="filter-tabs-wrapper mb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`filter-tab-btn ${activeCategory === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="projects-search-wrap position-relative">
            <Search
              size={16}
              className="position-absolute text-muted"
              style={{ left: '14px', top: '50%', transform: 'translateY(-50%)' }}
            />
            <input
              type="text"
              placeholder="Search tech, title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="form-input-custom ps-5 py-2 small w-100"
              style={{ borderRadius: 'var(--radius-full)', fontSize: '0.86rem' }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="btn btn-sm btn-link position-absolute text-muted text-decoration-none"
                style={{ right: '8px', top: '50%', transform: 'translateY(-50%)', padding: 0 }}
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Results Counter */}
        <div className="d-flex align-items-center justify-content-between mb-4 px-1">
          <span className="small text-muted font-mono">
            Showing <strong>{filteredProjects.length}</strong> of {projects.length} projects
          </span>
          {activeCategory !== "All" && (
            <button
              onClick={() => setActiveCategory("All")}
              className="btn btn-sm btn-link text-primary text-decoration-none p-0 small"
            >
              Reset Category
            </button>
          )}
        </div>

        {/* Projects Grid */}
        <div className="row g-4">
          {filteredProjects.map((project) => (
            <div key={project.id} className="col-md-6 col-lg-4">
              <div className="project-card h-100 d-flex flex-column">
                {/* Thumbnail & Badges */}
                <div className="project-thumbnail-wrapper">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="project-thumbnail"
                    loading="lazy"
                  />
                  <div className="project-badge-top">{project.badge}</div>
                  {project.liveUrl && (
                    <div className="project-live-indicator">
                      <span className="pulse-dot"></span>
                      <span>Live</span>
                    </div>
                  )}
                </div>

                {/* Card Body */}
                <div className="project-body d-flex flex-column flex-grow-1">
                  <span className="small text-high-contrast-muted fw-bold text-uppercase mb-1" style={{ fontSize: '0.74rem', letterSpacing: '0.6px' }}>
                    {project.category}
                  </span>

                  <h3 className="project-title text-high-contrast-title">{project.title}</h3>
                  <p className="project-desc text-high-contrast-body">{project.desc}</p>

                  {/* Highlights */}
                  {project.highlights && project.highlights.length > 0 && (
                    <ul className="list-unstyled mb-3" style={{ fontSize: '0.82rem' }}>
                      {project.highlights.slice(0, 2).map((h, idx) => (
                        <li key={idx} className="text-high-contrast-body mb-2 d-flex align-items-start gap-2">
                          <CheckCircle2 size={14} className="text-success mt-0.5 flex-shrink-0" />
                          <span style={{ lineHeight: '1.5' }}>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Tech Tags */}
                  <div className="project-tech-tags mb-3 mt-auto">
                    {project.tech.map((t) => (
                      <span key={t} className="tech-tag">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action Link Footer */}
                  <div className="d-flex flex-wrap align-items-center gap-2 pt-3 border-top border-secondary border-opacity-15">
                    {/* Live Modal Demo for Interactive Apps */}
                    {project.isInteractiveDashboard && (
                      <button
                        onClick={() =>
                          onOpenProjectModal({
                            title: project.title,
                            path: project.demoPath
                          })
                        }
                        className="btn-glow-primary py-2 px-3 small flex-grow-1 justify-content-center"
                        style={{ fontSize: '0.82rem' }}
                      >
                        <Play size={14} />
                        <span>Interactive Demo</span>
                      </button>
                    )}

                    {/* Standard Live URL */}
                    {!project.isInteractiveDashboard && project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-glow-primary py-2 px-3 small flex-grow-1 justify-content-center text-decoration-none"
                        style={{ fontSize: '0.82rem' }}
                      >
                        <ExternalLink size={14} />
                        <span>Live Demo</span>
                      </a>
                    )}

                    {/* Admin portal link if any */}
                    {project.adminUrl && (
                      <a
                        href={project.adminUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline-glass py-2 px-2.5 small text-decoration-none"
                        style={{ fontSize: '0.8rem' }}
                        title="Open Portal"
                      >
                        Admin CMS
                      </a>
                    )}

                    {/* GitHub Repository Link */}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline-glass py-2 px-3 small text-decoration-none"
                        style={{ fontSize: '0.82rem' }}
                        title="View Code on GitHub"
                      >
                        <Github size={15} />
                        <span>Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="card-glass text-center py-5 px-4 my-4">
            <FolderGit2 size={40} className="text-muted mb-3 mx-auto" />
            <h4 className="fs-5 fw-bold mb-2">No projects found</h4>
            <p className="text-secondary small mb-3">
              No projects matched your search for "{searchQuery}" under "{activeCategory}".
            </p>
            <button
              onClick={() => {
                setActiveCategory("All");
                setSearchQuery("");
              }}
              className="btn-glow-primary small py-2 px-4"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
