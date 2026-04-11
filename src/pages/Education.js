import React from 'react';
import './Education.css';

function Education() {
  return (
    <div className="education-container">
      <h2 className="section-heading"> Education </h2>{' '}
      <div className="education-block">
        <h3 className="education-title">
          Bachelor of Science in Information Technology
        </h3>
        <p className="education-subtitle">
          Computer Sciennce an Information Sytems
        </p>
        <p className="education-school">North-West University</p>
        <p className="education-duration">Year of Study: Final (2024 - 2026)</p>
        <p className="education-subjects"> Type: Fulltime Contact </p>
        <p className="education-subjects"> Duration: 3 Years </p>
        <p className="education-description" style={{ textAlign: 'justify' }}>
          This BSc in Information Technology integrates Computer Science and
          Information Systems, covering areas such as artificial intelligence,
          networks, security, databases, human– computer interaction, graphics,
          programming languages, software engineering, bioinformatics and
          theoretical computing.It emphasizes the design and analysis of
          algorithms, software and hardware systems, and the use of experimental
          and engineering methods.The Information Systems stream focuses on the
          creation, processing, storage, security and exchange of digital
          information in business contexts, including system development and
          informatics.Graduates are prepared to design, develop and deliver
          computerised systems, contribute to information management, create IT
          solutions, engage in entrepreneurship and pursue lifelong
          learning.{' '}
        </p>{' '}
      </div>{' '}
    </div>
  );
}

export default Education;
