import './TodoList.css'

function TodoList({ children }) {
    return (
        <ul classname='TodoList'>
            {children}
        </ul>
    );
  };

export { TodoList };