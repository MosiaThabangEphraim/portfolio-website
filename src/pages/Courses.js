import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Courses.css';
import {
  EmptyState,
  OrderButton,
  PageHeader,
  ResetButton,
  ResultCount,
  SearchField,
  Segmented,
} from '../components/ui';

const Courses = () => {
  const location = useLocation();
  const yearOneCourses = [
    {
      module: 'Academic Literacy Develoment',
      code: 'ALDE122',
      result: 'Pass',
      type: 'Ancillary',
    },
    {
      module: 'Financial Accountancy',
      code: 'ACCS111',
      result: 'Distinction',
      type: 'Ancillary',
    },
    {
      module: 'Financial Accounting',
      code: 'ACCS121',
      result: 'Distinction',
      type: 'Ancillary',
    },
    {
      module: 'Introduction to Business Management',
      code: 'BMAN111',
      result: 'Pass',
      type: 'Ancillary',
    },
    {
      module: 'Introduction to Computing and Programming (Python)',
      code: 'CMPG111',
      result: 'Distinction',
      type: 'Core',
    },
    {
      module: 'Structured Programming (C++)',
      code: 'CMPG121',
      result: 'Distinction',
      type: 'Core',
    },
    {
      module: 'User Interface Programming 1 (C#)',
      code: 'CMPG122',
      result: 'Distinction',
      type: 'Core',
    },
    {
      module: 'Basic Mathematical Techniques',
      code: 'MTHS113',
      result: 'Distinction',
      type: 'Ancillary',
    },
    {
      module: 'Descriptive Statistics',
      code: 'STTN111',
      result: 'Distinction',
      type: 'Ancillary',
    },
    {
      module: 'Introduction to Statistical Inference 1',
      code: 'STTN121',
      result: 'Distinction',
      type: 'Ancillary',
    },
  ];

  const yearTwoCourses = [
    {
      module: 'Problem Solving for Managers',
      code: 'BMAN223',
      result: 'Distinction',
      type: 'Ancillary',
    },
    {
      module: 'Object Oriented Programming (Java)',
      code: 'CMPG211',
      result: 'Distinction',
      type: 'Core',
    },
    {
      module: 'Applications and Advanced User Interface Programming (C#)',
      code: 'CMPG212',
      result: 'Distinction',
      type: 'Core',
    },
    {
      module: 'Systems Analysis and Design 1',
      code: 'CMPG213',
      result: 'Pass',
      type: 'Core',
    },
    {
      module: 'Communication Skills',
      code: 'CMPG214',
      result: 'Distinction',
      type: 'Core',
    },
    {
      module: 'Information Security',
      code: 'CMPG215',
      result: 'Distinction',
      type: 'Core',
    },
    {
      module: 'Data Structures and Algorithms',
      code: 'CMPG221',
      result: 'Distinction',
      type: 'Core',
    },
    {
      module: 'Data Analytics 2',
      code: 'CMPG222',
      result: 'Distinction',
      type: 'Core',
    },
    {
      module: 'Systems Analysis and Design 2',
      code: 'CMPG223',
      result: 'Distinction',
      type: 'Core',
    },
    {
      module: 'Discrete Mathematics',
      code: 'MTHS225',
      result: 'Distinction',
      type: 'Ancillary',
    },
    {
      module: 'Understanding The Natural World',
      code: 'WVNS211',
      result: 'Distinction',
      type: 'Ancillary',
    },
    {
      module: 'Understanding the Natural World',
      code: 'WVNS221',
      result: 'Pass',
      type: 'Ancillary',
    },
  ];

  const yearThreeCourses = [
    {
      module: 'Databases',
      code: 'CMPG311',
      result: 'Distinction',
      type: 'Core',
    },
    {
      module: 'Decision Support Systems 1',
      code: 'CMPG312',
      result: 'Distinction',
      type: 'Core',
    },
    {
      module: 'Artificial Intelligence',
      code: 'CMPG313',
      result: 'Distinction',
      type: 'Core',
    },
    {
      module: 'Computer Networks',
      code: 'CMPG315',
      result: 'Distinction',
      type: 'Core',
    },
    {
      module: 'Advanced Databases',
      code: 'CMPG321',
      result: 'In Progress',
      type: 'Core',
    },
    {
      module: 'Decision Support Systems 2',
      code: 'CMPG322',
      result: 'In Progress',
      type: 'Core',
    },
    {
      module: 'IT Developments',
      code: 'CMPG323',
      result: 'In Progress',
      type: 'Core',
    },
    {
      module: 'Operating Systems',
      code: 'CMPG324',
      result: 'In Progress',
      type: 'Core',
    },
  ];

  const years = [
    { label: 'Year 1', year: 2024, courses: yearOneCourses, average: '86%' },
    { label: 'Year 2', year: 2025, courses: yearTwoCourses, average: '78%' },
    { label: 'Year 3', year: 2026, courses: yearThreeCourses, average: null },
  ];
  const allCourses = years.flatMap((y) => y.courses);
  const distinctions = allCourses.filter(
    (c) => c.result === 'Distinction'
  ).length;

  const [search, setSearch] = useState('');
  const [sortAsc, setSortAsc] = useState(false);
  const [filterType, setFilterType] = useState('');
  const [filterResult, setFilterResult] = useState('');

  useEffect(() => {
    const searchTerm = location.state?.searchTerm;
    if (typeof searchTerm === 'string' && searchTerm.trim().length > 0) {
      const match = searchTerm.match(/\(([^)]+)\)\s*$/);
      setSearch(match ? match[1] : searchTerm);
    }
  }, [location.state]);

  const matches = (course) => {
    const q = search.trim().toLowerCase();
    const textMatch =
      course.module.toLowerCase().includes(q) ||
      course.code.toLowerCase().includes(q);
    const typeMatch = filterType ? course.type === filterType : true;
    const resultMatch = filterResult ? course.result === filterResult : true;
    return textMatch && typeMatch && resultMatch;
  };

  const visibleYears = (sortAsc ? years : [...years].reverse())
    .map((y) => ({ ...y, filtered: y.courses.filter(matches) }))
    .filter((y) => y.filtered.length > 0);
  const visibleCount = visibleYears.reduce((n, y) => n + y.filtered.length, 0);

  const isDefault = !search && !filterType && !filterResult && !sortAsc;
  const resetFilters = () => {
    setSearch('');
    setFilterType('');
    setFilterResult('');
    setSortAsc(false);
  };

  return (
    <div className="ui-page">
      <PageHeader
        eyebrow="Academics"
        title="Coursework"
        subtitle="Modules for the BSc in Information Technology at North-West University."
      />

      <div className="ui-stats">
        <div className="ui-stat">
          <div className="ui-stat-value">83%</div>
          <div className="ui-stat-label">Overall degree average</div>
        </div>
        <div className="ui-stat">
          <div className="ui-stat-value">86%</div>
          <div className="ui-stat-label">Year 1 average</div>
        </div>
        <div className="ui-stat">
          <div className="ui-stat-value">78%</div>
          <div className="ui-stat-label">Year 2 average</div>
        </div>
        <div className="ui-stat">
          <div className="ui-stat-value">
            {distinctions}
            <span className="stat-of">/{allCourses.length}</span>
          </div>
          <div className="ui-stat-label">Modules with distinction</div>
        </div>
      </div>

      <div className="ui-toolbar">
        <SearchField
          value={search}
          onChange={setSearch}
          placeholder="Search by module or code…"
          label="Search modules"
        />
        <Segmented
          label="Module type"
          options={[
            ['', 'All'],
            ['Core', 'Core'],
            ['Ancillary', 'Ancillary'],
          ]}
          value={filterType}
          onChange={setFilterType}
        />
        <select
          className="ui-select"
          value={filterResult}
          onChange={(e) => setFilterResult(e.target.value)}
          aria-label="Filter by result"
        >
          <option value="">All results</option>
          <option value="Distinction">Distinction</option>
          <option value="Pass">Pass</option>
          <option value="Fail">Fail</option>
          <option value="In Progress">In progress</option>
        </select>
        <OrderButton
          ascending={sortAsc}
          onToggle={() => setSortAsc(!sortAsc)}
          labels={['Oldest first', 'Newest first']}
        />
        {!isDefault && <ResetButton onClick={resetFilters} />}
      </div>

      <ResultCount
        count={visibleCount}
        noun={['module', 'modules']}
        query={search}
      />

      {visibleYears.length === 0 ? (
        <EmptyState
          message="No modules match your filters."
          actionLabel="Clear filters"
          onAction={resetFilters}
        />
      ) : (
        <div className="course-years">
          {visibleYears.map((y) => (
            <section key={y.year} className="ui-card course-year">
              <div className="course-year-head">
                <div>
                  <h2 className="ui-card-title">{y.label}</h2>
                  <p className="ui-card-sub">
                    {y.year} · {y.filtered.length}{' '}
                    {y.filtered.length === 1 ? 'module' : 'modules'}
                  </p>
                </div>
                {y.average ? (
                  <span className="ui-badge solid">Average {y.average}</span>
                ) : (
                  <span className="ui-badge info">
                    <span className="ui-badge-dot" />
                    In progress
                  </span>
                )}
              </div>
              <table className="course-table">
                <thead>
                  <tr>
                    <th scope="col">Module</th>
                    <th scope="col">Code</th>
                    <th scope="col">Result</th>
                  </tr>
                </thead>
                <tbody>
                  {y.filtered.map((course) => (
                    <tr key={course.code}>
                      <td className="course-module">
                        {course.module}
                        {course.type === 'Core' && (
                          <span className="course-core">Core</span>
                        )}
                      </td>
                      <td className="course-code">{course.code}</td>
                      <td className="course-result">
                        <span
                          className={`ui-badge ${RESULT_TONE[course.result] || ''}`}
                        >
                          {course.result}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          ))}
        </div>
      )}
    </div>
  );
};

const RESULT_TONE = {
  Distinction: 'success',
  'In Progress': 'info',
  Fail: 'danger',
};

export default Courses;
