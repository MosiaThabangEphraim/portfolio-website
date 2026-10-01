import React from 'react';
import { Link } from 'react-router-dom';
import './Education.css';
import ListenButton from '../components/ListenButton';
import { Icon } from '../components/Icon';
import { PageHeader } from '../components/ui';

const DESCRIPTION =
  'This BSc in Information Technology integrates computer science ' +
  'and information systems, covering areas such as artificial ' +
  'intelligence, networks, security, databases, human-computer ' +
  'interaction, graphics, programming languages, software ' +
  'engineering, bioinformatics, and theoretical computing. It ' +
  'emphasizes the design and analysis of algorithms, software and ' +
  'hardware systems, and the use of experimental and engineering ' +
  'methods. The Information Systems stream focuses on the ' +
  'creation, processing, storage, security, and exchange of ' +
  'digital information in business contexts, including system ' +
  'development and informatics. Graduates are prepared to design, ' +
  'develop, and deliver computerized systems, contribute to ' +
  'information management, create IT solutions, engage in ' +
  'entrepreneurship, and pursue lifelong learning.';

function Education() {
  return (
    <div className="ui-page">
      <PageHeader
        eyebrow="Academics"
        title="Education"
        subtitle="Undergraduate studies in Information Technology."
      />

      <article className="ui-card education-card">
        <div className="education-head">
          <div className="ui-avatar" aria-hidden="true">
            <Icon name="cap" />
          </div>
          <div className="education-heading">
            <h2 className="ui-card-title">
              Bachelor of Science in Information Technology
            </h2>
            <p className="ui-card-sub">North-West University</p>
          </div>
          <ListenButton
            label="degree description"
            text={`Bachelor of Science in Information Technology, North-West University. ${DESCRIPTION}`}
          />
        </div>

        <div className="ui-meta divided">
          <span className="ui-meta-item">
            <Icon name="calendar" />
            2024 – 2026
          </span>
          <span className="ui-badge info">
            <span className="ui-badge-dot" />
            Final year
          </span>
          <span className="ui-badge">Full-time, contact</span>
          <span className="ui-badge">3 years</span>
        </div>

        <p className="ui-card-body">{DESCRIPTION}</p>

        <div className="ui-actions">
          <Link to="/courses" className="ui-btn">
            <Icon name="book" />
            View coursework
          </Link>
          <Link to="/awards" className="ui-btn">
            <Icon name="award" />
            Academic awards
          </Link>
        </div>
      </article>
    </div>
  );
}

export default Education;
