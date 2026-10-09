import React from 'react';
import {
  Briefcase,
  Calendar,
  MapPin,
  ExternalLink,
  CheckCircle2,
  Building2,
  Sparkles
} from 'lucide-react';
import { experiences } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-5 position-relative">
      <div className="container py-4">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Career Milestones</span>
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">
            Hands-on professional data analytics experience across enterprise datasets, data validation pipelines, automated Python ETL workflows, and executive Power BI KPI dashboards.
          </p>
          <div className="section-divider"></div>
        </div>

        {/* Timeline Wrapper */}
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="timeline-wrapper">
              {experiences.map((exp, idx) => (
                <div key={exp.role + exp.company} className="timeline-item">
                  {/* Timeline Node Icon */}
                  <div className="timeline-node-icon text-primary">
                    <Briefcase size={20} />
                  </div>

                  {/* Card Content */}
                  <div className="card-glass p-4 p-md-4.5 mb-2">
                    <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-2.5">
                      <div className="d-flex align-items-center gap-2">
                        <span className="badge-role-pill">
                          {exp.type}
                        </span>
                        <span className="small text-high-contrast-muted font-mono d-flex align-items-center gap-1.5" style={{ fontSize: '0.82rem' }}>
                          <Calendar size={14} className="text-primary" />
                          <span>{exp.period}</span>
                        </span>
                      </div>

                      {exp.liveUrl && (
                        <a
                          href={exp.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="small text-primary text-decoration-none d-flex align-items-center gap-1 fw-semibold"
                        >
                          <span>Visit Company / Project</span>
                          <ExternalLink size={13} />
                        </a>
                      )}
                    </div>

                    {/* Role Title and Company */}
                    <h3 className="fs-5 fw-bold font-heading text-high-contrast-title mb-1.5">
                      {exp.role}
                    </h3>
                    <div className="d-flex flex-wrap align-items-center gap-2 text-high-contrast-muted small mb-3">
                      <span className="fw-semibold text-high-contrast-body d-flex align-items-center gap-1.5">
                        <Building2 size={15} className="text-primary" />
                        <span>{exp.company}</span>
                      </span>
                      <span>•</span>
                      <span className="d-flex align-items-center gap-1 text-high-contrast-muted">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-high-contrast-body small mb-3" style={{ lineHeight: '1.68' }}>
                      {exp.description}
                    </p>

                    {/* Highlights */}
                    <ul className="list-unstyled mb-4">
                      {exp.highlights.map((item, i) => (
                        <li key={i} className="text-high-contrast-body small mb-2 d-flex align-items-start gap-2">
                          <CheckCircle2 size={15} className="text-success mt-0.5 flex-shrink-0" />
                          <span style={{ lineHeight: '1.58' }}>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Capability Checkpoints */}
                    <div className="pt-3 border-top border-secondary border-opacity-15">
                      <div className="d-flex align-items-center gap-1.5 mb-2.5">
                        <Sparkles size={14} className="text-primary flex-shrink-0" />
                        <span className="small text-high-contrast-muted fw-bold text-uppercase" style={{ fontSize: '0.74rem', letterSpacing: '0.6px' }}>
                          Key Skills &amp; Checkpoints:
                        </span>
                      </div>
                      <div className="d-flex flex-wrap gap-2">
                        {exp.tech.map((t) => (
                          <span key={t} className="checkpoint-chip">
                            <CheckCircle2 size={13} className="checkpoint-icon" />
                            <span>{t}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
