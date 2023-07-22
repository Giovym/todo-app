import React, { useContext, useState } from 'react';

export const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const useThemeUpdate = () => {
  return useContext(ThemeUpdateContext);
};

const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const darkModeHandle = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };
  return (
    <ThemeContext.Provider value={darkMode}>
      <ThemeUpdateContext.Provider value={darkModeHandle}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
