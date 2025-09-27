import React, { useMemo, useState } from 'react';
import './Skills.css';

function Skills() {
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState(''); // '' | 'Soft' | 'Technical'
  const [ascending, setAscending] = useState(true);

  const skills = useMemo(
    () => [
      // Soft Skills
      { name: 'Critical and quick thinking', category: 'Soft' },
      {
        name: 'Analysis, Decision Making and Problem Solving',
        category: 'Soft',
      },
      {
        name: 'Ability to Learn, Work and Multitask Under Pressure',
        category: 'Soft',
      },
      { name: 'Creativity', category: 'Soft' },
      { name: 'Teamwork, Cooperation and Collaboration', category: 'Soft' },
      { name: 'Communication', category: 'Soft' },
      { name: 'Adaptability and Flexibility', category: 'Soft' },
      { name: 'Leadership', category: 'Soft' },
      { name: 'Time Management', category: 'Soft' },
      { name: 'Professionalism', category: 'Soft' },
      { name: 'Planning and Organization', category: 'Soft' },
      { name: 'People Management', category: 'Soft' },
      // Technical Skills
      { name: 'Advanced Computer Skills', category: 'Technical' },
      { name: 'Basic Troubleshooting', category: 'Technical' },
      {
        name: 'Software Installation, Updates and Configuration',
        category: 'Technical',
      },
      { name: 'Microsoft Office Suite', category: 'Technical' },
      { name: 'Application Development', category: 'Technical' },
      { name: 'Web Development', category: 'Technical' },
      { name: 'Project Documentation', category: 'Technical' },
      { name: 'Cloud Deployment and Hosting', category: 'Technical' },
      { name: 'Database Design and Programming', category: 'Technical' },
      {
        name: 'Programming Languages: Python, C++, C#, Java, Javascript',
        category: 'Technical',
      },
      {
        name: 'UI Markup & Web Technologies: HTML, CSS, XAML',
        category: 'Technical',
      },
      {
        name: 'Frameworks and Platforms: .NET MAUI, React, .ASP, .NET',
        category: 'Technical',
      },
      {
        name: 'Tools and IDE: Visual Studio, Visual Studio Code, Code::Blocks, Notepad++',
        category: 'Technical',
      },
      {
        name: 'Version Control and Collaboration: GitHub, Discord',
        category: 'Technical',
      },
    ],
    []
  );

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
            <div className="skill-name"> {s.name} </div>{' '}
            <div className="skill-category"> {s.category} </div>{' '}
          </div>
        ))}{' '}
      </div>{' '}
    </div>
  );
}

export default Skills;
