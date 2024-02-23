import React from "react";

const TodoList = ({todo,updateTodo}) => {

    return <div key={todo.id} className="todo-list">
    <h6>{todo.value}</h6>
    <input type="checkbox" onChange={()=>updateTodo(todo.id)} checked={todo.isDone}/>
</div>
    
}

export default TodoList;