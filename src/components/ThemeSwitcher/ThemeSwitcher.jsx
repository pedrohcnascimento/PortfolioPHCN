import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import './ThemeSwitcher.css';

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="theme-switch" onClick={toggleTheme} title={theme === 'dark' ? 'Mudar para modo claro' : 'Mudar para modo escuro'}>
      <div className={`theme-slider ${theme}`}>
        <span className="theme-icon">
          {theme === 'dark' ? '🌙' : '☀️'}
        </span>
      </div>
    </div>
  );
}
