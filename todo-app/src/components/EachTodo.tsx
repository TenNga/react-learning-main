import React, { memo, useCallback } from 'react'
import { todoType } from '../types'
import { statusOpts } from '../constant'
import { useTodos } from '../hooks/useTodos'


const EachTodo = memo(({todo}:{todo:todoType}) => {
  const { todos, setTodos } = useTodos();

  const handleStatusChange = useCallback((event:React.ChangeEvent<HTMLSelectElement>,todo:todoType) => {
    let targetTodo = 0;
    const allTodos = [...todos];

    todos.forEach((t,i) => {
      if(t.name === todo.name)
        targetTodo = i;
    })
    allTodos[targetTodo] = {name:allTodos[targetTodo].name,status: event.target.value}
    setTodos([...allTodos])
  },[])

  return (
    <li key={todo.name}>
        <label data-testid="todoName">{todo.name}</label>

        <select aria-label="todo status" value={todo.status} onChange={(event)=>handleStatusChange && handleStatusChange(event,todo)} className={`status-${todo.status}`} >
        {statusOpts.map((option) => (
          <option key={option} value={option} className={`status-${option}`}>
            {option}
          </option>
        ))}
      </select>
      </li>
  )
})

export default EachTodo