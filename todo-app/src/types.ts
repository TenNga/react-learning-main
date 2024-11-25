import React from "react"

export interface todoType {
    name: string,
    status: string
  }

export interface todoContextProps {
  todos: todoType[],
  setTodos: React.Dispatch<React.SetStateAction<todoType[]>>,
  filterTodos: todoType[], 
  setFilterTodos: React.Dispatch<React.SetStateAction<todoType[]>>, 
  filter: string, 
  setFilter: React.Dispatch<React.SetStateAction<string>>
}