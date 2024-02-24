export interface TodoCard{
    id: number | string,
    name: string,
    isDone: boolean
}

export interface State {
    todos: string,
    cards: TodoCard[]
}

export interface StateContextType {
    state: State
    setState: React.Dispatch<React.SetStateAction<State>>
  }