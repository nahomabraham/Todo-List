import React from "react";
import Todo from "./Todo"
import TopBar from "./TopBar"

export default function App(){
    const [todos, setTodos] = React.useState([])
    
    let todosElements = todos.map(todo => <Todo text={todo.text} />)

    function addTodo(){
        setTodos(prevTodos => [
            ...prevTodos,
            {text: "Do this"}
        ])
    }
    return (
        <div className="main">
            <TopBar addTodo={addTodo}/>
            <div className="todo-container">
                {todosElements}
            </div>
        </div>
    )
}