import React from 'react'
import { useTodos } from '../hooks/useTodos';
import EachTodo from '../components/EachTodo';

const TodoContainer = () => {
    const {todos, filterTodos } = useTodos();

    const renderTodos = () => {
        if(filterTodos.length > 0){
          return filterTodos.map(todo => <EachTodo key={todo.name} todo={todo} />)
        } else {
          return todos.map(todo => <EachTodo key={todo.name} todo={todo} />)
        }
      }

    return (
        <div className='todo-container'>
            <ul className='todo-list'>
                {renderTodos()}
            </ul>
        </div>
    )
}

export default TodoContainer