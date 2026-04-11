import React, { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Projects.css';
import { projects as projectsData } from '../data/projectsData';

function Projects() {
  const location = useLocation();
  const [search, setSearch] = useState('');
  const [ascending, setAscending] = useState(true);

  const projects = useMemo(() => projectsData, []);

  useEffect(() => {
    const searchTerm = location.state?.searchTerm;
    if (typeof searchTerm === 'string' && searchTerm.trim().length > 0) {
      setSearch(searchTerm);
    }
  }, [location.state]);

  const sorted = useMemo(() => {
    const q = search.trim().toLowerCase();
    const arr = [...projects]
      .filter((p) =>
        q
          ? p.title.toLowerCase().includes(q) ||
            p.description.toLowerCase().includes(q)
          : true
      )
      .sort((a, b) => {
        const comp = a.title.localeCompare(b.title);
        return ascending ? comp : -comp;
      });
    return arr;
  }, [projects, search, ascending]);

  return (
    <div className="projects-container">
      <div className="section-heading"> Projects </div>

      <div className="controls-container">
        <input
          type="text"
          placeholder="Search projects..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
        <div className="control-group">
          <label> Sort by Title </label>
          <button onClick={() => setAscending(!ascending)}>
            {ascending ? 'Ascending' : 'Descending'}
          </button>
        </div>
        <button
          onClick={() => {
            setSearch('');
            setAscending(true);
          }}
        >
          Reset
        </button>
      </div>

      <div className="projects-list">
        {sorted.map((p, i) => (
          <div key={i} className="project-card">
            <div className="project-title"> {p.title} </div>
            <div className="project-description"> {p.description} </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
