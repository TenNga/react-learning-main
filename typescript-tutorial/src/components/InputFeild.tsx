import React, { useRef, useContext, useState } from 'react';
import { TodoCard } from '../models';
import useStateContext from '../StateContext';

const InputField = () => {
    const {state, setState} = useContext(useStateContext);

    const inputRef = useRef<HTMLInputElement>(null);
    const [todo,setTodo] = useState<string>("");

    const handleFormOnSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newCard:TodoCard = { id: todo, name: todo, isDone: false}
        setState([...state,newCard])
        setTodo("");
        inputRef.current?.focus();
      }

    return (
        <form onSubmit={handleFormOnSubmit}>
            <input ref={inputRef} type='input' placeholder='Todo text' value={todo} onChange={(e)=>setTodo(e.target.value)}/>    
            <button type='submit'>Create</button>
        </form>
        )
}

export default InputField;