import React from "react";
import ToDo from "./ToDo";

export default function TodoList({toDos, toggleToDo}) {
    return (
        toDos.map( (toDo) => {
            return <ToDo key={toDo.id} toDo={toDo} toggleToDo={toggleToDo}></ToDo>    
        })
    )

}