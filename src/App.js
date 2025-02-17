import logo from './platzi.webp';
import './App.css';
// import { link } from 'fs';

function App() {
  return (
    <div className="App">

      <ToDoApp />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edita el archivo <code>src/App.js</code> y guarda para recargar.
        </p>
        <a
          className="App-link"
          href="https://platzi.com/reactjs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function ToDoApp() {
  return (
    <li>
      <span>V</span>
      <p>Programar como genio</p>
      <span>X</span>
    </li>
  )
}

export default App;
