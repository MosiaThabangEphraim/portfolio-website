import React, { useMemo, useState } from 'react';
import './Certificates.css';
import fnbCert from '../assets/FNB APP ACADEMY CERTIFICATE.pdf';
import aiCert from '../assets/AI COURSE CERTIFICATE.pdf';
import introCyberCert from '../assets/INTRODUCTION TO CYBERSECURITY CERTIFICATE.pdf';

function Certificates() {
  const [sortField, setSortField] = useState('date'); // 'date' | 'title'
  const [ascending, setAscending] = useState(false);

  const certificates = useMemo(
    () => [
      {
        title: 'Certificate in Full Stack Development',
        organization: 'FNB App Academy 2025',
        dateDisplay: '16 July 2025',
        isoDate: '2025-07-16',
        description:
          'This 9-week course covered the following concepts: App Strategies, GitHub and Collaboration, Build an App with HTML (the SDLC), Principles of UX Design + Basic Layouts + Transitions, Design Thinking, APIs + Data Input + Processing, User-Centric App Development, Data Management and Analysis, Business Development, Backend Development Intro, Backend Development (Build an API), AI in Development, Business Funding, Marketing your App Business.',
        fileUrl: fnbCert,
      },
      {
        title: 'AI Course',
        organization: 'Microsoft and Durban University of Technology',
        dateDisplay: '21 July 2025',
        isoDate: '2025-07-21',
        description:
          'The course covered: Generative AI, Search Technology, Responsible AI, Microsoft Copilot, AI and Accessibility, AI Fundamentals.',
        fileUrl: aiCert,
      },
      {
        title: 'Introduction to Cyber Security: Stay Safe Online',
        organization: 'The Open University',
        dateDisplay: '8 May 2025',
        isoDate: '2025-05-08',
        description:
          'Provides knowledge to protect digital life and reduce online risks. Covers the threat landscape, authentication, malware (viruses, trojans), networking and communications, cryptography, network security, and responses when defences fail. Learners recognise online threats, understand malware and identity theft, and take steps to safeguard information.',
        fileUrl: introCyberCert,
      },
    ],
    []
  );

  const sorted = useMemo(() => {
    const arr = [...certificates];
    arr.sort((a, b) => {
      if (sortField === 'title') {
        const comp = a.title.localeCompare(b.title);
        return ascending ? comp : -comp;
      }
      const comp = a.isoDate.localeCompare(b.isoDate);
      return ascending ? comp : -comp;
    });
    return arr;
  }, [certificates, sortField, ascending]);

  return (
    <div className="certificates-container">
      <div className="section-heading"> Certificates </div>
      <div className="controls-container">
        <div className="control-group">
          <label> Sort By </label>{' '}
          <select
            value={sortField}
            onChange={(e) => setSortField(e.target.value)}
          >
            <option value="date"> Date </option>{' '}
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
              setSortField('date');
              setAscending(false);
            }}
          >
            {' '}
            Reset{' '}
          </button>{' '}
        </div>{' '}
      </div>
      {sorted.map((c, idx) => (
        <div key={idx} className="certificate-block">
          <div className="certificate-field">
            <div className="certificate-label"> Title </div>{' '}
            <div className="certificate-value certificate-title">
              {' '}
              {c.title}{' '}
            </div>{' '}
          </div>{' '}
          <div className="certificate-field">
            <div className="certificate-label"> Issuing Organization </div>{' '}
            <div className="certificate-value certificate-organization">
              {' '}
              {c.organization}{' '}
            </div>{' '}
          </div>{' '}
          <div className="certificate-field">
            <div className="certificate-label"> Date </div>{' '}
            <div className="certificate-value certificate-year">
              {' '}
              {c.dateDisplay}{' '}
            </div>{' '}
          </div>{' '}
          <div className="certificate-field">
            <div className="certificate-label"> Description </div>{' '}
            <div className="certificate-value certificate-description">
              {' '}
              {c.description}{' '}
            </div>{' '}
          </div>{' '}
          <div className="certificate-field">
            <div className="certificate-label"> Download Certificate </div>{' '}
            <div className="certificate-value">
              <a
                className="certificate-link"
                href={c.fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                Download Certificate(PDF){' '}
              </a>{' '}
            </div>{' '}
          </div>{' '}
        </div>
      ))}{' '}
    </div>
  );
}

export default Certificates;
