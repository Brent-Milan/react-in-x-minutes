import './App.css';
import TodoList from './components/TodoList';
import ToDosCounter from './components/ToDosCounter';
import React, { useState } from 'react';

function App() {
  const [toDos, setTodos] = useState([ { id: 1, name: 'Dishes', complete: false}, { id: 2, name: 'Laundry', complete: false}]);
  return (
    <>
      <TodoList toDos={toDos}></TodoList>
      <input type="text"></input>
      <button>Add Todo</button>
      <button>Clear Completed Todos</button>
      <div>
        <ToDosCounter toDos={toDos}></ToDosCounter>
      </div>
    </>
  );
}

export default App;
