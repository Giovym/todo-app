import React from 'react';
import styles from './Card.module.css';

import { useTheme } from '../store/ThemeContext';

const Card = (props) => {
  const darkMode = useTheme();

  return (
    <main className={`${styles['todo-app']} ${darkMode ? styles['dark'] : ''}`}>
      <div className={`${styles.card} ${props.className}`}>
        {props.children}
      </div>
    </main>
  );
};

export default Card;
