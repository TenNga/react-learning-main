export interface TodoCard{
    id: number | string,
    name: string,
    isDone: boolean
}

export interface StateContextType {
    state: TodoCard[] | [],
    setState: React.Dispatch<React.SetStateAction<TodoCard[]>>
  }