import React from 'react';
import { Compass, Target, Heart, Code2, Coffee, Music, Gamepad2, BookOpen } from 'lucide-react';

const interests = [
  { icon: Code2,    label: 'Open Source',      color: '#00F0FF' },
  { icon: BookOpen, label: 'Learning New Tech', color: '#A855F7' },
  { icon: Coffee,   label: 'Problem Solving',   color: '#F59E0B' },
  { icon: Music,    label: 'Music',             color: '#10B981' },
  { icon: Gamepad2, label: 'Gaming',            color: '#EF4444' },
  { icon: Heart,    label: 'UI/UX Design',      color: '#EC4899' },
];

const About = () => {
  return (
    <section id="about" className="section-padding" style={{ background: 'linear-gradient(to bottom, #080B10, #0D111A)' }}>
      <div className="container">

        {/* Section Title */}
        <div className="section-title-wrapper">
          <div className="badge" style={{ margin: '0 auto 16px' }}>
            <Compass size={14} />
            Who I Am
          </div>
          <h2 className="section-title">About Me</h2>
          <div className="section-title-line"></div>
        </div>

        {/* ── Row 1: Personal Introduction ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '28px',
          marginBottom: '40px'
        }}>
          {/* Personal Introduction Card */}
          <div className="glass-panel" style={{ padding: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(0,240,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Compass size={18} style={{ color: 'var(--accent-cyan)' }} />
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: '700', color: 'white' }}>Personal Introduction</h3>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '15px', lineHeight: '1.8', marginBottom: '14px' }}>
              Hi! I'm <strong style={{ color: 'white' }}>Nikitha</strong>, a passionate Computer Science Engineering student at
              KL University. I have a deep love for building scalable, beautiful web applications that solve
              real-world problems.
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '15px', lineHeight: '1.8' }}>
              With hands-on experience in both <span style={{ color: 'var(--accent-cyan)', fontWeight: '600' }}>frontend</span> and{' '}
              <span style={{ color: 'var(--accent-purple)', fontWeight: '600' }}>backend</span> development, I enjoy crafting end-to-end
              solutions — from designing intuitive UIs to architecting robust REST APIs.
            </p>
          </div>

          {/* Career Objective Card */}
          <div className="glass-panel" style={{ padding: '32px', borderColor: 'rgba(168,85,247,0.2)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(168,85,247,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Target size={18} style={{ color: 'var(--accent-purple)' }} />
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: '700', color: 'white' }}>Career Objective</h3>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '15px', lineHeight: '1.8', marginBottom: '14px' }}>
              To secure a challenging position as a <strong style={{ color: 'white' }}>Full Stack Developer</strong> where I can
              apply my technical expertise in Java, Spring Boot, and React.js to build impactful products.
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '15px', lineHeight: '1.8' }}>
              I aspire to work in a growth-oriented environment that nurtures innovation, encourages
              collaborative problem-solving, and continuously pushes me to expand my skill set.
            </p>
            {/* Objective Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '18px' }}>
              {['Full Stack Dev', 'SDE Role', 'Product Companies', 'Open Source'].map(tag => (
                <span key={tag} style={{
                  fontSize: '11px', padding: '4px 12px', borderRadius: '999px',
                  background: 'rgba(168,85,247,0.08)', border: '1px solid rgba(168,85,247,0.2)',
                  color: 'var(--accent-purple)', fontWeight: '600'
                }}>{tag}</span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Row 2: Quick Stats ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '20px',
          marginBottom: '40px'
        }}>
          {[
            { value: '8.7', label: 'CGPA', sub: 'KL University', color: 'var(--accent-cyan)' },
            { value: '1+', label: 'Internship', sub: 'Full Stack Dev', color: 'var(--accent-purple)' },
            { value: '5+', label: 'Projects', sub: 'Built & Deployed', color: '#3B82F6' },
            { value: '10+', label: 'Skills', sub: 'Technologies', color: '#10B981' },
          ].map(stat => (
            <div key={stat.label} className="glass-panel" style={{ padding: '24px', textAlign: 'center' }}>
              <p style={{ fontSize: '32px', fontWeight: '800', color: stat.color, margin: 0 }}>{stat.value}</p>
              <p style={{ fontSize: '14px', fontWeight: '700', color: 'white', margin: '4px 0 2px' }}>{stat.label}</p>
              <p style={{ fontSize: '12px', color: 'var(--text-muted)', margin: 0 }}>{stat.sub}</p>
            </div>
          ))}
        </div>

        {/* ── Row 3: Interests ── */}
        <div className="glass-panel" style={{ padding: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(251,191,36,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Heart size={18} style={{ color: '#F59E0B' }} />
            </div>
            <h3 style={{ fontSize: '18px', fontWeight: '700', color: 'white' }}>Interests &amp; Hobbies</h3>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
            {interests.map(({ icon: Icon, label, color }) => (
              <div key={label} style={{
                display: 'flex', alignItems: 'center', gap: '10px',
                padding: '12px 20px', borderRadius: '12px',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.06)',
                transition: 'all 0.3s ease', cursor: 'default'
              }}
                onMouseEnter={e => { e.currentTarget.style.background = `rgba(${color === '#00F0FF' ? '0,240,255' : color === '#A855F7' ? '168,85,247' : '255,255,255'},0.06)`; e.currentTarget.style.borderColor = color + '44'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; }}
              >
                <Icon size={18} style={{ color }} />
                <span style={{ fontSize: '14px', fontWeight: '600', color: 'white' }}>{label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
