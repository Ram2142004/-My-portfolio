import React, { useState } from 'react';
import {
  Code2,
  Database,
  BarChart3,
  Layout,
  Layers,
  Wrench,
  CheckCircle2,
  Sparkles,
  Zap
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export default function Skills() {
  const [selectedTab, setSelectedTab] = useState("All");

  const categoryIcons = {
    "Programming & Querying": <Code2 size={22} className="text-primary" />,
    "Data Analysis & EDA": <BarChart3 size={22} className="text-info" />,
    "Visualization & BI": <Layout size={22} style={{ color: '#8b5cf6' }} />,
    "Python Libraries & Tools": <Layers size={22} className="text-success" />,
    "Databases & Core Skills": <Database size={22} className="text-warning" />
  };

  const tabs = ["All", ...skillCategories.map((c) => c.category)];

  const displayedCategories =
    selectedTab === "All"
      ? skillCategories
      : skillCategories.filter((c) => c.category === selectedTab);

  return (
    <section id="skills" className="py-5 position-relative">
      <div className="container py-4">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Technical Competencies</span>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            A comprehensive overview of my core skills across relational querying, Python analytical libraries, Power BI visualization, and data modeling.
          </p>
          <div className="section-divider"></div>
        </div>

        {/* Tab Filters */}
        <div className="filter-tabs-wrapper mb-5">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`filter-tab-btn ${selectedTab === tab ? 'active' : ''}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Skill Category Cards Grid */}
        <div className="row g-4">
          {displayedCategories.map((cat) => (
            <div
              key={cat.category}
              className={selectedTab === "All" ? "col-12 col-md-6 col-lg-6" : "col-12"}
            >
              <div className="skill-category-card h-100">
                {/* Category Header */}
                <div className="skill-category-header">
                  <div className="d-flex align-items-center gap-3">
                    <div className="skill-category-icon-box">
                      {categoryIcons[cat.category] || <Layers size={22} className="text-primary" />}
                    </div>
                    <div>
                      <h3 className="skill-category-title">
                        {cat.category}
                      </h3>
                      <span className="skill-category-count">
                        {cat.skills.length} core competencies
                      </span>
                    </div>
                  </div>
                </div>

                {/* Skill Chips Grid */}
                <div className="skill-chips-container">
                  {cat.skills.map((skill) => {
                    const levelClass =
                      skill.level === "Expert"
                        ? "skill-level-expert"
                        : skill.level === "Advanced"
                        ? "skill-level-advanced"
                        : skill.level === "Proficient"
                        ? "skill-level-proficient"
                        : "skill-level-intermediate";

                    return (
                      <div key={skill.name} className="skill-chip">
                        <span className="skill-chip-icon">{skill.icon}</span>
                        <span className="skill-chip-name">{skill.name}</span>
                        <span className={`skill-level-badge ${levelClass}`}>
                          {skill.level}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
