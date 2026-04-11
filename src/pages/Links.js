import React from 'react';
import './Links.css';
import { links } from '../data/linksData';

function Links() {
  return (
    <div className="links-container">
      <div className="section-heading"> Links </div>{' '}
      <div className="links-list">
        {links.map((link) => (
          <div key={link.url} className="link-card">
            <div className="link-label"> {link.label} </div>{' '}
            <a
              className="link-anchor"
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.display}{' '}
            </a>{' '}
          </div>
        ))}{' '}
      </div>{' '}
    </div>
  );
}

export default Links;
