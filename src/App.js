import React, { useState } from "react";

import Card from "./components/UI/Card";
import Header from "./components/ToDo/Header";
import CreateList from "./components/ToDo/CreateList";
import ListItem from "./components/ToDo/ListItem";

import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const [list, setList] = useState([
    { text: "Completare il corso online su TypeScript", id: "i1", isChecked: false },
    { text: "Andare al cinema a guardare Oppenheimer", id: "i2", isChecked: false },
    { text: "Editare le foto del viaggio in Islanda", id: "i3", isChecked: false },
    { text: "Iniziare a leggere un buon libro", id: "i4", isChecked: false },
    { text: "Iniziare un nuovo progetto", id: "i5", isChecked: false },
    {
      text: "Andare a fare la spesa",
      id: "i6",
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

  const darkModeHandle = () => {
    darkMode ? setDarkMode(false) : setDarkMode(true);
  };

  return (
    <div className={`todo-app ${darkMode ? "dark" : ""}`}>
      <Card>
        <Header onDarkMode={darkModeHandle} darkMode={darkMode} />
        <CreateList onAddItem={addNewItem} darkMode={darkMode} />
        <ListItem
          list={list}
          darkMode={darkMode}
          onDeleteItem={deleteItem}
          onClearCompleted={clearCompleted}
        />
      </Card>
    </div>
  );
}

export default App;
