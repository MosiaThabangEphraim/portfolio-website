import React, { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Projects.css';
import { projects as projectsData } from '../data/projectsData';
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

function Projects() {
  const location = useLocation();
  const [search, setSearch] = useState('');
  const [sortField, setSortField] = useState('year'); // 'year' | 'title'
  const [ascending, setAscending] = useState(false);

  const projects = useMemo(() => projectsData, []);

  useEffect(() => {
    const searchTerm = location.state?.searchTerm;
    if (typeof searchTerm === 'string' && searchTerm.trim().length > 0) {
      setSearch(searchTerm);
    }
  }, [location.state]);

  const sorted = useMemo(() => {
    const q = search.trim().toLowerCase();
    return projects
      .filter((p) =>
        q
          ? p.title.toLowerCase().includes(q) ||
            p.description.toLowerCase().includes(q)
          : true
      )
      .sort((a, b) => {
        const comp =
          sortField === 'title'
            ? a.title.localeCompare(b.title)
            : a.year - b.year || a.title.localeCompare(b.title);
        return ascending ? comp : -comp;
      });
  }, [projects, search, sortField, ascending]);

  const isDefault = sortField === 'year' && !ascending && !search;

  return (
    <div className="ui-page">
      <PageHeader
        eyebrow="Work"
        title="Projects"
        subtitle="Applications I've designed and built, from coursework to full-stack products."
      />

      <div className="ui-toolbar">
        <SearchField
          value={search}
          onChange={setSearch}
          placeholder="Search projects, technologies…"
          label="Search projects"
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
              setSearch('');
              setSortField('year');
              setAscending(false);
            }}
          />
        )}
      </div>

      <ResultCount
        count={sorted.length}
        noun={['project', 'projects']}
        query={search}
      />

      {sorted.length === 0 ? (
        <EmptyState
          message="No projects match your search."
          actionLabel="Clear search"
          onAction={() => setSearch('')}
        />
      ) : (
        <div className="ui-grid projects-grid">
          {sorted.map((p) => (
            <article key={p.title} className="ui-card interactive project-card">
              <div className="project-top">
                <div className="ui-avatar" aria-hidden="true">
                  <Icon name="code" />
                </div>
                <span className="ui-badge">{p.year}</span>
              </div>
              <h2 className="ui-card-title">{p.title}</h2>
              <p className="ui-card-body">{p.description}</p>
              <div className="ui-actions project-actions">
                <ListenButton
                  label={p.title}
                  text={`${p.title}. ${p.description}`}
                />
                {p.repo && (
                  <a
                    href={p.repo}
                    className="ui-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon name="github" />
                    GitHub
                  </a>
                )}
                {p.link && (
                  <a
                    href={p.link}
                    className="ui-btn primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon name="external" />
                    Live project
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

export default Projects;
