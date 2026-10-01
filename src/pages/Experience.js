import React, { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Experience.css';
import { experiences as experiencesData } from '../data/experienceData';
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
  initials,
} from '../components/ui';

function Experience() {
  const location = useLocation();
  const [sortField, setSortField] = useState('date'); // 'date' | 'title'
  const [ascending, setAscending] = useState(false); // newest first by default
  const [search, setSearch] = useState('');

  const experiences = useMemo(() => experiencesData, []);

  useEffect(() => {
    const searchTerm = location.state?.searchTerm;
    if (typeof searchTerm === 'string' && searchTerm.trim().length > 0) {
      setSearch(searchTerm);
    }
  }, [location.state]);

  const filteredExperiences = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return experiences;
    return experiences.filter((e) =>
      [e.title, e.organization, e.details, e.start, e.end]
        .map((v) => String(v || '').toLowerCase())
        .some((v) => v.includes(q))
    );
  }, [experiences, search]);

  const sorted = useMemo(() => {
    const arr = [...filteredExperiences];
    arr.sort((a, b) => {
      if (sortField === 'title') {
        const comp = a.title.localeCompare(b.title);
        return ascending ? comp : -comp;
      }
      // date sort by start then end
      const comp = `${a.start}-${a.end}`.localeCompare(`${b.start}-${b.end}`);
      return ascending ? comp : -comp;
    });
    return arr;
  }, [filteredExperiences, sortField, ascending]);

  const isDefault = sortField === 'date' && !ascending && !search;

  return (
    <div className="ui-page">
      <PageHeader
        eyebrow="Career"
        title="Experience"
        subtitle="Software engineering and academic roles."
      />

      <div className="ui-toolbar">
        <SearchField
          value={search}
          onChange={setSearch}
          placeholder="Search roles, organisations, skills…"
          label="Search experience"
        />
        <Segmented
          label="Sort by"
          options={[
            ['date', 'Date'],
            ['title', 'Title'],
          ]}
          value={sortField}
          onChange={setSortField}
        />
        <OrderButton
          ascending={ascending}
          onToggle={() => setAscending(!ascending)}
          labels={
            sortField === 'date'
              ? ['Oldest first', 'Newest first']
              : ['A to Z', 'Z to A']
          }
        />
        {!isDefault && (
          <ResetButton
            onClick={() => {
              setSortField('date');
              setAscending(false);
              setSearch('');
            }}
          />
        )}
      </div>

      <ResultCount
        count={sorted.length}
        noun={['role', 'roles']}
        query={search}
      />

      {sorted.length === 0 ? (
        <EmptyState
          message="No roles match your search."
          actionLabel="Clear search"
          onAction={() => setSearch('')}
        />
      ) : (
        <ol className="exp-timeline">
          {sorted.map((e) => {
            const upcoming = isUpcoming(e.start);
            return (
              <li key={`${e.title}-${e.start}`} className="exp-item">
                <div className="ui-avatar" aria-hidden="true">
                  {initials(e.organization)}
                </div>
                <article className="ui-card interactive">
                  <div className="ui-card-head">
                    <div>
                      <h2 className="ui-card-title">{e.title}</h2>
                      <p className="ui-card-sub">{e.organization}</p>
                    </div>
                    <ListenButton
                      label={e.title}
                      text={`${e.title} at ${e.organization}. ${e.details}`}
                    />
                  </div>
                  <div className="ui-meta divided">
                    <span className="ui-meta-item">
                      <Icon name="calendar" />
                      {upcoming
                        ? `From ${formatDate(parseDate(e.start))}`
                        : formatMonthRange(e.start, e.end)}
                    </span>
                    {upcoming ? (
                      <span className="ui-badge info">
                        <span className="ui-badge-dot" />
                        Upcoming
                      </span>
                    ) : (
                      e.end === 'Current' && (
                        <span className="ui-badge success">
                          <span className="ui-badge-dot" />
                          Current
                        </span>
                      )
                    )}
                  </div>
                  <p className="ui-card-body">{e.details}</p>
                </article>
              </li>
            );
          })}
        </ol>
      )}
    </div>
  );
}

// A role whose start date is still in the future.
function isUpcoming(start) {
  const { year, month } = parseDate(start);
  const now = new Date();
  const startDate = new Date(year, (month || 1) - 1, 1);
  return startDate > now;
}

function parseDate(value) {
  const parts = value.split('-');
  return parts.length === 2
    ? { year: parseInt(parts[0], 10), month: parseInt(parts[1], 10) }
    : { year: parseInt(parts[0], 10), month: null };
}

function formatDate({ year, month }) {
  return month
    ? new Date(year, month - 1, 1).toLocaleString(undefined, {
        month: 'long',
        year: 'numeric',
      })
    : `${year}`;
}

function formatMonthRange(start, end) {
  const startText = formatDate(parseDate(start));
  if (end === 'Current') return `${startText} – Present`;
  return `${startText} – ${formatDate(parseDate(end))}`;
}

export default Experience;
