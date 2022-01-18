import './App.css';
import TodoList from './components/TodoList';
import ToDosCounter from './components/ToDosCounter';
import React, { useState, useRef, useEffect } from 'react';

function App() {
  const [toDos, setTodos] = useState([ { id: 1, name: 'Dishes', complete: false}, { id: 2, name: 'Laundry', complete: false}]);
  const inputRef = useRef();
  const LOCAL_STORAGE_KEY = 'todoApp.todos';

  const handleOnClick = (e) => {
    const name = inputRef.current.value;
    if (name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, { id: Math.random, name: name, complete: false }];
    })
    inputRef.current.value = null;
  }

  function toggleToDo(id) {
    const newToDos = [...toDos];
    const todo = newToDos.find(todo => todo.id === id)
    todo.complete = !todo.complete;
    setTodos(newToDos);
  }

  function handleClearComplete() {
    const incompleteToDos = toDos.filter( todo => todo.complete === false);
    setTodos(incompleteToDos);
  }

  useEffect( () => {
    const storedToDos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedToDos)  setTodos(storedToDos);
  }, []
  )

  useEffect(() => {
   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(toDos))
 }, [toDos]);

  return (
    <>
      <TodoList toDos={toDos} toggleToDo={toggleToDo}></TodoList>
      <input ref={inputRef} type="text"></input>
      <button onClick={handleOnClick}>Add Todo</button>
      <button onClick={handleClearComplete}>Clear Completed Todos</button>
      <div>
        <ToDosCounter toDos={toDos}></ToDosCounter>
      </div>
    </>
  );
}

export default App;
