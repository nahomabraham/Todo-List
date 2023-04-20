import React from "react";
import {nanoid} from "nanoid";
import Todo from "./Todo"
import TopBar from "./TopBar"

export default function App(){
    const [todos, setTodos] = React.useState([])
    
    let todosElements = todos.map(todo => 
        <Todo 
            key={todo.id}
            id={todo.id}
            text={todo.text}
            checked={todo.checked}
            toggle={() => toggleCheckbox(todo.id)}
        />
    )

    function addTodo(todoText){
        if (todoText.length === 0){
            alert("Can not add empty todo")
            return
        }
        setTodos(prevTodos => [
            ...prevTodos,
            {text: todoText, checked: false, id: nanoid()}
        ])
    }

    function toggleCheckbox(id){
        setTodos(prevTodos => prevTodos.map(prevTodo => (
            prevTodo.id === id ?
            {...prevTodo, checked: !prevTodo.checked} :
            prevTodo
            )))
    }


    return (
        <div className="main">
            <TopBar addTodo={addTodo} />
            <div className="todo-container">
                {todosElements}
            </div>
        </div>
    )
}