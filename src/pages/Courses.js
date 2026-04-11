import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Courses.css'; // Link to your separate CSS
import academicRecordPDF from '../assets/AcademicRecord_54607949.pdf';

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
      result: 'In Progress',
      type: 'Core',
    },
    {
      module: 'Decision Support Systems 1',
      code: 'CMPG312',
      result: 'In Progress',
      type: 'Core',
    },
    {
      module: 'Artificial Intelligence',
      code: 'CMPG313',
      result: 'In Progress',
      type: 'Core',
    },
    {
      module: 'Computer Networks',
      code: 'CMPG315',
      result: 'In Progress',
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

  const handleSearch = (course) => {
    const lowerSearch = search.toLowerCase();
    return (
      course.module.toLowerCase().includes(lowerSearch) ||
      course.code.toLowerCase().includes(lowerSearch)
    );
  };

  const handleFilter = (course) => {
    const typeMatch = filterType ? course.type === filterType : true;
    const resultMatch = filterResult ? course.result === filterResult : true;
    return typeMatch && resultMatch;
  };

  const renderCourseBlock = (year, courses, average = null) => {
    const filteredCourses = courses.filter(handleSearch).filter(handleFilter);
    const numModules = filteredCourses.length;

    return (
      <div className="course-block">
        <div className="course-title"> {year} </div>{' '}
        <div className="highlight-info"> ALL CORE MODULES ARE HIGHLIGHTED </div>{' '}
        <div className="course-table">
          <div className="course-row course-header">
            <div className="course-module"> Module Description </div>{' '}
            <div className="course-code"> Code </div>{' '}
            <div className="course-result"> Result </div>{' '}
          </div>{' '}
          {filteredCourses.map((course, index) => {
            const isHighlighted = course.code.startsWith('CMPG');
            return (
              <div
                key={index}
                className={`course-row ${isHighlighted ? 'highlighted-module' : ''}`}
              >
                <div className="course-module"> {course.module} </div>{' '}
                <div className="course-code"> {course.code} </div>{' '}
                <div className="course-result"> {course.result} </div>{' '}
              </div>
            );
          })}{' '}
        </div>{' '}
        <div className="course-info">
          <div className="course-modules">
            {' '}
            Number of Modules: {numModules}{' '}
          </div>{' '}
          <div className="course-average">
            {' '}
            Year Average: {average || ''}{' '}
          </div>{' '}
        </div>{' '}
      </div>
    );
  };

  return (
    <div className="course-container">
      <div className="section-heading"> Coursework </div>{' '}
      <div className="overall-average">
        <a
          href={academicRecordPDF}
          className="award-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Academic Record{' '}
        </a>{' '}
      </div>{' '}
      <div className="controls-container">
        <div className="control-group">
          <label> Search Module </label>{' '}
          <input
            type="text"
            placeholder="Search by module or code"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />{' '}
        </div>{' '}
        <div className="control-group">
          <label> Filter by Type </label>{' '}
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option value=""> All Types </option>{' '}
            <option value="Core"> Core </option>{' '}
            <option value="Ancillary"> Ancillary </option>{' '}
          </select>{' '}
        </div>{' '}
        <div className="control-group">
          <label> Filter by Result </label>{' '}
          <select
            value={filterResult}
            onChange={(e) => setFilterResult(e.target.value)}
          >
            <option value=""> All Results </option>{' '}
            <option value="Distinction"> Distinction </option>{' '}
            <option value="Pass"> Pass </option>{' '}
            <option value="Fail"> Fail </option>{' '}
            <option value="In Progress"> In Progress </option>{' '}
          </select>{' '}
        </div>{' '}
        <div className="control-group">
          <label> Sort Year </label>{' '}
          <button onClick={() => setSortAsc(!sortAsc)}>
            {' '}
            {sortAsc ? 'Ascending' : 'Descending'}{' '}
          </button>{' '}
        </div>{' '}
        <div className="control-group">
          <label> Reset Filters </label>{' '}
          <button
            onClick={() => {
              setSearch('');
              setFilterType('');
              setFilterResult('');
              setSortAsc(true);
            }}
          >
            Reset{' '}
          </button>{' '}
        </div>{' '}
      </div>{' '}
      {sortAsc ? (
        <>
          {' '}
          {renderCourseBlock('YEAR 1 - 2024', yearOneCourses, '86%')}{' '}
          {renderCourseBlock('YEAR 2 - 2025', yearTwoCourses, '78%')}{' '}
          {renderCourseBlock(
            'YEAR 3 - 2026',
            yearThreeCourses,
            'In Progress'
          )}{' '}
        </>
      ) : (
        <>
          {' '}
          {renderCourseBlock(
            'YEAR 3 - 2026',
            yearThreeCourses,
            'In Progress'
          )}{' '}
          {renderCourseBlock('YEAR 2 - 2025', yearTwoCourses, '78%')}{' '}
          {renderCourseBlock('YEAR 1 - 2024', yearOneCourses, '86%')}{' '}
        </>
      )}{' '}
      <div className="overall-average">
        The current overall average for the degree is 82%.
      </div>
    </div>
  );
};

export default Courses;
