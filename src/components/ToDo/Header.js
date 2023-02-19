import React, { useState } from "react";

import { ReactComponent as IconMoon } from "../../images/icon-moon.svg";
import { ReactComponent as IconSun } from "../../images/icon-sun.svg";

import styles from "./Header.module.css";

const Header = (props) => {
  const darkModeHandle = () => {
    return props.onDarkMode();
  };

  return (
    <header className={styles.header}>
      <h1>TODO</h1>
      <div>
        <IconMoon
          onClick={darkModeHandle}
          className={props.darkMode ? styles["display-none"] : ""}
        />
        <IconSun
          onClick={darkModeHandle}
          className={props.darkMode ? "" : styles["display-none"]}
        />
      </div>
    </header>
  );
};

export default Header;
