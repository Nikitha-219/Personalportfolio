import React from 'react';
import { Award, ExternalLink, Shield, Brain, Briefcase, Star } from 'lucide-react';

const certifications = [
  {
    id: 1,
    title: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: '2024',
    description: 'Foundational understanding of AWS Cloud services, architecture, security, and pricing models.',
    icon: Shield,
    color: 'cyan',
    link: '#',
    badge: 'Cloud'
  },
  {
    id: 2,
    title: 'Google AI/ML Fundamentals',
    issuer: 'Google',
    date: '2024',
    description: 'Introduction to Artificial Intelligence and Machine Learning concepts using Google tools and TensorFlow.',
    icon: Brain,
    color: 'purple',
    link: '#',
    badge: 'AI / ML'
  },
  {
    id: 3,
    title: 'Full Stack Developer Internship',
    issuer: 'TechSolutions Inc.',
    date: 'Summer 2025',
    description: 'Completed a 3-month internship building RESTful APIs with Spring Boot and responsive UIs with React.',
    icon: Briefcase,
    color: 'blue',
    link: '#',
    badge: 'Internship'
  },
  {
    id: 4,
    title: 'Java Programming',
    issuer: 'NPTEL / Coursera',
    date: '2023',
    description: 'Comprehensive Java programming course covering OOP, data structures, and algorithm design.',
    icon: Star,
    color: 'emerald',
    link: '#',
    badge: 'Programming'
  }
];

const colorMap = {
  cyan:    { border: 'rgba(0,240,255,0.25)',   glow: 'rgba(0,240,255,0.08)',   text: '#00F0FF',  bg: 'rgba(0,240,255,0.08)',   badge: 'rgba(0,240,255,0.12)'  },
  purple:  { border: 'rgba(168,85,247,0.25)',  glow: 'rgba(168,85,247,0.08)', text: '#A855F7',  bg: 'rgba(168,85,247,0.08)', badge: 'rgba(168,85,247,0.12)' },
  blue:    { border: 'rgba(59,130,246,0.25)',  glow: 'rgba(59,130,246,0.08)', text: '#3B82F6',  bg: 'rgba(59,130,246,0.08)', badge: 'rgba(59,130,246,0.12)' },
  emerald: { border: 'rgba(16,185,129,0.25)',  glow: 'rgba(16,185,129,0.08)', text: '#10B981',  bg: 'rgba(16,185,129,0.08)', badge: 'rgba(16,185,129,0.12)' }
};

const Certifications = () => {
  return (
    <section id="certifications" className="section-padding" style={{ background: '#080B10' }}>
      <div className="container">

        {/* Section Title */}
        <div className="section-title-wrapper">
          <div className="badge" style={{ margin: '0 auto 16px' }}>
            <Award size={14} />
            Achievements
          </div>
          <h2 className="section-title">Certifications</h2>
          <div className="section-title-line"></div>
          <p style={{ color: 'var(--text-muted)', marginTop: '16px', fontSize: '15px' }}>
            Credentials and achievements that validate my skills
          </p>
        </div>

        {/* Certs Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px'
        }}>
          {certifications.map((cert) => {
            const colors = colorMap[cert.color];
            const IconComponent = cert.icon;
            return (
              <div
                key={cert.id}
                style={{
                  background: 'rgba(13,17,26,0.7)',
                  backdropFilter: 'blur(16px)',
                  border: `1px solid ${colors.border}`,
                  borderRadius: '20px',
                  padding: '28px',
                  boxShadow: `0 8px 32px ${colors.glow}`,
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  cursor: 'default',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = `0 16px 48px ${colors.glow}`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = `0 8px 32px ${colors.glow}`;
                }}
              >
                {/* Top row: icon + badge */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '52px', height: '52px',
                    borderRadius: '14px',
                    background: colors.bg,
                    border: `1px solid ${colors.border}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <IconComponent size={24} style={{ color: colors.text }} />
                  </div>

                  <span style={{
                    fontSize: '10px', fontWeight: '700', padding: '4px 10px',
                    borderRadius: '999px', background: colors.badge,
                    color: colors.text, border: `1px solid ${colors.border}`,
                    textTransform: 'uppercase', letterSpacing: '0.05em'
                  }}>
                    {cert.badge}
                  </span>
                </div>

                {/* Title + Issuer + Date */}
                <div>
                  <h3 style={{ fontSize: '16px', fontWeight: '700', color: 'white', marginBottom: '4px' }}>
                    {cert.title}
                  </h3>
                  <p style={{ fontSize: '13px', color: colors.text, fontWeight: '600', marginBottom: '2px' }}>
                    {cert.issuer}
                  </p>
                  <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{cert.date}</p>
                </div>

                {/* Description */}
                <p style={{ fontSize: '13px', color: '#9CA3AF', lineHeight: '1.65', flexGrow: 1 }}>
                  {cert.description}
                </p>

                {/* View Certificate Link */}
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '6px',
                    fontSize: '12px', fontWeight: '700', color: colors.text,
                    textDecoration: 'none', transition: 'opacity 0.2s',
                    borderTop: `1px solid ${colors.border}`,
                    paddingTop: '12px',
                    marginTop: 'auto'
                  }}
                  onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
                  onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                >
                  <ExternalLink size={13} />
                  View Certificate
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Certifications;
