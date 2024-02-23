import React, { useContext,useId } from "react";
import { TodoContext } from "../context/useTodoContext";
import TodoList from './TodoList';

const TodoLists = () => {
    const {state,updateTodo } = useContext(TodoContext);
    const key = useId;
    
    const renderTodoCards = state.todos.map(todo => {
        return <TodoList key={todo.id} todo={todo} updateTodo={updateTodo} />
    })
    return <div key={key} className="todo-list-container">{state.todos? renderTodoCards: <h5>Create first Todo.</h5>}</div>
}

export default TodoLists;