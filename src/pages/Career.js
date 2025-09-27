import React from 'react';
import './Career.css';

function Career() {
  return (
    <div className="career-container">
      <div className="section-heading"> Software Developer </div>{' '}
      <div className="career-intro">
        I am passionate about building software that solves real - world
        problems.My journey as a software developer is guided by continuous
        learning, hands - on experience, and a commitment to creating impactful
        applications.{' '}
      </div>{' '}
      <div className="career-stage">
        <div className="career-stage-title">
          {' '}
          Foundations and Learning(Current Stage){' '}
        </div>{' '}
        <ul className="career-list">
          <li>
            {' '}
            Strengthening my understanding of programming languages such as
            Python, C++, C#, and Java.{' '}
          </li>{' '}
          <li>
            {' '}
            Building fundamental skills in data structures, algorithms, object -
            oriented programming, and software development principles.{' '}
          </li>{' '}
          <li>
            {' '}
            Completing small projects and exercises to apply theoretical
            knowledge practically.{' '}
          </li>{' '}
        </ul>{' '}
      </div>{' '}
      <div className="career-stage">
        <div className="career-stage-title">
          {' '}
          Practical Experience and Projects(Short - Term Goal){' '}
        </div>{' '}
        <ul className="career-list">
          <li>
            {' '}
            Developing real - world applications like task management apps,
            personal websites, and productivity tools.{' '}
          </li>{' '}
          <li>
            {' '}
            Gaining experience with databases, local storage, and basic cloud
            integration.{' '}
          </li>{' '}
          <li>
            {' '}
            Exploring front - end frameworks(React, XAML) and back - end
            development(.NET, ASP.NET).{' '}
          </li>{' '}
        </ul>{' '}
      </div>{' '}
      <div className="career-stage">
        <div className="career-stage-title">
          {' '}
          Advanced Skills and Specialization(Mid - Term Goal){' '}
        </div>{' '}
        <ul className="career-list">
          <li>
            {' '}
            Diving into full - stack development to create scalable
            applications.{' '}
          </li>{' '}
          <li>
            {' '}
            Learning about software architecture, API development, and security
            principles.{' '}
          </li>{' '}
          <li>
            {' '}
            Contributing to collaborative projects, internships, or hackathons
            to enhance teamwork and problem - solving skills.{' '}
          </li>{' '}
          <li> Obtain relevant industry certifications. </li>{' '}
        </ul>{' '}
      </div>{' '}
      <div className="career-stage">
        <div className="career-stage-title">
          {' '}
          Professional Growth and Career Development(Long - Term Goal){' '}
        </div>{' '}
        <ul className="career-list">
          <li>
            {' '}
            Becoming a professional software developer capable of delivering
            high - quality solutions.{' '}
          </li>{' '}
          <li>
            {' '}
            Continuously learning new technologies, frameworks, and programming
            paradigms.{' '}
          </li>{' '}
          <li>
            {' '}
            Pursuing opportunities in software engineering, web and mobile app
            development, and cloud computing.{' '}
          </li>{' '}
        </ul>{' '}
      </div>{' '}
    </div>
  );
}

export default Career;
