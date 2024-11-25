import React from 'react'
import { useTodos } from '../hooks/useTodos';
import EachTodo from '../components/EachTodo';
import { todoType } from '../types';

const TodoContainer = () => {
    const {todos, setTodos, filterTodos, setFilterTodos } = useTodos();

    const handleStatusChange = (event:React.ChangeEvent<HTMLSelectElement>,todo:todoType) => {
        let targetTodo = 0;
        const allTodos = [...todos];
    
        todos.forEach((t,i) => {
          if(t.name === todo.name)
            targetTodo = i;
        })
        allTodos[targetTodo] = {name:allTodos[targetTodo].name,status: event.target.value}
        setTodos([...allTodos])
      }

    const renderTodos = () => {
        if(filterTodos.length > 0){
          return filterTodos.map(todo => <EachTodo todo={todo} handleStatusChange={handleStatusChange}/>)
        } else {
          return todos.map(todo => <EachTodo todo={todo} handleStatusChange={handleStatusChange}/>)
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