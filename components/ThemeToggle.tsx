'use client';

import React from 'react';
import { useTheme } from './ThemeProvider';
import styles from './ThemeToggle.module.css';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button 
      className={styles.toggleBtn} 
      onClick={toggleTheme}
      aria-label="Toggle Theme"
    >
      <span className={styles.icon}>{theme === 'light' ? '🌙' : '☀️'}</span>
      <span className={styles.text}>{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
    </button>
  );
}
