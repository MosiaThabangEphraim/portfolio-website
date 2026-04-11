import React from 'react';
import { HashRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Education from './pages/Education';
import Courses from './pages/Courses';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import Awards from './pages/Awards';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Links from './pages/Links';
import './App.css';

// Modern SVG Icon Component
const IconSvg = ({ type }) => {
  const iconMap = {
    home: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon-svg"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        <polyline points="9 22 9 12 15 12 15 22"></polyline>
      </svg>
    ),
    education: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon-svg"
      >
        <path d="M22 10v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10"></path>
        <polyline points="23 7 12 2 1 7"></polyline>
        <polyline points="16 13 12 11 8 13"></polyline>
      </svg>
    ),

    courses: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon-svg"
      >
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
        <line x1="8" y1="6" x2="16" y2="6"></line>
        <line x1="8" y1="10" x2="16" y2="10"></line>
        <line x1="8" y1="14" x2="16" y2="14"></line>
      </svg>
    ),
    experience: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon-svg"
      >
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
      </svg>
    ),
    skills: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon-svg"
      >
        <circle cx="12" cy="12" r="1"></circle>
        <circle cx="19" cy="12" r="1"></circle>
        <circle cx="5" cy="12" r="1"></circle>
        <circle cx="12" cy="5" r="1"></circle>
        <circle cx="12" cy="19" r="1"></circle>
        <circle cx="17.66" cy="6.34" r="1"></circle>
        <circle cx="6.34" cy="17.66" r="1"></circle>
        <circle cx="6.34" cy="6.34" r="1"></circle>
        <circle cx="17.66" cy="17.66" r="1"></circle>
      </svg>
    ),
    awards: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon-svg"
      >
        <polyline points="12 1 15 11 26 11 17 16 20 26 12 21 4 26 7 16 -2 11 9 11"></polyline>
      </svg>
    ),
    projects: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon-svg"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="2" y1="17" x2="22" y2="17"></line>
        <polyline points="6 21 6 17 18 17 18 21"></polyline>
      </svg>
    ),
    links: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon-svg"
      >
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
      </svg>
    ),
    contact: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon-svg"
      >
        <rect x="2" y="4" width="20" height="16" rx="2"></rect>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
      </svg>
    ),
  };

  return iconMap[type] || iconMap.home;
};

const navItems = [
  { label: 'Home', path: '/', iconType: 'home' },
  { label: 'Education', path: '/education', iconType: 'education' },
  { label: 'Coursework', path: '/courses', iconType: 'courses' },
  { label: 'Experience', path: '/experience', iconType: 'experience' },
  { label: 'Skills', path: '/skills', iconType: 'skills' },
  { label: 'Awards', path: '/awards', iconType: 'awards' },
  { label: 'Projects', path: '/projects', iconType: 'projects' },
  { label: 'Links', path: '/links', iconType: 'links' },
  { label: 'Contact', path: '/contact', iconType: 'contact' },
];

function App() {
  const [sidebarOpen, setSidebarOpen] = React.useState(true);

  return (
    <Router>
      <div className="app-container">
        <button
          className="sidebar-toggle"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          title={sidebarOpen ? 'Close sidebar' : 'Open sidebar'}
          aria-label={sidebarOpen ? 'Close navigation' : 'Open navigation'}
        >
          {sidebarOpen ? '✕' : '☰'}
        </button>
        <aside className={`sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
          <div className="sidebar-logo" />
          <nav className="sidebar-nav">
            <ul>
              {navItems.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    end={item.path === '/'}
                    className={({ isActive }) =>
                      isActive ? 'sidebar-item active' : 'sidebar-item'
                    }
                  >
                    <span className="icon">
                      <IconSvg type={item.iconType} />
                    </span>
                    <span>{item.label}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/education" element={<Education />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/awards" element={<Awards />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/links" element={<Links />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
