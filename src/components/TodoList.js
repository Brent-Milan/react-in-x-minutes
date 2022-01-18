import React from "react";
import ToDo from "./ToDo";

export default function TodoList({toDos}) {
    return (
        toDos.map( (toDo) => {
            return <ToDo key={toDo.id} toDo={toDo}></ToDo>    
        })
    )

}