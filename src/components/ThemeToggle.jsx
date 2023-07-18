import React, { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';
import light from './../image/Frame 2228.svg';
import dark from './../image/Frame 228.svg';
import './../styles/themetoggle.css';

const ThemeToggle = () => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="theme-toggle">
      <button onClick={toggleTheme}>
        <img src={isDarkTheme ? light : dark} alt="Sun Icon" />
      </button>
    </div>
  );
};

export default ThemeToggle;
