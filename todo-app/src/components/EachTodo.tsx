import React, { memo } from 'react'
import { todoType } from '../types'
import { statusOpts } from '../constant'


const EachTodo = memo(({todo,handleStatusChange}: {todo:todoType,handleStatusChange?: (event: React.ChangeEvent<HTMLSelectElement>, todo: todoType) => void}) => {
  return (
    <li key={todo.name}>
        <label data-testid="todoName">{todo.name}</label>
        <select value={todo.status} onChange={(event)=>handleStatusChange && handleStatusChange(event,todo)} className={`status-${todo.status}`} >
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