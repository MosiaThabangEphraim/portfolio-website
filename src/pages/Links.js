import React from 'react';
import './Links.css';
import { links } from '../data/linksData';
import { Icon } from '../components/Icon';
import { PageHeader } from '../components/ui';

const ICONS = { linkedin: 'linkedin', github: 'github' };

// "https://www.linkedin.com/in/name" -> "linkedin.com/in/name"
const prettyUrl = (url) =>
  url
    .replace(/^https?:\/\//, '')
    .replace(/^www\./, '')
    .replace(/\/$/, '');

function Links() {
  return (
    <div className="ui-page">
      <PageHeader
        eyebrow="Connect"
        title="Links"
        subtitle="Find me and my work elsewhere online."
      />

      <div className="ui-grid">
        {links.map((link) => (
          <a
            key={link.url}
            className="ui-card interactive link-card"
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="ui-avatar" aria-hidden="true">
              <Icon name={ICONS[link.label.toLowerCase()] || 'external'} />
            </div>
            <div className="link-text">
              <span className="ui-card-title">{link.label}</span>
              <span className="ui-card-sub link-url">
                {prettyUrl(link.url)}
              </span>
            </div>
            <span className="link-arrow" aria-hidden="true">
              <Icon name="arrow-right" />
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Links;
