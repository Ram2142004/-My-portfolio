import React from 'react';
import { BarChart3, ExternalLink, Play, Sparkles, Database, ShieldAlert, Cpu } from 'lucide-react';

export default function LiveDashboards({ onOpenProjectModal }) {
  const dashboards = [
    {
      id: "apple-analytics",
      title: "Apple Product Portfolio & Pricing Analytics",
      tagline: "E-Commerce Product & Pricing Intelligence",
      dataset: "62 Apple Smartphone Models • Flipkart Dataset",
      path: "/projects/apple-analytics.html",
      badge: "Commercial BI",
      color: "#0071e3",
      gradient: "linear-gradient(135deg, #0071e3 0%, #5b5ce2 100%)",
      features: [
        "4-tab analysis: Overview, Pricing & Discounts, Customer Engagement, Product Explorer",
        "Multi-variable filter engine (Model, RAM, Price segment, Discount band, Star rating)",
        "SVG scatterplot correlating sale prices with review volumes and ratings",
        "Automated executive narrative generation highlighting top performing models"
      ],
      metrics: [
        { label: "Products", val: "62 Models" },
        { label: "Total Ratings", val: "1.39M+" },
        { label: "Total Reviews", val: "115K+" }
      ]
    },
    {
      id: "zepto-intelligence",
      title: "Zepto Quick-Commerce Inventory & Stock Intelligence",
      tagline: "High-Volume Catalog & Stock Risk Intelligence",
      dataset: "3,732 Catalog Records • Live Local Engine",
      path: "/projects/zepto-analytics.html",
      badge: "Enterprise BI",
      color: "#6c2bd9",
      gradient: "linear-gradient(135deg, #4b1fa6 0%, #6c2bd9 100%)",
      features: [
        "8 operational pages: Overview, Category Matrix, Products, Pricing, Inventory, Demand, Management, Data Quality",
        "Potential sales value computation: Quantity indicator × discounted selling price",
        "Automated Data Quality Monitor scanning for zero MRP, missing attributes, and duplicates",
        "CSV dataset upload capability for running instant ad-hoc inventory audits in browser"
      ],
      metrics: [
        { label: "Products Tracked", val: "3,732" },
        { label: "Categories", val: "8 Segments" },
        { label: "Local Runtime", val: "0ms Latency" }
      ]
    },
    {
      id: "titanic-analytics",
      title: "Titanic Passenger Survival Executive Analytics",
      tagline: "Demographic, Class & Travel Survival Analytics",
      dataset: "891 Passenger Records • Statistical Modeling",
      path: "/projects/titanic-analytics.html",
      badge: "Statistical Suite",
      color: "#2f6fed",
      gradient: "linear-gradient(135deg, #14233b 0%, #2f6fed 100%)",
      features: [
        "Interactive 2D heatmap matrix correlating Passenger Class × Gender survival rates",
        "Animated analytical view with time/age-band slider illustrating fare correlations",
        "Multi-faceted cohort filters with instant CSV export of filtered records",
        "Data quality assessment auditing missing cabin entries and age records"
      ],
      metrics: [
        { label: "Passengers", val: "891 Pax" },
        { label: "Survival Matrix", val: "3 Classes × 2 Sexes" },
        { label: "Age Bins", val: "5-Year Intervals" }
      ]
    }
  ];

  return (
    <section id="live-dashboards" className="py-5 position-relative">
      <div className="container py-4">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag d-flex align-items-center justify-content-center gap-1.5">
            <Sparkles size={16} />
            <span>Interactive Data Engineering</span>
          </span>
          <h2 className="section-title">Live Business Intelligence Dashboards</h2>
          <p className="section-subtitle">
            Experience fully functioning data analytics platforms engineered with client-side computation, rich visualizations, and multi-facet filtering. Click any project to interact live!
          </p>
          <div className="section-divider"></div>
        </div>

        {/* Dashboards Cards Grid */}
        <div className="row g-4 justify-content-center">
          {dashboards.map((dash, idx) => (
            <div key={dash.id} className={`col-12 col-md-6 col-lg-4 ${idx === 2 ? 'col-md-8 col-lg-4' : ''}`}>
              <div className="card-glass h-100 d-flex flex-column p-4">
                {/* Header Badge */}
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <span
                    className="badge rounded-pill px-3 py-1.5 text-white fw-bold small"
                    style={{ background: dash.gradient }}
                  >
                    {dash.badge}
                  </span>
                  <span className="small text-muted font-mono" style={{ fontSize: '0.75rem' }}>
                    Interactive Tool
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="fs-5 fw-bold font-heading mb-1 text-high-contrast-title">
                  {dash.title}
                </h3>
                <div className="small text-high-contrast-muted mb-3 fw-semibold">
                  {dash.dataset}
                </div>

                {/* Metrics Pill Grid */}
                <div className="dashboard-metrics-row d-flex align-items-center justify-content-between p-2.5 rounded-3 bg-secondary bg-opacity-25 mb-3 border border-secondary border-opacity-10 gap-1">
                  {dash.metrics.map((m) => (
                    <div key={m.label} className="text-center flex-fill px-1">
                      <div className="fw-bold small text-high-contrast-title font-heading dashboard-metric-val" style={{ fontSize: '0.88rem' }}>
                        {m.val}
                      </div>
                      <div className="text-high-contrast-muted dashboard-metric-lbl" style={{ fontSize: '0.72rem' }}>
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Feature Bullets */}
                <ul className="list-unstyled mb-4 flex-grow-1" style={{ fontSize: '0.84rem' }}>
                  {dash.features.map((feat, i) => (
                    <li key={i} className="text-high-contrast-body mb-2 d-flex align-items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Action CTA Buttons */}
                <div className="d-flex gap-2 pt-3 border-top border-secondary border-opacity-15 mt-auto">
                  <button
                    onClick={() => onOpenProjectModal(dash)}
                    className="btn-glow-primary flex-grow-1 justify-content-center text-decoration-none py-2 px-3 small"
                    style={{ fontSize: '0.88rem' }}
                  >
                    <Play size={15} />
                    <span>Run Live Demo</span>
                  </button>
                  <a
                    href={dash.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline-glass py-2 px-3 small"
                    title="Open dashboard full screen in new tab"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
