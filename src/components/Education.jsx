import React from 'react';
import {
  GraduationCap,
  Award,
  ExternalLink,
  Calendar,
  CheckCircle2,
  BookOpen,
  FileBadge2,
  Globe2,
  Sparkles,
  Building2
} from 'lucide-react';
import { educationList, certifications, publications } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-5 position-relative">
      <div className="container py-4">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Academic & Research</span>
          <h2 className="section-title">Education & Credentials</h2>
          <p className="section-subtitle">
            Strong academic computer science background, international peer-reviewed conference research, and industry-recognized certifications.
          </p>
          <div className="section-divider"></div>
        </div>

        {/* Academic Degrees Timeline */}
        <div className="mb-5">
          <h3 className="fs-5 fw-bold font-heading mb-4 d-flex align-items-center gap-2 text-high-contrast-title">
            <GraduationCap size={22} className="text-primary" />
            <span>Academic Degrees & Timeline</span>
          </h3>

          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="timeline-wrapper">
                {educationList.map((edu) => (
                  <div key={edu.degree} className="timeline-item">
                    {/* Glowing Timeline Node Icon */}
                    <div className="timeline-node-icon text-primary">
                      <GraduationCap size={20} />
                    </div>

                    {/* Timeline Card */}
                    <div className="card-glass p-4 p-md-4.5 mb-2">
                      <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-2.5">
                        <div className="d-flex align-items-center gap-2">
                          <span className="badge-grade-pill">
                            {edu.grade}
                          </span>
                          <span className="badge-role-pill">
                            {edu.period}
                          </span>
                        </div>

                        <span className="small text-high-contrast-muted font-mono d-flex align-items-center gap-1.5" style={{ fontSize: '0.82rem' }}>
                          <Calendar size={14} className="text-primary" />
                          <span>{edu.period}</span>
                        </span>
                      </div>

                      {/* Degree Title */}
                      <h4 className="fs-5 fw-bold font-heading text-high-contrast-title mb-1.5">
                        {edu.degree}
                      </h4>
                      <div className="fw-semibold text-high-contrast-body small mb-3 d-flex align-items-center gap-1.5">
                        <Building2 size={15} className="text-primary" />
                        <span>{edu.institution}</span>
                      </div>

                      {/* Description */}
                      <p className="text-high-contrast-body small mb-3" style={{ lineHeight: '1.68' }}>
                        {edu.desc}
                      </p>

                      {/* Highlights */}
                      {edu.highlights && edu.highlights.length > 0 && (
                        <ul className="list-unstyled mb-4">
                          {edu.highlights.map((item, i) => (
                            <li key={i} className="text-high-contrast-body small mb-2 d-flex align-items-start gap-2">
                              <CheckCircle2 size={15} className="text-success mt-0.5 flex-shrink-0" />
                              <span style={{ lineHeight: '1.58' }}>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Core Coursework & Domain Checkpoints */}
                      {edu.coursework && edu.coursework.length > 0 && (
                        <div className="pt-3 border-top border-secondary border-opacity-15">
                          <div className="d-flex align-items-center gap-1.5 mb-2.5">
                            <Sparkles size={14} className="text-primary flex-shrink-0" />
                            <span className="small text-high-contrast-muted fw-bold text-uppercase" style={{ fontSize: '0.74rem', letterSpacing: '0.6px' }}>
                              Core Coursework &amp; Academic Focus:
                            </span>
                          </div>
                          <div className="d-flex flex-wrap gap-2">
                            {edu.coursework.map((course) => (
                              <span key={course} className="checkpoint-chip">
                                <CheckCircle2 size={13} className="checkpoint-icon" />
                                <span>{course}</span>
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* International Research & Publications Section */}
        {publications && publications.length > 0 && (
          <div className="mb-5">
            <h3 className="fs-5 fw-bold font-heading mb-4 d-flex align-items-center gap-2 text-high-contrast-title">
              <Globe2 size={22} className="text-info" />
              <span>Research &amp; Conference Publications</span>
            </h3>

            <div className="row g-4">
              {publications.map((pub, idx) => (
                <div key={idx} className="col-12">
                  <div className="card-glass p-4 p-md-4.5 border-primary border-opacity-30 position-relative overflow-hidden">
                    <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-2">
                      <div className="d-flex align-items-center gap-2">
                        <span className="badge-conference-pill">
                          {pub.badge}
                        </span>
                        <span className="small text-high-contrast-muted font-mono" style={{ fontSize: '0.82rem' }}>
                          {pub.year}
                        </span>
                      </div>
                      <span className="small text-info font-mono fw-semibold">
                        {pub.location}
                      </span>
                    </div>

                    <h4 className="fs-5 fw-bold font-heading text-high-contrast-title mb-1.5">
                      {pub.title}
                    </h4>
                    <div className="fw-semibold text-high-contrast-body small mb-3">
                      Presented at: <strong>{pub.conference}</strong> — {pub.location}
                    </div>

                    <p className="text-high-contrast-body small mb-3" style={{ lineHeight: '1.68' }}>
                      {pub.desc}
                    </p>

                    <div className="pt-3 border-top border-secondary border-opacity-15">
                      <div className="d-flex align-items-center gap-1.5 mb-2.5">
                        <Sparkles size={14} className="text-warning flex-shrink-0" />
                        <span className="small text-high-contrast-muted fw-bold text-uppercase" style={{ fontSize: '0.74rem', letterSpacing: '0.6px' }}>
                          Research Specialization &amp; Methods:
                        </span>
                      </div>
                      <div className="d-flex flex-wrap gap-2">
                        {pub.tags.map((tag) => (
                          <span key={tag} className="checkpoint-chip">
                            <CheckCircle2 size={13} className="checkpoint-icon" />
                            <span>{tag}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Professional Certifications Section */}
        <div>
          <div className="d-flex align-items-center justify-content-between mb-4">
            <h3 className="fs-5 fw-bold font-heading mb-0 d-flex align-items-center gap-2 text-high-contrast-title">
              <Award size={22} className="text-warning" />
              <span>Certifications &amp; Specialized Credentials</span>
            </h3>
            <span className="small text-high-contrast-muted font-mono d-none d-sm-inline">
              {certifications.length} Credentials
            </span>
          </div>

          <div className="row g-3">
            {certifications.map((cert) => {
              const badgeVariantClass =
                cert.badge === "Specialized"
                  ? "badge-credential-specialized"
                  : cert.badge === "Database"
                  ? "badge-credential-database"
                  : cert.badge === "AI & ML"
                  ? "badge-credential-ai"
                  : "";

              return (
                <div key={cert.title} className="col-md-6 col-lg-4">
                  <div className="cert-card h-100 d-flex flex-column justify-content-between">
                    <div>
                      <div className="d-flex align-items-center justify-content-between mb-2.5">
                        <span className="badge-category-pill">
                          {cert.category}
                        </span>
                        <span className={`badge-credential-pill ${badgeVariantClass}`}>
                          {cert.badge}
                        </span>
                      </div>

                      <h4 className="fs-6 fw-bold mb-1.5 text-high-contrast-title" style={{ lineHeight: '1.4' }}>
                        {cert.title}
                      </h4>
                      <p className="small text-high-contrast-muted mb-3" style={{ fontSize: '0.82rem' }}>
                        {cert.issuer}
                      </p>
                    </div>

                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline-glass w-100 justify-content-center py-2 px-2 text-decoration-none small mt-auto"
                      style={{ fontSize: '0.82rem' }}
                    >
                      <span>View Credential Details</span>
                      <ExternalLink size={13} />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
