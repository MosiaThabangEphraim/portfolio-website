import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import profilePic from '../assets/profile.jpg';
import resumePDF from '../assets/MOSIA THABANG.pdf';
import { awards } from '../data/awardsData';
import {
  yearOneCourses,
  yearTwoCourses,
  yearThreeCourses,
} from '../data/coursesData';
import { experiences } from '../data/experienceData';
import { projects } from '../data/projectsData';
import { skills } from '../data/skillsData';
import { links } from '../data/linksData';
import './Home.css';

function Home() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const items = useMemo(
    () => [
      { label: 'Home', path: '/' },
      { label: 'Education', path: '/education' },
      { label: 'Coursework', path: '/courses' },
      { label: 'Experience', path: '/experience' },
      { label: 'Skills', path: '/skills' },
      { label: 'Awards', path: '/awards' },
      { label: 'Projects', path: '/projects' },
      { label: 'Links', path: '/links' },
      { label: 'Contact', path: '/contact' },
    ],
    []
  );

  const searchIndex = useMemo(() => {
    const pageItems = items.map((item) => ({
      label: item.label,
      path: item.path,
      kind: 'page',
      searchTerm: item.label,
      keywords: item.label,
    }));

    const awardItems = awards.map((award) => ({
      label: award.title,
      path: '/awards',
      searchTerm: award.title,
      keywords: `${award.title} ${award.organization} ${award.description} ${award.year}`,
    }));

    const allCourses = [
      ...yearOneCourses,
      ...yearTwoCourses,
      ...yearThreeCourses,
    ];
    const courseItems = allCourses.map((course) => ({
      label: `${course.module} (${course.code})`,
      path: '/courses',
      searchTerm: course.code,
      keywords: `${course.module} ${course.code} ${course.type} ${course.result}`,
    }));

    const experienceItems = experiences.map((e) => ({
      label: `${e.title} - ${e.organization}`,
      path: '/experience',
      searchTerm: e.title,
      keywords: `${e.title} ${e.organization} ${e.details} ${e.start} ${e.end}`,
    }));

    const projectItems = projects.map((p) => ({
      label: p.title,
      path: '/projects',
      searchTerm: p.title,
      keywords: `${p.title} ${p.description}`,
    }));

    const skillItems = skills.map((s) => ({
      label: s.name,
      path: '/skills',
      searchTerm: s.name,
      keywords: `${s.name} ${s.category}`,
    }));

    const linkItems = links.map((l) => ({
      label: l.label,
      path: '/links',
      searchTerm: l.label,
      keywords: `${l.label} ${l.url} ${l.display}`,
    }));

    return [
      ...pageItems,
      ...awardItems,
      ...courseItems,
      ...experienceItems,
      ...projectItems,
      ...skillItems,
      ...linkItems,
    ];
  }, [items]);

  const handleSearch = (e) => {
    const input = e.target.value;
    setQuery(input);
    if (input.length === 0) {
      setResults([]);
    } else {
      const q = input.toLowerCase();
      const filtered = searchIndex
        .filter((item) => item.keywords.toLowerCase().includes(q))
        .slice(0, 10);
      setResults(filtered);
    }
  };

  const handleSelect = (item) => {
    setQuery('');
    setResults([]);
    if (item?.path) {
      if (item.kind === 'page') {
        navigate(item.path);
        return;
      }

      navigate(item.path, { state: { searchTerm: item.label } });
      return;
    }
  };

  return (
    <div className="home-container">
      <div className="home-top">
        <div className="home-copy">
          <div className="home-role">
            Aspiring Full Stack Software Developer
          </div>
          <h1 className="home-name">THABANG MOSIA</h1>
          <p className="hero-tagline">
            Aspiring Software Engineer seeking a graduate programme or
            internship to apply my technical skills and kickstart my career.
          </p>
          <div className="home-actions">
            <div className="search-bar-container">
              <input
                type="text"
                className="search-bar"
                placeholder="Search anything..."
                value={query}
                onChange={handleSearch}
              />
              {results.length > 0 && (
                <ul className="dropdown-list">
                  {results.map((item, idx) => (
                    <li key={idx} onClick={() => handleSelect(item)}>
                      {item.label}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <a
              href={resumePDF}
              className="resume-button"
              target="_blank"
              rel="noopener noreferrer"
              download="MOSIA_THABANG_CV.pdf"
            >
              Download CV
            </a>
          </div>
        </div>
        <div className="hero-avatar">
          <img src={profilePic} alt="Profile" />
        </div>
      </div>

      <div className="home-cards">
        <div className="home-card">
          <div className="card-title">Software Engineering</div>
          <div className="card-text">
            Building efficient and scalable applications using OOP, data
            structures, and API development. Focused on clean code, system
            design, and solving real world problems.
          </div>
        </div>
        <div className="home-card">
          <div className="card-title">Backend and Systems Development</div>
          <div className="card-text">
            Developing REST APIs and backend systems using .NET and database
            driven solutions. Skilled in CRUD operations, performance
            optimization, and reliable system design.
          </div>
        </div>
        <div className="home-card">
          <div className="card-title">Frontend and UI Development</div>
          <div className="card-text">
            Creating responsive user interfaces with React, JavaScript, HTML,
            and CSS. Focused on usability, clean design, and smooth interactive
            user experiences.
          </div>
        </div>
      </div>

      <div className="home-about">
        <p>
          Final year BSc Information Technology student with a proven track
          record of strong and consistent academic excellence. Demonstrates a
          solid understanding of OOP programming concepts in C# and Java, data
          structures, algorithms, and API development, supported by fair
          hands-on experience in building real world applications. Passionate
          about applying technology to solve practical problems while
          continuously developing technical expertise and professional skills.
        </p>
      </div>

      <div className="home-footer">
        <div className="home-signature">T. Mosia</div>
      </div>
    </div>
  );
}

export default Home;
