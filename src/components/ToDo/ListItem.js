import React, { useState, useEffect, useReducer } from 'react';

import { useTheme } from '../store/ThemeContext';

import styles from './ListItem.module.css';
import { ReactComponent as ReactCross } from '../../images/icon-cross.svg';

const FILTER_MAP = {
  All: () => true,
  Active: (item) => !item.isChecked,
  Completed: (item) => item.isChecked,
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

const reducer = (state, action) => {
  if (action.type === 'all') {
    return { all: true, active: false, completed: false };
  } else if (action.type === 'active') {
    return { all: false, active: true, completed: false };
  } else if (action.type === 'completed') {
    return { all: false, active: false, completed: true };
  } else {
    return state;
  }
};

const ListItem = (props) => {
  const darkMode = useTheme();

  const [currentFilter, setCurrentFilter] = useState(FILTER_NAMES[0]);

  const filteredList = props.list.filter(FILTER_MAP[currentFilter]);

  const [n, setN] = useState(6);

  const [state, dispatch] = useReducer(reducer, {
    all: true,
    active: false,
    completed: false,
  });

  const allIsClicked = () => {
    setCurrentFilter(FILTER_NAMES[0]);
    dispatch({ type: 'all' });
  };

  const activeIsClicked = () => {
    setCurrentFilter(FILTER_NAMES[1]);
    dispatch({ type: 'active' });
  };

  const completedIsClicked = () => {
    setCurrentFilter(FILTER_NAMES[2]);
    dispatch({ type: 'completed' });
  };

  const deleteItem = (e) => {
    return props.onDeleteItem(e.target.id);
  };

  const clearCompleted = () => {
    return props.onClearCompleted();
  };

  const checkChecked = (e) => {
    const index = props.list.findIndex((obj) => obj.id === e.target.id);
    if (props.list[index].isChecked === false) {
      props.list[index].isChecked = true;
    } else {
      props.list[index].isChecked = false;
    }
    setN(() => {
      return props.list.filter((item) => item.isChecked === false).length;
    });
  };

  useEffect(() => {
    setN(() => {
      return props.list.filter((item) => item.isChecked === false).length;
    });
  });

  return (
    <React.Fragment>
      <div className={`${styles.container} ${darkMode && styles.dark}`}>
        <ul>
          {filteredList.map((item) => (
            <li
              className={`${styles.list} ${darkMode && styles.dark}`}
              key={item.id}
            >
              <label className={styles.label} htmlFor={item.id}>
                <input
                  id={item.id}
                  type='checkbox'
                  className={`${styles.checkbox} ${
                    item.isChecked === true ? styles['checkbox-checked'] : ''
                  } ${darkMode && styles.dark}`}
                  onChange={checkChecked}
                ></input>
                <p
                  className={`${
                    item.isChecked === true ? styles['text-checked'] : ''
                  } ${darkMode && styles.dark}`}
                >
                  {item.text}
                </p>
                <ReactCross
                  id={item.id}
                  onClick={deleteItem}
                  className={styles.cross}
                />
              </label>
            </li>
          ))}
        </ul>
        <footer className={styles.footer}>
          <span
            className={`${styles['items-left']} ${darkMode && styles.dark}`}
          >{`${n} ${n < 2 ? 'item' : 'items'} left`}</span>
          <div
            className={`${styles['filter-container']} ${
              darkMode && styles.dark
            }`}
          >
            <span
              className={`${styles.all} ${
                state.all ? styles['active-filter'] : ''
              }`}
              onClick={allIsClicked}
            >
              All
            </span>
            <span
              className={`${styles.active} ${
                state.active ? styles['active-filter'] : ''
              }`}
              onClick={activeIsClicked}
            >
              Active
            </span>
            <span
              className={`${styles.completed} ${
                state.completed ? styles['active-filter'] : ''
              }`}
              onClick={completedIsClicked}
            >
              Completed
            </span>
          </div>
          <span
            className={`${styles.clear} ${darkMode && styles.dark}`}
            onClick={clearCompleted}
          >
            Clear Completed
          </span>
        </footer>
      </div>
      <div
        className={`${styles['filter-container-mobile']} ${
          darkMode && styles.dark
        }`}
      >
        <span
          className={`${styles.all} ${
            state.all ? styles['active-filter'] : ''
          }`}
          onClick={allIsClicked}
        >
          All
        </span>
        <span
          className={`${styles.active} ${
            state.active ? styles['active-filter'] : ''
          }`}
          onClick={activeIsClicked}
        >
          Active
        </span>
        <span
          className={`${styles.completed} ${
            state.completed ? styles['active-filter'] : ''
          }`}
          onClick={completedIsClicked}
        >
          Completed
        </span>
      </div>
    </React.Fragment>
  );
};

export default ListItem;
