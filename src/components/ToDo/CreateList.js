import React, { useState } from 'react';

import { useTheme } from '../store/ThemeContext';

import styles from './CreateList.module.css';

const CreateList = (props) => {
  const darkMode = useTheme();

  const [value, setValue] = useState('');

  const changeHandler = (e) => {
    setValue(e.target.value);
  };

  const clickCheckboxHandler = (e) => {
    e.preventDefault();
    setValue(value);
    props.onAddItem(value);
    setValue('');
  };

  return (
    <form
      onSubmit={clickCheckboxHandler}
      className={`${styles.container} ${darkMode ? styles.dark : ''}`}
    >
      <label className={styles['checkbox-container']} htmlFor='checkbox'>
        <input
          id='checkbox'
          type='checkbox'
          className={`${styles.checkbox} ${darkMode ? styles.dark : ''}`}
          onClick={clickCheckboxHandler}
        ></input>
      </label>

      <label className={styles.label} htmlFor='new-todo'>
        <input
          className={darkMode ? styles.dark : ''}
          id='new-todo'
          type='text'
          placeholder='Create a new todo...'
          autoComplete='off'
          value={value}
          onChange={changeHandler}
        ></input>
      </label>
    </form>
  );
};

export default CreateList;
