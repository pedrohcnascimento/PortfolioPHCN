import React from "react";
import { useTheme } from "../../context/ThemeContext";
import "./ThemeSwitcher.css";

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  const title =
    theme === "dark"
      ? "Switch to light mode"
      : "Switch to dark mode";

  return (
    <div className="theme-switch" onClick={toggleTheme} title={title}>
      <div className={`theme-slider ${theme}`}>
        <span className="theme-icon">
          {theme === "dark" ? "🌙" : "☀️"}
        </span>
      </div>
    </div>
  );
}