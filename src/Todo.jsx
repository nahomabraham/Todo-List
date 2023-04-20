import React from "react";

export default function Todo(props){
    return (
        <div className="todo">
            <div className="todo-checkbox"></div>
            <div className="todo-text">{props.text}</div>
        </div>
    )
}