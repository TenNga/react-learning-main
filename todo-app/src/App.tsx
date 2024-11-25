import React, { useEffect } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import { useTodos } from './hooks/useTodos';
import TodoContainer from './containers/TodoContainer';
import Header from './components/Header';
import Filter from './containers/Filter';

function App() {
  const { todos, setTodos } = useTodos();
  
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="App">
      <Header />
      <main>
        <div className='add-filter'>
          <div className='task-form'>
            <TodoForm handleSubmit={setTodos} todos={todos} />
          </div>
          <Filter />
        </div>
        <TodoContainer />
      </main>
    </div>
  );
}

export default App;
