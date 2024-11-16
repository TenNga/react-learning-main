import React, { useRef, useState } from 'react';
import './App.css';

interface todoType {
  name: string,
  status: string
}

function App() {
  const [todos, setTodos] = useState<todoType[]>([])
  const [selectedOption, setSelectedOption] = useState<string>('')
  
  const inputRef = useRef<HTMLInputElement >(null);
  const statusOpts = ['incomplete', 'pending', 'complete']

  const handleTodoSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(inputRef.current){
      const newTodo = {
        name: inputRef.current?.value,
        status: 'incomplete'
      }
      setTodos([...todos,newTodo])
      inputRef.current.value = '';
    }
  }

  const handleStatusChange = (event:React.ChangeEvent<HTMLSelectElement>,todo:todoType) => {
    let targetTodo = 0;
    const allTodos = [...todos];
    
    todos.forEach((t,i) => {
      if(t.name === todo.name)
        targetTodo = i;
    })
    allTodos[targetTodo] = {name:allTodos[targetTodo].name,status: event.target.value}
    setTodos([...allTodos])
  }

  const renderTodos = todos.map(todo => {
    return(
      <li key={todo.name}>
        <label>{todo.name}</label>
        <select value={todo.status} onChange={(event)=>handleStatusChange(event,todo)} className={`status-${todo.status}`} >
        {statusOpts.map((option) => (
          <option key={option} value={option} className={`status-${option}`}>
            {option}
          </option>
        ))}
      </select>
      </li>
    )
  })
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo LocalStorage App</h1>
      </header>
      <main>
        <div className='task-form'>
          <form onSubmit={handleTodoSubmit}>
            <input ref={inputRef} type="text" placeholder='Task' required/>
            <button type='submit'>Add</button>
          </form>
        </div>

        <div className='todo-container'>
          <ul className='todo-list'>
            {renderTodos}
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;