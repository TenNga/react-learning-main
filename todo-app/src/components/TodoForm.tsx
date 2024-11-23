import React, { useRef } from 'react'
import { todoType } from '../types';

const TodoForm = ({handleSubmit, todos}:{handleSubmit: React.Dispatch<React.SetStateAction<todoType[]>>, todos: todoType[]}) => {

    const inputRef = useRef<HTMLInputElement >(null);

    const handleTodoSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(inputRef.current){
          const newTodo = {
            name: inputRef.current?.value,
            status: 'incomplete'
          }
          handleSubmit([...todos,newTodo])
          inputRef.current.value = '';
        }
      }

  return (
    <form role='form' onSubmit={handleTodoSubmit}>
              <input ref={inputRef} type="text" placeholder='Task' required/>
              <button type='submit'>Add</button>
    </form>
  )
}

export default TodoForm