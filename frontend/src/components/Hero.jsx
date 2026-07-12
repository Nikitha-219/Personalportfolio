import React from 'react';
import { ArrowRight, Download, Mail } from 'lucide-react';
import profilePic from '../assets/profile.png';

// Inline GitHub SVG (lucide-react v1 removed this icon)
const GithubIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
  </svg>
);

// Inline LinkedIn SVG (lucide-react v1 removed this icon)
const LinkedinIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const Hero = () => {
  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero-section" style={{ textAlign: 'left', alignItems: 'center' }}>
      {/* Background glow layers */}
      <div className="hero-glow-1"></div>
      <div className="hero-glow-2"></div>

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div className="hero-two-col">

          {/* ── LEFT: Text Content ── */}
          <div className="hero-text-col">
            <div className="badge" style={{ display: 'inline-flex' }}>
              <span className="badge-dot"></span>
              Available for Internships &amp; Projects
            </div>

            <h1 className="hero-title" style={{ textAlign: 'left' }}>
              Hi, I'm{' '}
              <span className="text-gradient">Nikitha</span>
            </h1>

            <p className="hero-professional-title">
              CSE Student &nbsp;|&nbsp; Full Stack Developer
            </p>

            <p className="hero-desc" style={{ margin: '0 0 36px', textAlign: 'left' }}>
              I build high-performance, elegant full-stack web applications with{' '}
              <span style={{ color: 'var(--accent-cyan)', fontWeight: '600' }}>React.js</span>,{' '}
              <span style={{ color: 'var(--accent-purple)', fontWeight: '600' }}>Spring Boot</span>,
              and relational databases. Dedicated to transforming complex problems into
              stunning, user-centric software.
            </p>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '40px' }}>
              <button onClick={() => handleScrollTo('projects')} className="glow-button">
                Explore Projects <ArrowRight size={18} />
              </button>
              <a
                href="/resume.pdf"
                download
                onClick={(e) => { e.preventDefault(); alert('Resume download triggered (Demo mode).'); }}
                className="glow-button-secondary"
                style={{ textDecoration: 'none' }}
              >
                <Download size={16} /> Download Resume
              </a>
            </div>

            {/* Social Links */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <span style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Connect
              </span>
              <div style={{ width: '40px', height: '1px', background: 'rgba(255,255,255,0.1)' }} />
              <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                className="hero-social-link" title="GitHub"
                style={{ color: 'var(--text-muted)' }}>
                <GithubIcon size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                className="hero-social-link" title="LinkedIn"
                style={{ color: 'var(--text-muted)' }}>
                <LinkedinIcon size={20} />
              </a>
              <a href="mailto:nikitha@example.com"
                className="hero-social-link" title="Email"
                style={{ color: 'var(--text-muted)' }}>
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* ── RIGHT: Profile Picture ── */}
          <div className="hero-profile-col">
            <div className="profile-pic-wrapper">
              {/* Decorative ring */}
              <div className="profile-ring-outer" />
              <div className="profile-ring-inner" />
              {/* Photo */}
              <img
                src={profilePic}
                alt="Nikitha — Full Stack Developer"
                className="profile-pic-img"
              />
              {/* Floating badge */}
              <div className="profile-float-badge">
                <span style={{ fontSize: '18px' }}>💻</span>
                <div>
                  <p style={{ fontSize: '11px', fontWeight: '700', color: 'white', margin: 0 }}>Full Stack</p>
                  <p style={{ fontSize: '10px', color: 'var(--accent-cyan)', margin: 0 }}>Developer</p>
                </div>
              </div>
              <div className="profile-float-badge-2">
                <span style={{ fontSize: '18px' }}>🎓</span>
                <div>
                  <p style={{ fontSize: '11px', fontWeight: '700', color: 'white', margin: 0 }}>KL University</p>
                  <p style={{ fontSize: '10px', color: 'var(--accent-purple)', margin: 0 }}>B.Tech CSE</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator" onClick={() => handleScrollTo('about')}>
        <span style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: '600' }}>Scroll</span>
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
