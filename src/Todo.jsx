import React from "react";

export default function Todo(props){
    return (
        <div className="todo" onClick={props.toggle}>
            <div className={!props.checked ? "todo-checkbox" : "todo-checkbox-checked"}></div>
            <div className={!props.checked ? "todo-text" : "todo-text-completed"}>{props.text}</div>
        </div>
    )
}