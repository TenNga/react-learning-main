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

  const shareTodo = useMemo(
    () => ({
      todos,
      todoSetter: (value:todoType[])=>setTodos(value),
    }),
    [todos] // Recreate only if these values change
  );

  const shareFilter = useMemo(()=>({
    filter,
    filterSetter: (value:string) => setFilter(value),
  }),[filter])

  const shareFilterTodos = useMemo(()=>({
      filterTodos,
      filterTodoSetter: (value:todoType[]) =>setFilterTodos(value),
  }),[filterTodos])

  return(
    <TodoContext.Provider value={{...shareTodo,...shareFilter,...shareFilterTodos}}>
      {children}
    </TodoContext.Provider>
  )

}