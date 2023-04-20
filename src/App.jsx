import React from "react";
import Todo from "./Todo"
import TopBar from "./TopBar"

export default function App(){
    return (
        <div className="main">
            <TopBar />
            <div className="todo-container">
                <Todo />
                <Todo />
                <Todo />
                <Todo />
            </div>
        </div>
    )
}