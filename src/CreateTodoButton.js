import './CreateTodoButton.css';

function CreateTodoButton() {
    return (
        <button class="CreateTodoButton"
        onClick={
            (event) => {
                console.log('le diste click')
                console.log(event)}}
        >+</button>
    )
}

export { CreateTodoButton }