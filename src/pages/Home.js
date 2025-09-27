import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import profilePic from '../assets/profile.jpg';
import resumePDF from '../assets/RESUME.pdf';
import ClickSpeedGame from '../components/ClickSpeedGame';
import './Home.css';

function Home() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const items = useMemo(
    () => [
      { label: 'Home', path: '/' },
      { label: 'Education', path: '/education' },
      { label: 'Career', path: '/career' },
      { label: 'Courses', path: '/courses' },
      { label: 'Experience', path: '/experience' },
      { label: 'Skills', path: '/skills' },
      { label: 'Awards', path: '/awards' },
      { label: 'Projects', path: '/projects' },
      { label: 'Certificates', path: '/certificates' },
      { label: 'Links', path: '/links' },
      { label: 'Contact', path: '/contact' },
    ],
    []
  );

  const handleSearch = (e) => {
    const input = e.target.value;
    setQuery(input);
    if (input.length === 0) {
      setResults([]);
    } else {
      const filtered = items
        .map((i) => i.label)
        .filter((label) => label.toLowerCase().includes(input.toLowerCase()));
      setResults(filtered);
    }
  };

  const handleSelect = (item) => {
    setQuery('');
    setResults([]);
    const match = items.find(
      (i) => i.label.toLowerCase() === item.toLowerCase()
    );
    if (match) {
      navigate(match.path);
    }
  };

  return (
    <div className="home-container">
      <div className="main-content">
        <div className="left-side">
          <img src={profilePic} alt="Profile" className="profile-pic" />
          <div className="resume-download">
            <div className="resume-field">
              <div className="resume-label"> Download Resume </div>{' '}
              <div className="resume-value">
                <a
                  href={process.env.PUBLIC_URL + '/RESUME.pdf'}
                  className="award-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Thabang_Mosia_Resume.pdf"
                >
                  Download Resume (PDF){' '}
                </a>{' '}
              </div>{' '}
            </div>
          </div>
        </div>{' '}
        <div className="right-side">
          <div className="search-bar-container">
            <input
              type="text"
              className="search-bar"
              placeholder="Search anything..."
              value={query}
              onChange={handleSearch}
            />{' '}
            {results.length > 0 && (
              <ul className="dropdown-list">
                {' '}
                {results.map((item, idx) => (
                  <li key={idx} onClick={() => handleSelect(item)}>
                    {' '}
                    {item}{' '}
                  </li>
                ))}{' '}
              </ul>
            )}{' '}
          </div>{' '}
          <h1 className="name-heading"> THABANG MOSIA </h1>{' '}
          <p className="bio-text" style={{ textAlign: 'justify' }}>
            I am a second - year BSc Information Technology student at North -
            West University, majoring in Computer Science and Information
            Systems.With a strong academic performance and a passion for tech.I
            have developed practical expertise in software development, cloud
            computing, and programming languages like Java, Python, C#, and
            C++.I am deeply interested in emerging technologies such as AI and
            actively seek opportunities— internships, entry - level roles, or
            mentorships— where I can collaborate, grow, and contribute to
            impactful real - world projects.{' '}
          </p>{' '}
        </div>{' '}
      </div>

      <div className="game-section">
        <ClickSpeedGame />
      </div>
    </div>
  );
}

export default Home;
