import React from 'react';
import { Award, Code, CheckCircle2, GitBranch } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function StatsBar() {
  const statIcons = [
    <Award size={26} className="text-warning" />,
    <Code size={26} className="text-primary" />,
    <GitBranch size={26} style={{ color: '#8b5cf6' }} />,
    <CheckCircle2 size={26} className="text-success" />
  ];

  return (
    <section className="py-4 position-relative z-1" style={{ marginTop: '-20px' }}>
      <div className="container">
        <div className="row g-3 justify-content-center">
          {personalInfo.stats.map((stat, idx) => (
            <div key={stat.label} className="col-6 col-lg-3">
              <div className="stat-card h-100 d-flex flex-column align-items-center justify-content-center">
                <div className="mb-2 d-flex align-items-center justify-content-center">
                  {statIcons[idx]}
                </div>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-sub">{stat.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
