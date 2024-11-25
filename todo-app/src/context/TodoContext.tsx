import React, { createContext, useContext, useState } from 'react'
import { todoContextProps, todoType } from '../types'

export const TodoContext = createContext<todoContextProps | null>(null)

export const TodoProvider = ({children}:{ children: React.ReactNode }) => {
  const [todos, setTodos] = useState<todoType[]>(()=>{
    const storedItems = localStorage.getItem('todos');
    if (storedItems) {
      return(JSON.parse(storedItems));
    } 
    return [];
  })
  const [filterTodos, setFilterTodos] = useState<todoType[]>([])
  const [filter, setFilter] = useState('')

  const shareValue = {
    todos, setTodos, filterTodos, setFilterTodos, filter, setFilter
  }

  return(
    <TodoContext.Provider value={shareValue}>
      {children}
    </TodoContext.Provider>
  )

}