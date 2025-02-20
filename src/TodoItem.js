import './TodoItem.css'

function TodoItem(props) {
    return (
      <li classname='TodoItem'>
        <span classname={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}>V</span>
        <p classname={`TodoItem-p TodoItem-p--complete`}>{props.text}</p>
        <span classname='Icon Icon-delete'>X</span>
      </li>
    )
  }

export { TodoItem };