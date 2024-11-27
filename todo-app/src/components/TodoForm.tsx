import React, { useRef } from 'react'
import { todoType } from '../types';
import { useTodos } from '../hooks/useTodos';

const TodoForm = () => {

    const inputRef = useRef<HTMLInputElement >(null);
    const {setTodos} = useTodos();
    const handleTodoSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(inputRef.current){
          const newTodo = {
            name: inputRef.current?.value,
            status: 'incomplete'
          }
          setTodos(todos => [...todos,newTodo])
          inputRef.current.value = '';
        }
      }

  return (
    <form role='form' onSubmit={handleTodoSubmit}>
      <label className='visually-hidden' htmlFor="todo-input">Enter Todo Task</label>
              <input id='todo-input' ref={inputRef} type="text" placeholder='Enter Task' required/>
              <button type='submit'>Add</button>
    </form>
  )
}

export default TodoForm