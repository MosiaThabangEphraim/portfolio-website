import React, { useEffect, useState } from 'react';
import {
  recognitionSupported,
  useSpeechRecognition,
} from '../hooks/useSpeechRecognition';
import { Icon } from './Icon';
import './Speech.css';

/**
 * Microphone button that sits inside a text field (wrap both in
 * `.voice-field`).
 *
 * - mode "search": one phrase; `onText` gets the live transcript (interim and
 *   final) so filters update while the user speaks.
 * - mode "dictate": keeps listening until pressed again; `onText` gets each
 *   finished phrase, for the caller to append.
 */
function VoiceInputButton({ onText, mode = 'search', label = 'search' }) {
  const dictate = mode === 'dictate';
  const { listening, error, start, stop } = useSpeechRecognition({
    continuous: dictate,
    onResult: (transcript, isFinal) => {
      if (dictate) {
        if (isFinal && transcript) onText(transcript);
      } else {
        // Search terms shouldn't end with recogniser punctuation.
        onText(transcript.replace(/[.?!,]+$/, ''));
      }
    },
  });

  const [shownError, setShownError] = useState('');
  useEffect(() => {
    setShownError(error);
    if (!error) return undefined;
    const t = setTimeout(() => setShownError(''), 4000);
    return () => clearTimeout(t);
  }, [error]);

  if (!recognitionSupported) return null;

  const listeningText = dictate
    ? 'Listening… press the mic to finish.'
    : 'Listening…';
  const action = listening ? 'Stop voice input' : `Speak to ${label}`;

  return (
    <>
      <button
        type="button"
        className={`voice-btn ${listening ? 'listening' : ''}`}
        onClick={listening ? stop : start}
        aria-pressed={listening}
        aria-label={action}
        title={action}
      >
        <Icon name="mic" />
      </button>
      <span className="voice-status" role="status" aria-live="polite">
        {shownError || (listening ? listeningText : '')}
      </span>
    </>
  );
}

export default VoiceInputButton;
