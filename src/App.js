import { TodoCounter } from "./TodoCounter"
import { TodoSearch } from "./TodoSearch"
import { TodoList } from "./TodoList"
import { TodoItem } from "./TodoItem"
import { TodoCreateItem } from "./TodoCreateItem"
import React from "react"
import './App.css';

const defaultTodos = [
  {text: "Cortar cebolla", completed: true},
  {text: "cortar zanahoria", completed: true},
  {text: "comprar comida", completed: false},
  {text: "Cortar pan", completed: false},
]

function App() {
  return (
    <React.Fragment>

      <TodoCounter completed={16} total={30}/>
      <TodoSearch />
  
      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem
          key={todo.text} 
          text={todo.text}
          completed={todo.completed} 
          />
        ))}
      </TodoList>

      <TodoCreateItem />
    </React.Fragment>
  );
}

export default App;
