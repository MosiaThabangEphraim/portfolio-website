import { useCallback, useEffect, useRef, useState } from 'react';
import { stopSpeaking } from './useSpeechSynthesis';

const Recognition =
  typeof window !== 'undefined'
    ? window.SpeechRecognition || window.webkitSpeechRecognition
    : null;

export const recognitionSupported = !!Recognition;

const ERROR_MESSAGES = {
  'not-allowed': 'Microphone access was blocked.',
  'service-not-allowed': 'Speech recognition is not allowed here.',
  'audio-capture': 'No microphone was found.',
  network: 'Speech recognition needs a network connection.',
};

// Browsers only allow one recognition session at a time.
let activeSession = null;

/**
 * Speech recognition for a single field. `onResult(transcript, isFinal)` is
 * called for every result; the latest handler is always used.
 * With `continuous`, listening keeps going until `stop()` is called.
 */
export function useSpeechRecognition({ onResult, continuous = false }) {
  const [listening, setListening] = useState(false);
  const [error, setError] = useState('');
  const sessionRef = useRef(null);
  const wantListening = useRef(false);
  const onResultRef = useRef(onResult);
  onResultRef.current = onResult;

  const stop = useCallback(() => {
    wantListening.current = false;
    sessionRef.current?.stop();
    setListening(false);
  }, []);

  const start = useCallback(() => {
    if (!Recognition) return;
    activeSession?.abort();
    // Don't let the microphone pick up the site reading aloud.
    stopSpeaking();
    setError('');

    const r = new Recognition();
    r.continuous = continuous;
    r.interimResults = true;
    const browserLang = navigator.language || '';
    r.lang = browserLang.startsWith('en') ? browserLang : 'en-US';
    r.onresult = (event) => {
      for (let i = event.resultIndex; i < event.results.length; i += 1) {
        const result = event.results[i];
        onResultRef.current?.(result[0].transcript.trim(), result.isFinal);
      }
    };
    r.onerror = (event) => {
      if (event.error === 'aborted') return;
      wantListening.current = false;
      setError(
        event.error === 'no-speech'
          ? 'Didn’t hear anything. Try again.'
          : ERROR_MESSAGES[event.error] || 'Speech recognition failed.'
      );
    };
    // Browsers end sessions after silence; restart while still wanted.
    r.onend = () => {
      // (A session aborted because another field took the mic must not restart.)
      if (continuous && wantListening.current && activeSession === r) {
        try {
          r.start();
          return;
        } catch {
          // fall through to stopped state
        }
      }
      if (activeSession === r) activeSession = null;
      setListening(false);
    };

    wantListening.current = true;
    sessionRef.current = r;
    activeSession = r;
    try {
      r.start();
      setListening(true);
    } catch {
      setError('Speech recognition failed.');
    }
  }, [continuous]);

  useEffect(
    () => () => {
      wantListening.current = false;
      sessionRef.current?.abort();
    },
    []
  );

  return { listening, error, start, stop };
}
