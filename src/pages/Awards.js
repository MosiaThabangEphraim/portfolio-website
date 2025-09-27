import React, { useMemo, useState } from 'react';
import './Awards.css';
import fnasAwardImg from '../assets/fnas-deans-award.jpg';
import goldenKeyPDF from '../assets/golden-key-certificate.pdf';

function Awards() {
  const [sortField, setSortField] = useState('year'); // 'year' | 'title'
  const [ascending, setAscending] = useState(false); // default: newest first

  const awards = useMemo(
    () => [
      {
        title: 'GradStar 2025 Top 100',
        organization: 'GradStar Awards',
        year: 2025,
        description:
          'GradStar awards recognizes the Top 100 students across the country based on leadership qualities and readiness for the workplace.',
        certificateUrl: '#',
        certificateLabel: 'Certificate Coming Soon',
      },
      {
        title: "Faculty of Natural and Agricultural Sciences Dean's Award",
        organization: 'North-West University, Vanderbijlpark Campus',
        year: 2025,
        description:
          'Presented to the top two performing students in each school in the faculty per campus. Recognizes my outstanding academic performance for the 2024 academic year with a year average of 86%.',
        certificateUrl: fnasAwardImg,
        certificateLabel: 'Download Certificate (Image)',
      },
      {
        title: 'Golden Key Honour Society Member',
        organization: 'Golden Key International Honour Society',
        year: 2025,
        description:
          'Recognizes top-performing students within the top 15% in their field. An invitation-only society celebrating academic excellence, leadership, and service.',
        certificateUrl: goldenKeyPDF,
        certificateLabel: 'Download Certificate (PDF)',
      },
    ],
    []
  );

  const sortedAwards = useMemo(() => {
    const items = [...awards];
    items.sort((a, b) => {
      if (sortField === 'title') {
        const comp = a.title.localeCompare(b.title);
        return ascending ? comp : -comp;
      }
      // sort by year
      const comp = (a.year || 0) - (b.year || 0);
      return ascending ? comp : -comp;
    });
    return items;
  }, [awards, sortField, ascending]);

  return (
    <div className="awards-container">
      <div className="section-heading"> Awards </div>
      <div className="controls-container">
        <div className="control-group">
          <label> Sort By </label>{' '}
          <select
            value={sortField}
            onChange={(e) => setSortField(e.target.value)}
          >
            <option value="year"> Year </option>{' '}
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
              setSortField('year');
              setAscending(false);
            }}
          >
            Reset{' '}
          </button>{' '}
        </div>{' '}
      </div>
      {sortedAwards.map((award, idx) => (
        <div key={idx} className="award-block">
          <div className="award-field">
            <div className="award-label"> Title </div>{' '}
            <div className="award-value award-title"> {award.title} </div>{' '}
          </div>{' '}
          <div className="award-field">
            <div className="award-label"> Awarding Organization </div>{' '}
            <div className="award-value award-institution">
              {' '}
              {award.organization}{' '}
            </div>{' '}
          </div>{' '}
          <div className="award-field">
            <div className="award-label"> Year </div>{' '}
            <div className="award-value award-date"> {award.year} </div>{' '}
          </div>{' '}
          <div className="award-field">
            <div className="award-label"> Description </div>{' '}
            <div className="award-value award-description">
              {' '}
              {award.description}{' '}
            </div>{' '}
          </div>{' '}
          <div className="award-field">
            <div className="award-label"> Download Certificate </div>{' '}
            <div className="award-value">
              <a
                href={award.certificateUrl}
                className="award-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {award.certificateLabel}{' '}
              </a>{' '}
            </div>{' '}
          </div>{' '}
        </div>
      ))}{' '}
    </div>
  );
}

export default Awards;
