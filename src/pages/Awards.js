import React, { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Awards.css';
import { awards as awardsData } from '../data/awardsData';
import ListenButton from '../components/ListenButton';
import { Icon } from '../components/Icon';
import {
  EmptyState,
  OrderButton,
  PageHeader,
  ResetButton,
  ResultCount,
  SearchField,
  Segmented,
} from '../components/ui';

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

  const filteredAwards = useMemo(() => {
    const q = search.trim().toLowerCase();
    const items = [...awards].sort((a, b) => {
      const comp =
        sortField === 'title'
          ? a.title.localeCompare(b.title)
          : (a.year || 0) - (b.year || 0);
      return ascending ? comp : -comp;
    });
    if (!q) return items;
    return items.filter((award) =>
      [award.title, award.organization, award.description, award.year]
        .map((v) => String(v || '').toLowerCase())
        .some((v) => v.includes(q))
    );
  }, [awards, sortField, ascending, search]);

  const isDefault = sortField === 'year' && !ascending && !search;

  return (
    <div className="ui-page">
      <PageHeader
        eyebrow="Recognition"
        title="Awards"
        subtitle="Scholarships, honours and academic awards."
      />

      <div className="ui-toolbar">
        <SearchField
          value={search}
          onChange={setSearch}
          placeholder="Search awards, organisations, years…"
          label="Search awards"
        />
        <Segmented
          label="Sort by"
          options={[
            ['year', 'Year'],
            ['title', 'Title'],
          ]}
          value={sortField}
          onChange={setSortField}
        />
        <OrderButton
          ascending={ascending}
          onToggle={() => setAscending(!ascending)}
          labels={
            sortField === 'year'
              ? ['Oldest first', 'Newest first']
              : ['A to Z', 'Z to A']
          }
        />
        {!isDefault && (
          <ResetButton
            onClick={() => {
              setSortField('year');
              setAscending(false);
              setSearch('');
            }}
          />
        )}
      </div>

      <ResultCount
        count={filteredAwards.length}
        noun={['award', 'awards']}
        query={search}
      />

      {filteredAwards.length === 0 ? (
        <EmptyState
          message="No awards match your search."
          actionLabel="Clear search"
          onAction={() => setSearch('')}
        />
      ) : (
        <div className="ui-grid">
          {filteredAwards.map((award) => (
            <article
              key={award.title}
              className="ui-card interactive award-card"
            >
              <div className="award-top">
                <div className="ui-avatar" aria-hidden="true">
                  <Icon name="award" />
                </div>
                <span className="ui-badge">{award.year}</span>
              </div>
              <h2 className="ui-card-title award-title">{award.title}</h2>
              <p className="ui-card-sub">{award.organization}</p>
              <p className="ui-card-body">{award.description}</p>
              <div className="ui-actions award-actions">
                <ListenButton
                  label={award.title}
                  text={`${award.title}, ${award.organization}, ${award.year}. ${award.description}`}
                />
                {award.certificateUrl && award.certificateUrl !== '#' && (
                  <a
                    href={award.certificateUrl}
                    className="ui-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon name="external" />
                    {award.certificateLabel || 'View certificate'}
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}

export default Awards;
