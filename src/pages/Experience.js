import React, { useMemo, useState } from 'react';
import './Experience.css';

function Experience() {
  const [sortField, setSortField] = useState('date'); // 'date' | 'title'
  const [ascending, setAscending] = useState(false); // newest first by default

  const experiences = useMemo(
    () => [
      {
        title:
          'Teaching Assistant – Introduction to Computing and Programming with Python (CMPG111)',
        organization:
          'North-West University – School of Computer Science and Information Systems',
        start: '2025-02',
        end: '2025-06',
        details:
          'Assisting during practical sessions, Facilitating tutorial sessions, Invigilating during assessments, Evaluating, reviewing, moderating, marking and grading assessments, Contributing to course development.',
      },
      {
        title:
          'Teaching Assistant – User Interface Programming with C# (CMPG122)',
        organization:
          'North-West University – School of Computer Science and Information Systems',
        start: '2025-07',
        end: '2025-12',
        details:
          'Assisting during practical sessions, invigilating during assessments, Evaluating, reviewing, moderating, marking and grading assessments, Contributing to course development.',
      },
    ],
    []
  );

  const sorted = useMemo(() => {
    const arr = [...experiences];
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
  }, [experiences, sortField, ascending]);

  return (
    <div className="experience-container">
      <div className="section-heading"> Experience </div>
      <div className="controls-container">
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
  const [sy, sm] = start.split('-').map((v) => parseInt(v, 10));
  const [ey, em] = end.split('-').map((v) => parseInt(v, 10));
  const fmt = (y, m) =>
    new Date(y, m - 1, 1).toLocaleString(undefined, {
      month: 'long',
      year: 'numeric',
    });
  return `${fmt(sy, sm)} – ${fmt(ey, em)}`;
}

export default Experience;
