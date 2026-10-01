import React from 'react';
import { Icon } from './Icon';
import VoiceInputButton from './VoiceInputButton';

// Building blocks shared by every page. Styles live in src/styles/ui.css.

export function PageHeader({ eyebrow, title, subtitle }) {
  return (
    <header className="ui-header">
      {eyebrow && <p className="ui-eyebrow">{eyebrow}</p>}
      <h1 className="ui-title">{title}</h1>
      {subtitle && <p className="ui-subtitle">{subtitle}</p>}
    </header>
  );
}

export function SearchField({ value, onChange, placeholder, label }) {
  return (
    <div className="voice-field ui-search">
      <span className="ui-search-icon">
        <Icon name="search" />
      </span>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label={label}
      />
      <VoiceInputButton onText={onChange} label={label.toLowerCase()} />
    </div>
  );
}

/** Pill-style switch. `options` is a list of [value, text] pairs. */
export function Segmented({ label, options, value, onChange }) {
  return (
    <div className="ui-segmented" role="group" aria-label={label}>
      {options.map(([optionValue, text]) => (
        <button
          key={optionValue}
          type="button"
          className={value === optionValue ? 'selected' : ''}
          aria-pressed={value === optionValue}
          onClick={() => onChange(optionValue)}
        >
          {text}
        </button>
      ))}
    </div>
  );
}

/** Toggles sort direction; `labels` is [ascendingText, descendingText]. */
export function OrderButton({ ascending, onToggle, labels }) {
  const text = ascending ? labels[0] : labels[1];
  return (
    <button
      type="button"
      className="ui-chip-btn"
      onClick={onToggle}
      aria-label={`Order: ${text}. Click to reverse.`}
    >
      <Icon name={ascending ? 'arrow-up' : 'arrow-down'} />
      {text}
    </button>
  );
}

export function ResetButton({ onClick }) {
  return (
    <button type="button" className="ui-text-btn" onClick={onClick}>
      Reset
    </button>
  );
}

/** "3 roles matching “java”" — `noun` is [singular, plural]. */
export function ResultCount({ count, noun, query }) {
  const q = query?.trim();
  return (
    <p className="ui-count" aria-live="polite">
      {count} {count === 1 ? noun[0] : noun[1]}
      {q && ` matching “${q}”`}
    </p>
  );
}

export function EmptyState({ message, actionLabel, onAction }) {
  return (
    <div className="ui-empty">
      <p>{message}</p>
      {onAction && (
        <button type="button" className="ui-text-btn" onClick={onAction}>
          {actionLabel}
        </button>
      )}
    </div>
  );
}

// "North-West University – School of…" -> "NW"
export function initials(name = '') {
  const main = name.split(/\s[–-]\s/)[0];
  return main
    .split(/[\s-]+/)
    .filter((w) => /^[A-Z]/.test(w))
    .slice(0, 2)
    .map((w) => w[0])
    .join('');
}
