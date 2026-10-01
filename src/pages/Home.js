import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import profilePic from '../assets/profile.jpeg';
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
import VoiceInputButton from '../components/VoiceInputButton';
import ListenButton from '../components/ListenButton';
import { Icon } from '../components/Icon';

const FOCUS_AREAS = [
  {
    title: 'Software Engineering',
    text:
      'Building efficient and scalable applications using OOP, data ' +
      'structures, and API development. Focused on clean code, system ' +
      'design, and solving real world problems.',
  },
  {
    title: 'Backend and Systems Development',
    text:
      'Developing REST APIs and backend systems using .NET and database ' +
      'driven solutions. Skilled in CRUD operations, performance ' +
      'optimization, and reliable system design.',
  },
  {
    title: 'Frontend and UI Development',
    text:
      'Creating responsive user interfaces with React, JavaScript, HTML, ' +
      'and CSS. Focused on usability, clean design, and smooth interactive ' +
      'user experiences.',
  },
];

const ABOUT_ME =
  'Final year BSc Information Technology student with a proven track ' +
  'record of strong and consistent academic excellence. Demonstrates a ' +
  'solid understanding of OOP programming concepts in C# and Java, data ' +
  'structures, algorithms, and API development, supported by fair ' +
  'hands-on experience in building real world applications. Passionate ' +
  'about applying technology to solve practical problems while ' +
  'continuously developing technical expertise and professional skills.';

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
      keywords: `${s.name} ${s.group} ${s.category}`,
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

  const runSearch = (input) => {
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

  const handleSearch = (e) => runSearch(e.target.value);

  const handleSelect = (item) => {
    setQuery('');
    setResults([]);
    if (item?.path) {
      if (item.kind === 'page') {
        navigate(item.path);
        return;
      }

      navigate(item.path, {
        state: { searchTerm: item.searchTerm || item.label },
      });
      return;
    }
  };

  return (
    <div className="home-container">
      <div className="home-top">
        <div className="home-copy">
          <div className="home-role">
            Incoming Software Engineer at Investec
          </div>
          <h1 className="home-name">THABANG MOSIA</h1>
          <p className="hero-tagline">
            Final-year BSc Information Technology student at North-West
            University, joining Investec&apos;s Tech Graduate Programme in 2027
            as a Software Engineer in Corporate and Investment Banking.
          </p>
          <div className="home-actions">
            <div className="search-bar-container">
              <div className="voice-field ui-search">
                <span className="ui-search-icon">
                  <Icon name="search" />
                </span>
                <input
                  type="text"
                  placeholder="Search anything…"
                  value={query}
                  onChange={handleSearch}
                  aria-label="Search the site"
                />
                <VoiceInputButton onText={runSearch} label="search the site" />
              </div>
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
              className="ui-btn primary large"
              href={process.env.PUBLIC_URL + '/resume.pdf'}
              download
            >
              <Icon name="download" />
              Download CV
            </a>
          </div>
        </div>
        <div className="hero-avatar">
          <img src={profilePic} alt="Thabang Mosia" />
        </div>
      </div>

      <div className="home-cards">
        {FOCUS_AREAS.map((area) => (
          <div className="ui-card interactive home-card" key={area.title}>
            <h2 className="ui-card-title card-title">{area.title}</h2>
            <p className="ui-card-body card-text">{area.text}</p>
            <div className="card-listen">
              <ListenButton
                label={area.title}
                text={`${area.title}. ${area.text}`}
              />
            </div>
          </div>
        ))}
      </div>

      <section className="ui-card home-about">
        <div className="ui-card-head">
          <h2 className="ui-card-title about-heading">About Me</h2>
          <ListenButton label="About Me" text={ABOUT_ME} />
        </div>
        <p className="ui-card-body">{ABOUT_ME}</p>
      </section>

      <div className="home-footer">
        <div className="home-signature">T. Mosia</div>
      </div>
    </div>
  );
}

export default Home;
