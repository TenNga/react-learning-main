import React from "react"

export interface todoType {
    name: string,
    status: string
  }

export interface todoContextProps {
  todos: todoType[],
  todoSetter: (value:todoType[])=>void,
  filterTodos: todoType[], 
  filterTodoSetter: (value:todoType[])=>void, 
  filter: string, 
  filterSetter: (value:string)=>void
}

// export interface filterContextProps {
//   filter: string, 
//   setFilter: React.Dispatch<React.SetStateAction<string>>
// }

// export interface filterTodosContextProps {
//   filterTodos: todoType[], 
//   setFilterTodos: React.Dispatch<React.SetStateAction<todoType[]>>, 
// }