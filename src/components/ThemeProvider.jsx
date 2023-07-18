import React, { useState } from 'react';

const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      <div className={isDarkTheme ? 'dark-theme' : 'light-theme'}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
