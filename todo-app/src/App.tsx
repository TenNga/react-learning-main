import React, { useRef, useState } from 'react';
import './App.css';

type todoType = {
  name: string,
  status: string
}

function App() {
  const [todos, setTodos] = useState<todoType[]>([])
  
  const inputRef = useRef<HTMLInputElement >(null);

  const handleTodoSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(inputRef.current){
      const newTodo = {
        name: inputRef.current?.value,
        status: 'incomplete'
      }
      setTodos([...todos,newTodo])
    }
  }

  const renderTodos = todos.map(todo => {
    return(
      <li key={todo.name}>
        <input type="checkbox" />
        <label>{todo.name}</label>
      </li>
    )
  })
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo LocalStorage App</h1>
      </header>
      <main>
        <form onSubmit={handleTodoSubmit}>
          <input ref={inputRef} type="text" placeholder='Task' required/>
          <button type='submit'>Add</button>
        </form>

        <div>
          <ul>
            {renderTodos}
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;
