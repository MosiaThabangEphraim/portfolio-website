import React, { useEffect, useId, useRef } from 'react';
import {
  pauseSpeaking,
  resumeSpeaking,
  speak,
  speechSupported,
  stopSpeaking,
  useSpeechSynthesis,
} from '../hooks/useSpeechSynthesis';
import { Icon } from './Icon';
import './Speech.css';

/**
 * Reads `text` aloud. Only one ListenButton plays at a time across the site.
 * `label` names what is read, e.g. "About Me", for screen readers.
 */
function ListenButton({ text, label }) {
  const id = useId();
  const { activeId, status } = useSpeechSynthesis();
  const active = activeId === id;
  const paused = active && status === 'paused';

  const activeIdRef = useRef(activeId);
  activeIdRef.current = activeId;

  // Stop if this section disappears (page change, filtered out).
  useEffect(
    () => () => {
      if (activeIdRef.current === id) stopSpeaking();
    },
    [id]
  );

  if (!speechSupported) return null;

  const onMain = () => {
    if (!active) speak(id, text);
    else if (paused) resumeSpeaking();
    else pauseSpeaking();
  };

  let mainLabel = 'Listen';
  let icon = 'speaker';
  if (active) {
    mainLabel = paused ? 'Resume' : 'Pause';
    icon = paused ? 'play' : 'pause';
  }

  return (
    <span className="listen-controls">
      <button
        type="button"
        className={`listen-btn ${active ? 'active' : ''}`}
        onClick={onMain}
        aria-label={`${mainLabel}${label ? `: ${label}` : ''}`}
      >
        <Icon name={icon} />
        <span>{mainLabel}</span>
      </button>
      {active && (
        <button
          type="button"
          className="listen-btn listen-stop"
          onClick={stopSpeaking}
          aria-label={`Stop reading${label ? ` ${label}` : ''}`}
          title="Stop"
        >
          <Icon name="stop" />
        </button>
      )}
    </span>
  );
}

export default ListenButton;
