import React, { useContext, useState } from "react";
import { Button } from "../share";
import {TodoContext} from "../context/useTodoContext";

const TodoInput = () => {
    const {setTodo} = useContext(TodoContext);
    const [input,setInput] = useState('');

    const handleOnInputChange = (event) => {
        const inputValue = event.target.value;
        setInput(inputValue);
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        const uId = parseInt(Date.now() * Math.random()).toString();
        const todo = {
            id: uId, 
            value: input, 
            isDone: false
        }
        setTodo(todo);
        setInput('');
    }

    return(<div>
        <form className="input-form" onSubmit={handleOnSubmit}>
            <input className="primary-input" type={"text"} value={input} onChange={handleOnInputChange} placeholder="Enter Todo" />
            <Button type={"submit"} primary={true}>Create</Button>
        </form>
    </div>)
}

export default TodoInput;
