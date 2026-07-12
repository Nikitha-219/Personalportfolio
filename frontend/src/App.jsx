import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import AdminDashboard from './components/AdminDashboard';

const MainLayout = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Certifications />
      <Contact />
    </>
  );
};

function App() {
  return (
    <Router>
      <div style={{ minHeight: '100vh', background: '#080B10', color: '#F3F4F6' }}>
        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>

        {/* ── Footer ── */}
        <footer style={{
          background: '#040608',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          paddingTop: '48px',
          paddingBottom: '32px'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>

            {/* Top row: Logo + Links */}
            <div style={{
              display: 'flex', flexWrap: 'wrap',
              justifyContent: 'space-between', alignItems: 'flex-start',
              gap: '40px', marginBottom: '40px'
            }}>
              {/* Brand */}
              <div style={{ maxWidth: '280px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                  <div className="logo-icon">P</div>
                  <span style={{ fontWeight: '800', fontSize: '18px', color: 'white' }}>
                    Portfolio<span style={{ color: 'var(--accent-cyan)' }}>.</span>
                  </span>
                </div>
                <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: '1.7' }}>
                  CSE Student & Full Stack Developer at KL University. Building elegant web experiences.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <p style={{ fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: '16px' }}>
                  Quick Links
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {['hero', 'about', 'skills', 'education', 'projects', 'certifications', 'contact'].map(id => (
                    <button
                      key={id}
                      onClick={() => { const el = document.getElementById(id); if (el) el.scrollIntoView({ behavior: 'smooth' }); }}
                      style={{
                        background: 'none', border: 'none', cursor: 'pointer',
                        color: 'var(--text-muted)', fontSize: '13px', fontWeight: '500',
                        textAlign: 'left', textTransform: 'capitalize',
                        transition: 'color 0.2s', padding: 0
                      }}
                      onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-cyan)'}
                      onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
                    >
                      {id.charAt(0).toUpperCase() + id.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <p style={{ fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: '16px' }}>
                  Connect
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {[
                    { label: 'GitHub',   href: 'https://github.com',   color: '#e2e8f0' },
                    { label: 'LinkedIn', href: 'https://linkedin.com', color: '#38BDF8' },
                    { label: 'Email',    href: 'mailto:nikitha@example.com', color: '#10B981' },
                  ].map(s => (
                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                      style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s' }}
                      onMouseEnter={e => e.currentTarget.style.color = s.color}
                      onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
                    >
                      ↗ {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom divider */}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '24px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
              <p style={{ fontSize: '12px', color: '#4B5563', margin: 0 }}>
                © {new Date().getFullYear()} Nikitha. All rights reserved.
              </p>
              <p style={{ fontSize: '12px', color: '#4B5563', margin: 0 }}>
                Built with <span style={{ color: '#38BDF8' }}>React</span> · <span style={{ color: '#22C55E' }}>Spring Boot</span> · <span style={{ color: '#3B82F6' }}>MySQL</span>
              </p>
            </div>
          </div>
        </footer>

      </div>
    </Router>
  );
}

export default App;
