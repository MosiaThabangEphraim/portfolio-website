import React from 'react';
import { useTheme } from '../hooks/useTheme';
import { Icon } from './Icon';
import './Speech.css';

// Floating round button in the bottom-right corner, like a chat launcher.
function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Light mode' : 'Dark mode'}
    >
      <Icon name={isDark ? 'sun' : 'moon'} />
    </button>
  );
}

export default ThemeToggle;
