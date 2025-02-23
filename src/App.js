import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Cortar zanahoria', completed: true },
//   { text: 'Tomar el Curso de Intro a React.js', completed: false },
//   { text: 'Llorar con la Llorona', completed: false },
//   { text: 'LALALALA', completed: false },
//   { text: 'LAL---LALA', completed: false },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));

function useLocalStorage (itemName, initialValue) {

  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;

  if(!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify([initialValue]));
    parsedItem = [];
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = React.useState(parsedItem);


  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return [item, saveItem];
}

function App() {

  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
  const [searchValue, setsearchValue] = React.useState('');

// !! is used to make sure the object is in Boolean, true or false

  const completedTodos = todos.filter(todo => !!todo.completed).length; 
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase()
      const searchText = searchValue.toLowerCase()
      return todoText.includes(searchText);
    }
  );

 
  const completeTodo = (text) => {
    const newTodos = [...todos]; // ... copia y trae toda la informacion de todos
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    )
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  }
  const deleteTodo = (text) => {
    const newTodos = [...todos]; // ... copia y trae toda la informacion de todos
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    )
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }
  
  return (
    <>
      <TodoCounter 
        completed={completedTodos} 
        total={totalTodos} />
      <TodoSearch 
      searchValue={searchValue} 
      setsearchValue={setsearchValue} />

      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      
      <CreateTodoButton />
    </>
  );
}
export default App;