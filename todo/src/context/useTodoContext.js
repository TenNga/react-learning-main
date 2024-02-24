import axios from "axios";
import React, { useState, createContext, useCallback } from "react";

const TodoContext = createContext();

const TodoContextProvider = ({children}) => {
    const [state,setState] = useState({todos:[]});

    const fetchTodos = useCallback(async()=>{
        const todos = await axios.get('http://localhost:3005/todos')
        setState({todos:todos});
    },[])

    const createTodo = async(value) => {
        const todo = await axios.post('http://localhost:3005/todos',{value})
        setState({todos:[...state.todos,todo]})
    }

    const updateTodo = async(id,isDoneVal) => {
        const todoUpdated = await axios.put(`http://localhost:3005/todos/${id}`,{isDoneVal:!isDoneVal})
        const updatedTodo = state.todos.map(todo => {
            return todo.id === id? {...todoUpdated}:todo;
        })
        setState({todos:updatedTodo})
    }
    return (
            <TodoContext.Provider value={{state,fetchTodos,setTodo: createTodo,updateTodo}}>
            {children}
            </TodoContext.Provider>
        );

}
export {TodoContext};
export default TodoContextProvider;