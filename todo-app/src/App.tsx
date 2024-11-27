import React, { lazy, Suspense, useEffect } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import { useTodos } from './hooks/useTodos';
import TodoContainer from './containers/TodoContainer';
import Header from './components/Header';
import Filter from './containers/Filter';

function App() {
  const { todos } = useTodos();
  // const TodoContainer = lazy(() => import("./containers/TodoContainer"))
  
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="App">
      <Header />
      <main>
        <div className='add-filter'>
          <div className='task-form'>
            <TodoForm />
          </div>
          <Filter />
        </div>
      {/* <Suspense fallback={<h1>Loading...</h1>}> */}
        {todos && <TodoContainer />}
      {/* </Suspense> */}
      </main>
    </div>
  );
}

export default App;
