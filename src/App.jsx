import React from "react";
import Todo from "./Todo"
export default function App(){
    return (
        <div className="main">
            <div className="inputs-container">
                <input type="text" placeholder="New task..."/>
                <button>ADD</button>
            </div>
            <div className="tab-bar">
                <input type="radio" id="all" name="status"/>
                <label htmlFor="all">ALL</label>

                <input type="radio" id="active" name="status"/>
                <label htmlFor="active">ACTIVE</label>

                <input type="radio" id="completed" name="status"/>
                <label htmlFor="completed">COMPLETED</label>
            </div>
            <div className="todo-container">
                <Todo />
                <Todo />
                <Todo />
                <Todo />
            </div>
        </div>
    )
}