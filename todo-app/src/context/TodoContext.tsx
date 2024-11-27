import React, { createContext, useContext, useMemo, useState } from 'react'
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

  const shareValue = useMemo(
    () => ({
      todos,
      setTodos,
      filterTodos,
      setFilterTodos,
      filter,
      setFilter,
    }),
    [todos, filterTodos, filter] // Recreate only if these values change
  );

  return(
    <TodoContext.Provider value={shareValue}>
      {children}
    </TodoContext.Provider>
  )

}