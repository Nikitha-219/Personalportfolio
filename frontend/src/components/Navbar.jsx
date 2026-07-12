import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, LogOut, User } from 'lucide-react';
import { authService } from '../services/api';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isAdmin = authService.isAuthenticated();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    authService.logout();
    setIsOpen(false);
    navigate('/');
  };

  const handleNavClick = (sectionId) => {
    setIsOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'Home',          id: 'hero'           },
    { label: 'About',         id: 'about'          },
    { label: 'Skills',        id: 'skills'         },
    { label: 'Education',     id: 'education'      },
    { label: 'Projects',      id: 'projects'       },
    { label: 'Contact',       id: 'contact'        },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container flex-between">

        {/* ── Logo ── */}
        <RouterLink
          to="/"
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '10px',
            fontWeight: '800',
            fontSize: '20px',
            textDecoration: 'none',
            color: 'white',
            flexShrink: 0,
          }}
        >
          <div className="logo-icon" style={{ flexShrink: 0 }}>P</div>
          <span style={{ whiteSpace: 'nowrap' }}>
            Portfolio<span style={{ color: 'var(--accent-cyan)' }}>.</span>
          </span>
        </RouterLink>

        {/* ── Desktop Nav Links ── */}
        <div className="navbar-nav">
          {location.pathname === '/' ? (
            navLinks.map(link => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="navbar-link"
              >
                {link.label}
              </button>
            ))
          ) : (
            <RouterLink to="/" className="navbar-link">Back to Site</RouterLink>
          )}

          {isAdmin ? (
            <div className="flex-center" style={{ gap: '16px' }}>
              <RouterLink
                to="/admin"
                className="navbar-link"
                style={{ color: 'var(--accent-purple)', display: 'flex', alignItems: 'center', gap: '4px' }}
              >
                <User size={16} /> Dashboard
              </RouterLink>
              <button
                onClick={handleLogout}
                className="glow-button-secondary"
                style={{ padding: '8px 16px', fontSize: '12px', borderColor: 'rgba(239,68,68,0.3)', color: '#EF4444' }}
              >
                <LogOut size={14} /> Logout
              </button>
            </div>
          ) : (
            <RouterLink
              to="/admin"
              className="glow-button-secondary"
              style={{ padding: '8px 20px', fontSize: '13px', textDecoration: 'none' }}
            >
              Client Portal
            </RouterLink>
          )}
        </div>

        {/* ── Mobile Toggle ── */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="mobile-nav-toggle"
          style={{ display: 'none', background: 'transparent', border: 'none', color: 'white', cursor: 'pointer' }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* ── Mobile Inline Styles ── */}
      <style>{`
        @media (max-width: 767px) {
          .navbar-nav {
            display: ${isOpen ? 'flex' : 'none'} !important;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            flex-direction: column;
            background: rgba(8, 11, 16, 0.97);
            backdrop-filter: blur(16px);
            padding: 24px;
            gap: 20px;
            align-items: flex-start;
            border-bottom: 1px solid var(--border-color);
          }
          .mobile-nav-toggle {
            display: block !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
