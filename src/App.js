import React, { useState } from 'react';

import Card from './components/UI/Card';
import Header from './components/ToDo/Header';
import CreateList from './components/ToDo/CreateList';
import ListItem from './components/ToDo/ListItem';
import ThemeProvider from './components/store/ThemeContext';

import './App.css';

function App() {
  const [list, setList] = useState([
    { text: 'Complete online JavaScript course', id: 'i1', isChecked: false },
    { text: 'Jog around the park 3x', id: 'i2', isChecked: false },
    { text: '10 minutes meditation', id: 'i3', isChecked: false },
    { text: 'Read for 1 hour', id: 'i4', isChecked: false },
    { text: 'Pick up groceries', id: 'i5', isChecked: false },
    {
      text: 'Complete Todo App on Frontend Mentor',
      id: 'i6',
      isChecked: false,
    },
  ]);

  const addNewItem = (value) => {
    setList((prevList) => {
      return [
        { text: value, id: Math.random().toString(), isChecked: false },
        ...prevList,
      ];
    });
  };

  const deleteItem = (id) => {
    setList(() => {
      return list.filter((item) => id !== item.id);
    });
  };

  const clearCompleted = () => {
    setList(() => {
      return list.filter((item) => item.isChecked === false);
    });
  };

  // const darkModeHandle = () => {
  //   darkMode ? setDarkMode(false) : setDarkMode(true);
  // };

  return (
    <ThemeProvider>
      <Card>
        <Header />
        <CreateList onAddItem={addNewItem} />
        <ListItem
          list={list}
          onDeleteItem={deleteItem}
          onClearCompleted={clearCompleted}
        />
      </Card>
    </ThemeProvider>
  );
}

export default App;
