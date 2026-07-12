import React from 'react';
import { Code2, Server, Database, Settings, MessageCircle, Users, Lightbulb, Clock, Target, Sparkles } from 'lucide-react';

// ── Technical Skills ──────────────────────────────────────────────────────────
const technicalSkills = [
  // Backend
  { id: 1, name: 'Java',        icon: '☕', category: 'Backend',   proficiency: 90, color: '#EF4444' },
  { id: 2, name: 'Spring Boot', icon: '🍃', category: 'Backend',   proficiency: 85, color: '#22C55E' },
  { id: 3, name: 'MySQL',       icon: '🗄️', category: 'Database',  proficiency: 85, color: '#3B82F6' },
  // Frontend
  { id: 4, name: 'HTML5',       icon: '🌐', category: 'Frontend',  proficiency: 95, color: '#F97316' },
  { id: 5, name: 'CSS3',        icon: '🎨', category: 'Frontend',  proficiency: 90, color: '#06B6D4' },
  { id: 6, name: 'JavaScript',  icon: '⚡', category: 'Frontend',  proficiency: 88, color: '#EAB308' },
  { id: 7, name: 'React.js',    icon: '⚛️', category: 'Frontend',  proficiency: 88, color: '#38BDF8' },
  // Tools
  { id: 8, name: 'Git & GitHub',icon: '🔀', category: 'Tools',     proficiency: 90, color: '#F97316' },
  { id: 9, name: 'Postman',     icon: '📮', category: 'Tools',     proficiency: 85, color: '#EF4444' },
];

// ── Soft Skills ───────────────────────────────────────────────────────────────
const softSkills = [
  { icon: MessageCircle, label: 'Communication',   desc: 'Clear & concise',       color: '#00F0FF' },
  { icon: Users,         label: 'Teamwork',         desc: 'Collaborative mindset', color: '#A855F7' },
  { icon: Lightbulb,     label: 'Problem Solving',  desc: 'Creative thinker',      color: '#F59E0B' },
  { icon: Clock,         label: 'Time Management',  desc: 'Deadline-driven',       color: '#10B981' },
  { icon: Target,        label: 'Adaptability',     desc: 'Fast learner',          color: '#3B82F6' },
  { icon: Sparkles,      label: 'Creativity',       desc: 'Innovative ideas',      color: '#EC4899' },
];

const categoryConfig = {
  Frontend:  { icon: Code2,     color: '#00F0FF', bg: 'rgba(0,240,255,0.08)',   border: 'rgba(0,240,255,0.2)'   },
  Backend:   { icon: Server,    color: '#A855F7', bg: 'rgba(168,85,247,0.08)', border: 'rgba(168,85,247,0.2)' },
  Database:  { icon: Database,  color: '#3B82F6', bg: 'rgba(59,130,246,0.08)', border: 'rgba(59,130,246,0.2)' },
  Tools:     { icon: Settings,  color: '#10B981', bg: 'rgba(16,185,129,0.08)', border: 'rgba(16,185,129,0.2)' },
};

const Skills = () => {
  const categories = Object.keys(categoryConfig);

  return (
    <section id="skills" className="section-padding" style={{ background: '#0D111A' }}>
      <div className="container">

        {/* Section Title */}
        <div className="section-title-wrapper">
          <div className="badge" style={{ margin: '0 auto 16px' }}>
            <Code2 size={14} />
            What I Know
          </div>
          <h2 className="section-title">Skills</h2>
          <div className="section-title-line"></div>
          <p style={{ color: 'var(--text-muted)', marginTop: '16px', fontSize: '15px' }}>
            Technologies and tools I work with
          </p>
        </div>

        {/* ── Technical Skills Label ── */}
        <h3 style={{
          fontSize: '20px', fontWeight: '700', color: 'white',
          marginBottom: '28px', display: 'flex', alignItems: 'center', gap: '10px'
        }}>
          <Code2 size={20} style={{ color: 'var(--accent-cyan)' }} />
          Technical Skills
        </h3>

        {/* ── Category Panels with Progress Bars ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
          marginBottom: '60px'
        }}>
          {categories.map(category => {
            const cfg = categoryConfig[category];
            const IconComp = cfg.icon;
            const filtered = technicalSkills.filter(s => s.category === category);
            if (filtered.length === 0) return null;
            return (
              <div key={category} style={{
                background: 'rgba(13,17,26,0.7)',
                backdropFilter: 'blur(16px)',
                border: `1px solid ${cfg.border}`,
                borderRadius: '20px',
                padding: '28px',
                transition: 'all 0.3s ease'
              }}>
                {/* Category header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px', paddingBottom: '16px', borderBottom: `1px solid ${cfg.border}` }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: cfg.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <IconComp size={18} style={{ color: cfg.color }} />
                  </div>
                  <span style={{ fontSize: '16px', fontWeight: '700', color: 'white', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{category}</span>
                </div>

                {/* Skill rows */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  {filtered.map(skill => (
                    <div key={skill.id}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span style={{ fontSize: '16px' }}>{skill.icon}</span>
                          <span style={{ fontSize: '14px', fontWeight: '600', color: '#E5E7EB' }}>{skill.name}</span>
                        </div>
                        <span style={{ fontSize: '12px', fontWeight: '700', color: skill.color }}>{skill.proficiency}%</span>
                      </div>
                      <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.05)', borderRadius: '999px', overflow: 'hidden' }}>
                        <div style={{
                          width: `${skill.proficiency}%`,
                          height: '100%',
                          background: `linear-gradient(90deg, ${skill.color}, ${cfg.color})`,
                          borderRadius: '999px',
                          boxShadow: `0 0 8px ${skill.color}66`,
                          transition: 'width 1.2s ease-out'
                        }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Soft Skills Label ── */}
        <h3 style={{
          fontSize: '20px', fontWeight: '700', color: 'white',
          marginBottom: '28px', display: 'flex', alignItems: 'center', gap: '10px'
        }}>
          <Users size={20} style={{ color: 'var(--accent-purple)' }} />
          Soft Skills
        </h3>

        {/* ── Soft Skills Cards ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px'
        }}>
          {softSkills.map(({ icon: Icon, label, desc, color }) => (
            <div key={label}
              style={{
                background: 'rgba(13,17,26,0.7)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '16px',
                padding: '24px',
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                textAlign: 'center', gap: '12px',
                transition: 'all 0.3s ease', cursor: 'default'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = color + '55';
                e.currentTarget.style.boxShadow = `0 8px 32px ${color}22`;
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{
                width: '52px', height: '52px', borderRadius: '14px',
                background: color + '15',
                border: `1px solid ${color}33`,
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                <Icon size={24} style={{ color }} />
              </div>
              <div>
                <p style={{ fontSize: '14px', fontWeight: '700', color: 'white', margin: '0 0 4px' }}>{label}</p>
                <p style={{ fontSize: '12px', color: 'var(--text-muted)', margin: 0 }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
