import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Education from './pages/Education';
import Courses from './pages/Courses';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import Awards from './pages/Awards';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Links from './pages/Links';
import Certificates from './pages/Certificates';
import Career from './pages/Career';

import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav className="navbar">
          <div className="navbar-exit">
            <button 
              className="exit-btn" 
              onClick={() => window.close()}
              title="Close all tabs"
            >
              ✕
            </button>
          </div>
          <ul>
            <li>
              {' '}
              <Link to="/"> Home </Link>{' '}
            </li>{' '}
            <li>
              {' '}
              <Link to="/education"> Education </Link>{' '}
            </li>{' '}
            <li>
              {' '}
              <Link to="/career"> Career </Link>{' '}
            </li>{' '}
            <li>
              {' '}
              <Link to="/courses"> Courses </Link>{' '}
            </li>{' '}
            <li>
              {' '}
              <Link to="/experience"> Experience </Link>{' '}
            </li>{' '}
            <li>
              {' '}
              <Link to="/skills"> Skills </Link>{' '}
            </li>{' '}
            <li>
              {' '}
              <Link to="/awards"> Awards </Link>{' '}
            </li>{' '}
            <li>
              {' '}
              <Link to="/projects"> Projects </Link>{' '}
            </li>{' '}
            <li>
              {' '}
              <Link to="/certificates"> Certificates </Link>{' '}
            </li>{' '}
            <li>
              {' '}
              <Link to="/links"> Links </Link>{' '}
            </li>{' '}
            <li>
              {' '}
              <Link to="/contact"> Contact </Link>{' '}
            </li>{' '}
          </ul>{' '}
        </nav>{' '}
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />{' '}
            <Route path="/education" element={<Education />} />{' '}
            <Route path="/career" element={<Career />} />{' '}
            <Route path="/courses" element={<Courses />} />{' '}
            <Route path="/experience" element={<Experience />} />{' '}
            <Route path="/skills" element={<Skills />} />{' '}
            <Route path="/awards" element={<Awards />} />{' '}
            <Route path="/projects" element={<Projects />} />{' '}
            <Route path="/certificates" element={<Certificates />} />{' '}
            <Route path="/links" element={<Links />} />{' '}
            <Route path="/contact" element={<Contact />} />{' '}
          </Routes>{' '}
        </div>{' '}
      </div>{' '}
    </Router>
  );
}

export default App;
