import React from 'react';
import './Links.css';

function Links() {
  return (
    <div className="links-container">
      <div className="section-heading">Links</div>
      <div className="links-list">
        <div className="link-card">
          <div className="link-label">LinkedIn</div>
          <a
            className="link-anchor"
            href="https://www.linkedin.com/in/thabang-mosia-7340742ab"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.linkedin.com/in/thabang-mosia-7340742ab
          </a>
        </div>
        <div className="link-card">
          <div className="link-label">GitHub</div>
          <a
            className="link-anchor"
            href="https://github.com/MosiaThabangEphraim"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/MosiaThabangEphraim
          </a>
        </div>
      </div>
    </div>
  );
}

export default Links;
