import React, { useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Experience.css';
import { experiences as experiencesData } from '../data/experienceData';

function Experience() {
  const location = useLocation();
  const [sortField, setSortField] = useState('date'); // 'date' | 'title'
  const [ascending, setAscending] = useState(false); // newest first by default
  const [search, setSearch] = useState('');

  const experiences = useMemo(() => experiencesData, []);

  React.useEffect(() => {
    const searchTerm = location.state?.searchTerm;
    if (typeof searchTerm === 'string' && searchTerm.trim().length > 0) {
      setSearch(searchTerm);
    }
  }, [location.state]);

  const filteredExperiences = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return experiences;
    return experiences.filter((e) => {
      return (
        (e.title || '').toLowerCase().includes(q) ||
        (e.organization || '').toLowerCase().includes(q) ||
        (e.details || '').toLowerCase().includes(q) ||
        String(e.start || '')
          .toLowerCase()
          .includes(q) ||
        String(e.end || '')
          .toLowerCase()
          .includes(q)
      );
    });
  }, [experiences, search]);

  const sorted = useMemo(() => {
    const arr = [...filteredExperiences];
    arr.sort((a, b) => {
      if (sortField === 'title') {
        const comp = a.title.localeCompare(b.title);
        return ascending ? comp : -comp;
      }
      // date sort by start then end
      const aKey = `${a.start}-${a.end}`;
      const bKey = `${b.start}-${b.end}`;
      const comp = aKey.localeCompare(bKey);
      return ascending ? comp : -comp;
    });
    return arr;
  }, [filteredExperiences, sortField, ascending]);

  return (
    <div className="experience-container">
      <div className="section-heading"> Experience </div>
      <div className="controls-container">
        <div className="control-group">
          <label> Search </label>{' '}
          <input
            type="text"
            placeholder="Search experience..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />{' '}
        </div>{' '}
        <div className="control-group">
          <label> Sort By </label>{' '}
          <select
            value={sortField}
            onChange={(e) => setSortField(e.target.value)}
          >
            <option value="date"> Date </option>{' '}
            <option value="title"> Title </option>{' '}
          </select>{' '}
        </div>{' '}
        <div className="control-group">
          <label> Order </label>{' '}
          <button onClick={() => setAscending(!ascending)}>
            {' '}
            {ascending ? 'Ascending' : 'Descending'}{' '}
          </button>{' '}
        </div>{' '}
        <div className="control-group">
          <label> Reset </label>{' '}
          <button
            onClick={() => {
              setSortField('date');
              setAscending(false);
              setSearch('');
            }}
          >
            Reset{' '}
          </button>{' '}
        </div>{' '}
      </div>
      <div className="experience-list">
        {' '}
        {sorted.map((e, i) => (
          <div key={i} className="experience-card">
            <div className="experience-title"> {e.title} </div>{' '}
            <div className="experience-organization"> {e.organization} </div>{' '}
            <div className="experience-dates">
              {' '}
              {formatMonthRange(e.start, e.end)}{' '}
            </div>{' '}
            <div className="experience-details"> {e.details} </div>{' '}
          </div>
        ))}{' '}
      </div>{' '}
    </div>
  );
}

function formatMonthRange(start, end) {
  const parseDate = (value) => {
    const parts = value.split('-');
    return parts.length === 2
      ? { year: parseInt(parts[0], 10), month: parseInt(parts[1], 10) }
      : { year: parseInt(parts[0], 10), month: null };
  };

  const formatDate = ({ year, month }) =>
    month
      ? new Date(year, month - 1, 1).toLocaleString(undefined, {
          month: 'long',
          year: 'numeric',
        })
      : `${year}`;

  const startDate = parseDate(start);
  if (end === 'Current') {
    return `${formatDate(startDate)} – Current`;
  }

  const endDate = parseDate(end);
  return `${formatDate(startDate)} – ${formatDate(endDate)}`;
}

export default Experience;
