import React, { useContext, useEffect } from "react";
import { Header } from './share'
import TodoInput from './components/TodoInput';
import TodoLists from "./components/TodoLists";
import {TodoContext} from "./context/useTodoContext";

const App = () => {

    const { fetchTodos,state } = useContext(TodoContext);

    useEffect(()=> {
        fetchTodos();
        console.log("Fetched Todoes: ",state)
    },[fetchTodos]);

    return <div className="main-container"> 
        <Header>Todo App</Header>
        <TodoInput />
        <TodoLists />
        </div>
}

export default App;