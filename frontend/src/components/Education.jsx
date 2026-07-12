import React from 'react';
import { GraduationCap, School, BookOpen, Award, MapPin, Calendar } from 'lucide-react';

const educationData = [
  {
    id: 1,
    level: 'School (10th Grade)',
    institution: 'Your School Name',
    location: 'City, State',
    year: '2019 - 2020',
    score: '80% / CGPA 8.4',
    scoreLabel: 'Score',
    description: 'Completed Secondary School Certificate (SSC) with distinction. Strong foundation in Mathematics and Sciences.',
    icon: School,
    color: 'cyan',
    badge: 'SSC'
  },
  {
    id: 2,
    level: 'Intermediate (12th Grade)',
    institution: 'Your Junior College Name',
    location: 'City, State',
    year: '2020 - 2022',
    score: '90.4% / CGPA 9.5',
    scoreLabel: 'Score',
    description: 'Completed Higher Secondary Certificate (HSC) with MPC stream. Excelled in Mathematics, Physics, and Chemistry.',
    icon: BookOpen,
    color: 'purple',
    badge: 'MPC'
  },
  {
    id: 3,
    level: 'B.Tech — Computer Science & Engineering',
    institution: 'KL University',
    location: 'Guntur, Andhra Pradesh',
    year: '2022 - 2026',
    score: '8.7 / 10',
    scoreLabel: 'CGPA',
    description: 'Pursuing B.Tech in CSE with a specialization in Full Stack Development. Active member of coding clubs and hackathon teams. Coursework includes Data Structures, DBMS, Operating Systems, Web Technologies, and Software Engineering.',
    icon: GraduationCap,
    color: 'blue',
    badge: 'B.Tech CSE'
  }
];

const colorMap = {
  cyan:   { border: 'rgba(0,240,255,0.25)',   glow: 'rgba(0,240,255,0.08)',   text: '#00F0FF',  bg: 'rgba(0,240,255,0.08)',   badge: 'rgba(0,240,255,0.12)'   },
  purple: { border: 'rgba(168,85,247,0.25)',  glow: 'rgba(168,85,247,0.08)', text: '#A855F7',  bg: 'rgba(168,85,247,0.08)', badge: 'rgba(168,85,247,0.12)'  },
  blue:   { border: 'rgba(59,130,246,0.25)',  glow: 'rgba(59,130,246,0.08)', text: '#3B82F6',  bg: 'rgba(59,130,246,0.08)', badge: 'rgba(59,130,246,0.12)'  }
};

const Education = () => {
  return (
    <section id="education" className="section-padding" style={{ background: 'linear-gradient(to bottom, #080B10, #0D111A)' }}>
      <div className="container">

        {/* Section Title */}
        <div className="section-title-wrapper">
          <div className="badge" style={{ margin: '0 auto 16px' }}>
            <GraduationCap size={14} />
            Academic Journey
          </div>
          <h2 className="section-title">Education</h2>
          <div className="section-title-line"></div>
          <p style={{ color: 'var(--text-muted)', marginTop: '16px', fontSize: '15px' }}>
            My academic path from school to university
          </p>
        </div>

        {/* Education Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', maxWidth: '900px', margin: '0 auto', position: 'relative' }}>

          {/* Vertical connector line */}
          <div style={{
            position: 'absolute', left: '32px', top: '60px', bottom: '60px',
            width: '2px',
            background: 'linear-gradient(to bottom, rgba(0,240,255,0.4), rgba(168,85,247,0.4), rgba(59,130,246,0.4))',
            zIndex: 0
          }} />

          {educationData.map((edu, index) => {
            const colors = colorMap[edu.color];
            const IconComponent = edu.icon;
            return (
              <div
                key={edu.id}
                className="edu-card"
                style={{
                  display: 'flex', gap: '24px', alignItems: 'flex-start',
                  background: 'rgba(13,17,26,0.7)',
                  backdropFilter: 'blur(16px)',
                  border: `1px solid ${colors.border}`,
                  borderRadius: '20px',
                  padding: '28px',
                  boxShadow: `0 8px 32px ${colors.glow}`,
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  zIndex: 1
                }}
              >
                {/* Icon Circle */}
                <div style={{
                  width: '64px', height: '64px', minWidth: '64px',
                  borderRadius: '50%',
                  background: colors.bg,
                  border: `2px solid ${colors.border}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: `0 0 20px ${colors.glow}`
                }}>
                  <IconComponent size={28} style={{ color: colors.text }} />
                </div>

                {/* Content */}
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                    <span style={{
                      fontSize: '11px', fontWeight: '700', padding: '3px 10px',
                      borderRadius: '999px', background: colors.badge,
                      color: colors.text, border: `1px solid ${colors.border}`,
                      textTransform: 'uppercase', letterSpacing: '0.05em'
                    }}>{edu.badge}</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--text-muted)', fontSize: '12px' }}>
                      <Calendar size={12} />
                      {edu.year}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--text-muted)', fontSize: '12px' }}>
                      <MapPin size={12} />
                      {edu.location}
                    </div>
                  </div>

                  <h3 style={{ fontSize: '18px', fontWeight: '700', color: 'white', marginBottom: '4px' }}>
                    {edu.level}
                  </h3>
                  <p style={{ fontSize: '14px', color: colors.text, fontWeight: '600', marginBottom: '10px' }}>
                    {edu.institution}
                  </p>
                  <p style={{ fontSize: '14px', color: '#9CA3AF', lineHeight: '1.7', marginBottom: '14px' }}>
                    {edu.description}
                  </p>

                  {/* Score badge */}
                  <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    background: colors.bg, border: `1px solid ${colors.border}`,
                    borderRadius: '10px', padding: '8px 16px'
                  }}>
                    <Award size={16} style={{ color: colors.text }} />
                    <span style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {edu.scoreLabel}:
                    </span>
                    <span style={{ fontSize: '15px', fontWeight: '800', color: colors.text }}>
                      {edu.score}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Education;
