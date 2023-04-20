import React from "react";

export default function TopBar(props){
    let todoText = ""
    function handleFieldInput(event) {
        todoText = event.target.value
    }

    return (
        <>
            <div className="inputs-container">
            <input type="text" placeholder="New task..." onChange={handleFieldInput}/>
            <button onClick={() => props.addTodo(todoText)}>ADD</button>
            </div>
            <div className="tab-bar">
                <input type="radio" id="all" name="status"/>
                <label htmlFor="all">ALL</label>

                <input type="radio" id="active" name="status"/>
                <label htmlFor="active">ACTIVE</label>

                <input type="radio" id="completed" name="status"/>
                <label htmlFor="completed">COMPLETED</label>
            </div>
        </>
    )
}