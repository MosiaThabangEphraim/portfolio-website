import { useSyncExternalStore } from 'react';

const synth = typeof window !== 'undefined' ? window.speechSynthesis : null;
export const speechSupported =
  !!synth && typeof window.SpeechSynthesisUtterance !== 'undefined';

// Female voices, best first. Neural "Natural" voices (Edge / Windows 11) and
// Apple's Premium/Enhanced voices sound far more human than the defaults.
const FEMALE_VOICES = [
  /\b(Leah|Aria|Jenny|Sonia|Libby|Emma|Ava|Michelle|Natasha|Clara|Molly)\b.*Natural/i,
  /\b(Ava|Samantha|Allison|Susan|Zoe|Serena|Karen|Moira|Tessa|Fiona|Kate)\b.*\((Premium|Enhanced)\)/i,
  /Google UK English Female/i,
  /Google US English/i,
  /\b(Ava|Samantha|Allison|Susan|Zoe|Serena|Karen|Moira|Tessa|Fiona|Kate)\b/i,
  /\bMicrosoft (Zira|Hazel|Susan|Catherine|Heera|Linda)\b/i,
  /\bfemale\b/i,
];

let cachedVoice = null;

function pickVoice() {
  const english = synth.getVoices().filter((v) => /^en\b/i.test(v.lang));
  for (const pattern of FEMALE_VOICES) {
    const match = english.find((v) => pattern.test(v.name));
    if (match) return match;
  }
  return english.find((v) => v.default) || english[0] || null;
}

function getVoice() {
  if (!cachedVoice) cachedVoice = pickVoice();
  return cachedVoice;
}

if (speechSupported) {
  // Voices load asynchronously in most browsers.
  synth.addEventListener?.('voiceschanged', () => {
    cachedVoice = null;
  });
}

// Chrome silently stops utterances longer than ~15s, so speak in short pieces.
const MAX_CHUNK = 200;

function splitIntoChunks(text) {
  const sentences = text.match(/[^.!?]+[.!?]*\s*/g) || [text];
  const chunks = [];
  let current = '';
  sentences.forEach((s) => {
    if ((current + s).length > MAX_CHUNK && current) {
      chunks.push(current.trim());
      current = '';
    }
    current += s;
  });
  if (current.trim()) chunks.push(current.trim());
  return chunks;
}

// One shared speech queue for the whole site, so starting one "Listen"
// button stops any other.
let state = { activeId: null, status: 'idle' }; // status: idle | speaking | paused
const listeners = new Set();
let runId = 0;

function setState(next) {
  state = { ...state, ...next };
  listeners.forEach((l) => l());
}

export function speak(id, text) {
  if (!speechSupported) return;
  const chunks = splitIntoChunks(String(text).replace(/\s+/g, ' ').trim());
  synth.cancel();
  const run = ++runId;
  if (!chunks.length) {
    setState({ activeId: null, status: 'idle' });
    return;
  }
  const voice = getVoice();
  const finish = () => {
    if (runId === run) setState({ activeId: null, status: 'idle' });
  };
  chunks.forEach((chunk, i) => {
    const u = new SpeechSynthesisUtterance(chunk);
    if (voice) {
      u.voice = voice;
      u.lang = voice.lang;
    }
    u.rate = 0.95;
    u.pitch = 1.05;
    if (i === chunks.length - 1) u.onend = finish;
    u.onerror = finish;
    synth.speak(u);
  });
  setState({ activeId: id, status: 'speaking' });
}

export function stopSpeaking() {
  if (!speechSupported) return;
  runId += 1;
  synth.cancel();
  setState({ activeId: null, status: 'idle' });
}

export function pauseSpeaking() {
  if (!speechSupported || !synth.speaking) return;
  synth.pause();
  setState({ status: 'paused' });
}

export function resumeSpeaking() {
  if (!speechSupported || !synth.paused) return;
  synth.resume();
  setState({ status: 'speaking' });
}

function subscribe(listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function useSpeechSynthesis() {
  return useSyncExternalStore(subscribe, () => state);
}
