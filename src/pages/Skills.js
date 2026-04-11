import React, { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Skills.css';
import { skills as skillsData } from '../data/skillsData';

function Skills() {
  const location = useLocation();
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState(''); // '' | 'Soft' | 'Technical'
  const [ascending, setAscending] = useState(true);

  const skills = useMemo(() => skillsData, []);

  useEffect(() => {
    const searchTerm = location.state?.searchTerm;
    if (typeof searchTerm === 'string' && searchTerm.trim().length > 0) {
      setSearch(searchTerm);
    }
  }, [location.state]);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return skills
      .filter((s) => (categoryFilter ? s.category === categoryFilter : true))
      .filter((s) => (q ? s.name.toLowerCase().includes(q) : true))
      .sort((a, b) => {
        const comp = a.name.localeCompare(b.name);
        return ascending ? comp : -comp;
      });
  }, [skills, search, categoryFilter, ascending]);

  const renderSkillName = (name) => {
    if (typeof name !== 'string') return name;
    const parts = name.split('\n');
    if (parts.length <= 1) return name;

    const [title, ...lines] = parts;
    return (
      <>
        <span className="skill-title-line">{title}</span>
        <span className="skill-sub-lines">{lines.join('\n')}</span>
      </>
    );
  };

  return (
    <div className="skills-container">
      <div className="section-heading"> Skills </div>{' '}
      <div className="controls-container">
        <div className="control-group">
          <label> Search Skills </label>{' '}
          <input
            type="text"
            placeholder="Search by name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />{' '}
        </div>{' '}
        <div className="control-group">
          <label> Filter by Category </label>{' '}
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            <option value=""> All </option> <option value="Soft"> Soft </option>{' '}
            <option value="Technical"> Technical </option>{' '}
          </select>{' '}
        </div>{' '}
        <div className="control-group">
          <label> Sort by Name </label>{' '}
          <button onClick={() => setAscending(!ascending)}>
            {' '}
            {ascending ? 'Ascending' : 'Descending'}{' '}
          </button>{' '}
        </div>{' '}
        <div className="control-group">
          <label> Reset </label>{' '}
          <button
            onClick={() => {
              setSearch('');
              setCategoryFilter('');
              setAscending(true);
            }}
          >
            Reset{' '}
          </button>{' '}
        </div>{' '}
      </div>{' '}
      <div className="skills-grid">
        {' '}
        {filtered.map((s, i) => (
          <div
            key={i}
            className={`skill-card ${s.category === 'Soft' ? 'soft' : 'technical'}`}
          >
            <div className="skill-name"> {renderSkillName(s.name)} </div>{' '}
            <div className="skill-category"> {s.category} </div>{' '}
          </div>
        ))}{' '}
      </div>{' '}
    </div>
  );
}

export default Skills;
