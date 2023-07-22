import React from 'react';

import { useTheme, useThemeUpdate } from '../store/ThemeContext';

import { ReactComponent as IconMoon } from '../../images/icon-moon.svg';
import { ReactComponent as IconSun } from '../../images/icon-sun.svg';

import styles from './Header.module.css';

const Header = () => {
  const darkMode = useTheme();
  const darkModeHandle = useThemeUpdate();
  // console.log(darkModeHandle, darkMode);

  // const darkModeHandle = () => {
  //   setDarkMode((prevDarkMode) => !prevDarkMode);
  // };

  return (
    <header className={styles.header}>
      <h1>TODO</h1>
      <div>
        <IconMoon
          onClick={darkModeHandle}
          className={darkMode ? styles['display-none'] : ''}
        />
        <IconSun
          onClick={darkModeHandle}
          className={darkMode ? '' : styles['display-none']}
        />
      </div>
    </header>
  );
};

export default Header;
