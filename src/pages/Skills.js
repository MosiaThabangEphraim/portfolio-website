import React, { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Skills.css';
import { skillGroups } from '../data/skillsData';
import { Icon } from '../components/Icon';
import {
  EmptyState,
  PageHeader,
  ResetButton,
  ResultCount,
  SearchField,
  Segmented,
} from '../components/ui';

const CATEGORIES = [
  ['Technical', 'Technical skills'],
  ['Soft', 'Soft skills'],
];

function Skills() {
  const location = useLocation();
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState(''); // '' | 'Soft' | 'Technical'

  useEffect(() => {
    const searchTerm = location.state?.searchTerm;
    if (typeof searchTerm === 'string' && searchTerm.trim().length > 0) {
      setSearch(searchTerm);
    }
  }, [location.state]);

  // Groups to show, each with only the skills that match the search.
  // Searching a group's name ("databases") shows the whole group.
  const visibleGroups = useMemo(() => {
    const q = search.trim().toLowerCase();
    return skillGroups
      .filter((g) => (categoryFilter ? g.category === categoryFilter : true))
      .map((g) => {
        if (!q || g.title.toLowerCase().includes(q)) return g;
        return {
          ...g,
          skills: g.skills.filter((s) => s.name.toLowerCase().includes(q)),
        };
      })
      .filter((g) => g.skills.length > 0);
  }, [search, categoryFilter]);

  const skillCount = visibleGroups.reduce((n, g) => n + g.skills.length, 0);
  const isDefault = !categoryFilter && !search;

  return (
    <div className="ui-page">
      <PageHeader
        eyebrow="Toolkit"
        title="Skills"
        subtitle="The languages, tools and working skills I bring to a team."
      />

      <div className="ui-toolbar">
        <SearchField
          value={search}
          onChange={setSearch}
          placeholder="Search skills, languages, tools…"
          label="Search skills"
        />
        <Segmented
          label="Category"
          options={[
            ['', 'All'],
            ['Technical', 'Technical'],
            ['Soft', 'Soft'],
          ]}
          value={categoryFilter}
          onChange={setCategoryFilter}
        />
        {!isDefault && (
          <ResetButton
            onClick={() => {
              setSearch('');
              setCategoryFilter('');
            }}
          />
        )}
      </div>

      <ResultCount
        count={skillCount}
        noun={['skill', 'skills']}
        query={search}
      />

      {visibleGroups.length === 0 ? (
        <EmptyState
          message="No skills match your search."
          actionLabel="Clear filters"
          onAction={() => {
            setSearch('');
            setCategoryFilter('');
          }}
        />
      ) : (
        CATEGORIES.map(([category, heading]) => {
          const groups = visibleGroups.filter((g) => g.category === category);
          if (groups.length === 0) return null;
          return (
            <section key={category} className="skills-section">
              <h2 className="ui-section-title">{heading}</h2>
              <div className="skills-grid">
                {groups.map((g) => (
                  <SkillGroup key={g.title} group={g} />
                ))}
              </div>
            </section>
          );
        })
      )}
    </div>
  );
}

function SkillGroup({ group }) {
  const hasLevels = group.skills.some((s) => s.level);
  return (
    <article className="ui-card skill-group">
      <header className="skill-group-head">
        <div className="ui-avatar soft" aria-hidden="true">
          <Icon name={group.icon} />
        </div>
        <div>
          <h3 className="skill-group-title">{group.title}</h3>
          <p className="ui-card-sub">
            {group.skills.length}{' '}
            {group.skills.length === 1 ? 'skill' : 'skills'}
          </p>
        </div>
      </header>

      {hasLevels ? (
        <ul className="skill-rows">
          {group.skills.map((s) => (
            <li key={s.name}>
              <span className="skill-row-name">{s.name}</span>
              {s.level && (
                <span
                  className={`ui-badge ${s.level === 'Proficient' ? 'solid' : ''}`}
                >
                  {s.level}
                </span>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <ul className="skill-tags">
          {group.skills.map((s) => (
            <li key={s.name} className="skill-tag">
              {s.name}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}

export default Skills;
