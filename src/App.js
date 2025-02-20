import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el Curso de Intro a React.js', completed: false },
  { text: 'Llorar con la Llorona', completed: false },
  { text: 'LALALALALA', completed: false },
  { text: 'LALALALALA', completed: false },
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setsearchValue] = React.useState('');

// !! is used to make sure the object is in Boolean, true or false

  const completedTodos = todos.filter(todo => !!todo.completed).length; 
  const totalTodos = todos.length;
 
  console.log('Los usuarios quieren buscar ' + searchValue);
  
  return (
    <>
      <TodoCounter 
        completed={completedTodos} 
        total={totalTodos} />
      <TodoSearch 
      searchValue={searchValue} 
      setsearchValue={setsearchValue} />

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>
      
      <CreateTodoButton />
    </>
  );
}

export default App;