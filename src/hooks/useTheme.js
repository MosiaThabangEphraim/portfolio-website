import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'theme';

function getInitialTheme() {
  // index.html sets data-theme before first paint; reuse it so React agrees.
  const preset = document.documentElement.getAttribute('data-theme');
  if (preset === 'light' || preset === 'dark') return preset;
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}

export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', theme === 'dark' ? '#121212' : '#000000');
  }, [theme]);

  // Follow OS changes until the user picks a theme explicitly.
  useEffect(() => {
    const mq = window.matchMedia?.('(prefers-color-scheme: dark)');
    if (!mq) return undefined;
    const onChange = (e) => {
      try {
        if (localStorage.getItem(STORAGE_KEY)) return;
      } catch {
        // storage unavailable: just follow the OS
      }
      setTheme(e.matches ? 'dark' : 'light');
    };
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const setAndStore = useCallback((next) => {
    setTheme(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // private mode etc. — theme still applies for this visit
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setAndStore(theme === 'dark' ? 'light' : 'dark');
  }, [theme, setAndStore]);

  return { theme, setTheme: setAndStore, toggleTheme };
}
