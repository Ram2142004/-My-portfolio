import React from 'react';
import {
  BarChart3,
  Database,
  Cpu,
  Layers,
  GraduationCap,
  Briefcase,
  MapPin,
  Mail,
  Languages,
  CheckCircle,
  FileCheck,
  Award,
  Globe2
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const highlights = [
    {
      icon: <BarChart3 size={24} className="text-primary" />,
      title: "Exploratory Data Analysis & Cleaning",
      desc: "Proficient in cleaning, transforming, and validating raw datasets with Python (Pandas/NumPy), SQL, and Excel to eradicate anomalies and guarantee reporting reliability."
    },
    {
      icon: <Layers size={24} style={{ color: '#8b5cf6' }} />,
      title: "Interactive BI & Dashboarding",
      desc: "Engineering rich Power BI dashboards and Excel trackers utilizing DAX measures, Star Schema data models, and Power Query to deliver actionable executive insights."
    },
    {
      icon: <Database size={24} className="text-success" />,
      title: "Relational Querying & SQL",
      desc: "Constructing robust MySQL queries, table joins, aggregations, and subqueries to extract granular business metrics and answer high-impact operational questions."
    },
    {
      icon: <Cpu size={24} className="text-warning" />,
      title: "Predictive Analytics & Research",
      desc: "Author of international conference research (CIMA 2026, Malaysia) applying machine learning algorithms (Scikit-Learn) for EV demand forecasting and anomaly detection."
    }
  ];

  return (
    <section id="about" className="py-5 position-relative">
      <div className="container py-4">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Professional Profile</span>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Leveraging analytical rigor, statistical modeling, and modern BI dashboards to turn raw data into strategic business value.
          </p>
          <div className="section-divider"></div>
        </div>

        {/* Top Overview Grid */}
        <div className="row g-4 align-items-stretch mb-5">
          {/* Narrative Column */}
          <div className="col-lg-7">
            <div className="card-glass p-4 p-md-5 h-100 d-flex flex-column justify-content-between">
              <div>
                <h3 className="fs-4 fw-bold font-heading mb-3 text-high-contrast-title">
                  Hi there! I'm <span className="text-gradient">{personalInfo.fullName}</span>
                </h3>
                <p className="text-high-contrast-body mb-3" style={{ lineHeight: '1.75' }}>
                  I am an <strong>Aspiring Data Analyst</strong> with an <strong>M.Sc. in Computer Science from SRM Institute of Science and Technology (8.28 / 10 CGPA)</strong> and a foundational <strong>B.Sc. in Electronics from PSG College of Arts and Science (6.54 / 10 CGPA)</strong>.
                </p>
                <p className="text-high-contrast-body mb-3" style={{ lineHeight: '1.75' }}>
                  Through professional experience as a <strong>Data Analyst Intern at Gradtwin Services</strong> and a <strong>Data Analyst Trainee at Besant Technology</strong>, I have worked directly with large-scale datasets—cleaning, validating, and structuring data to improve reporting quality, building automated Python ETL routines, and creating executive Power BI dashboards with custom DAX calculations.
                </p>
                <p className="text-high-contrast-body mb-4" style={{ lineHeight: '1.75' }}>
                  Beyond core data analytics, I actively engage in applied machine learning research. I authored and presented original research titled <em>"Electric Vehicle Charging Station Demand Prediction Using Machine Learning"</em> at the <strong>CIMA 2026 International Conference, AIMST University, Malaysia</strong>.
                </p>
              </div>

              {/* Personal Quick Info Badges */}
              <div className="d-flex flex-wrap gap-2 pt-3 border-top border-secondary border-opacity-15">
                <span className="badge-pill-custom">
                  <MapPin size={14} className="text-primary" />
                  <span>{personalInfo.location}</span>
                </span>
                <span className="badge-pill-custom">
                  <GraduationCap size={14} style={{ color: '#8b5cf6' }} />
                  <span>SRM IST (8.28 CGPA)</span>
                </span>
                <span className="badge-pill-custom">
                  <Briefcase size={14} className="text-success" />
                  <span>Gradtwin Services Intern</span>
                </span>
                <span className="badge-pill-custom">
                  <Globe2 size={14} className="text-info" />
                  <span>CIMA 2026 Malaysia Researcher</span>
                </span>
              </div>
            </div>
          </div>

          {/* Quick Metrics / Focus Column */}
          <div className="col-lg-5">
            <div className="d-flex flex-column gap-3 h-100">
              {/* Card 1: M.Sc. CS */}
              <div className="card-glass p-4">
                <div className="d-flex align-items-center gap-3 mb-2">
                  <div className="p-2.5 rounded-3 bg-primary bg-opacity-15 text-primary">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h4 className="fs-6 fw-bold mb-0 text-high-contrast-title">Master of Science (M.Sc.)</h4>
                    <span className="small text-high-contrast-muted">Computer Science • SRM Institute of Science &amp; Tech</span>
                  </div>
                </div>
                <div className="academic-standing-box">
                  <span className="academic-standing-label">Academic Standing</span>
                  <span className="badge-grade-pill">
                    8.28 / 10 CGPA
                  </span>
                </div>
              </div>

              {/* Card 2: Industry Work */}
              <div className="card-glass p-4">
                <div className="d-flex align-items-center gap-3 mb-2">
                  <div className="p-2.5 rounded-3 bg-success bg-opacity-15 text-success">
                    <Briefcase size={24} />
                  </div>
                  <div>
                    <h4 className="fs-6 fw-bold mb-0 text-high-contrast-title">Professional Analytics Experience</h4>
                    <span className="small text-high-contrast-muted">Gradtwin Services &amp; Besant Technology</span>
                  </div>
                </div>
                <p className="small text-high-contrast-body mb-0 mt-2" style={{ lineHeight: '1.6' }}>
                  Cleaned, validated, and transformed enterprise datasets using Python, SQL, and Excel. Engineered automated scripts and interactive Power BI KPI dashboards.
                </p>
              </div>

              {/* Card 3: Research */}
              <div className="card-glass p-4 flex-grow-1">
                <div className="d-flex align-items-center gap-3 mb-2">
                  <div className="p-2.5 rounded-3 bg-warning bg-opacity-15 text-warning">
                    <Award size={24} />
                  </div>
                  <div>
                    <h4 className="fs-6 fw-bold mb-0 text-high-contrast-title">International ML Research</h4>
                    <span className="small text-high-contrast-muted">Presented at CIMA 2026, Malaysia</span>
                  </div>
                </div>
                <p className="small text-high-contrast-body mb-0 mt-2" style={{ lineHeight: '1.6' }}>
                  Authored predictive ML models forecasting EV charging station demand patterns, presented at AIMST University, Malaysia.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="row g-3 g-md-4">
          {highlights.map((item) => (
            <div key={item.title} className="col-12 col-sm-6 col-lg-3">
              <div className="card-glass p-3.5 p-md-4 h-100 d-flex flex-column">
                <div className="p-3 rounded-3 bg-secondary bg-opacity-25 d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '52px', height: '52px' }}>
                  {item.icon}
                </div>
                <h4 className="fs-5 fw-bold font-heading mb-2 text-high-contrast-title">{item.title}</h4>
                <p className="text-high-contrast-body small mb-0 flex-grow-1" style={{ lineHeight: '1.62' }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
