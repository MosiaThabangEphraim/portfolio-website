import React, { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Awards.css';
import { awards as awardsData } from '../data/awardsData';

function Awards() {
  const location = useLocation();
  const [sortField, setSortField] = useState('year'); // 'year' | 'title'
  const [ascending, setAscending] = useState(false); // default: newest first
  const [search, setSearch] = useState('');

  const awards = useMemo(() => awardsData, []);

  useEffect(() => {
    const searchTerm = location.state?.searchTerm;
    if (typeof searchTerm === 'string' && searchTerm.trim().length > 0) {
      setSearch(searchTerm.split(' - ')[0]);
    }
  }, [location.state]);

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

  const filteredAwards = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return sortedAwards;
    return sortedAwards.filter((award) => {
      return (
        (award.title || '').toLowerCase().includes(q) ||
        (award.organization || '').toLowerCase().includes(q) ||
        (award.description || '').toLowerCase().includes(q) ||
        String(award.year || '')
          .toLowerCase()
          .includes(q)
      );
    });
  }, [sortedAwards, search]);

  return (
    <div className="awards-container">
      <div className="section-heading"> Awards </div>
      <div className="controls-container">
        <div className="control-group">
          <label> Search </label>{' '}
          <input
            type="text"
            placeholder="Search awards..."
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
              setSearch('');
            }}
          >
            Reset{' '}
          </button>{' '}
        </div>{' '}
      </div>
      {filteredAwards.map((award, idx) => (
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
          {award.certificateUrl && award.certificateUrl !== '#' && (
            <div className="award-field">
              <div className="award-label"> Certificate </div>{' '}
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
            </div>
          )}{' '}
        </div>
      ))}{' '}
    </div>
  );
}

export default Awards;
