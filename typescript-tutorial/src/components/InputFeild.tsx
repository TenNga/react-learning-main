import React, { useRef } from 'react';

interface Props{
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>,
    handleOnSubmit: (e: React.FormEvent)=>void
}

const InputField:React.FC<Props> = ({todo, setTodo, handleOnSubmit}) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const handleFormOnSubmit = (e: React.FormEvent) => {
        handleOnSubmit(e);
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