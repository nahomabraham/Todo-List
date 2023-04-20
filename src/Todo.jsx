import React from "react";

export default function Todo(props){
    return (
        <div className="todo" onClick={props.toggle}>
            <div className={!props.checked ? "todo-checkbox": "todo-checkbox-checked"}></div>
            <div className="todo-text">{props.text}</div>
        </div>
    )
}