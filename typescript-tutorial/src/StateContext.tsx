import React,{ useContext, useState, createContext, Children } from "react";
import { State, TodoCard, StateContextType } from './models';

//state = [{todo: ['',''],cards: [{id:'',todo:'',onDone:true}]}]
interface props {
    children: React.ReactNode
}
//   const [todo, setTodo] = useState<string>("");
const useStateContext = createContext<StateContextType | null>(null)

const Provider:React.FC<props> = ({children}) => {
    const [state, setState] = useState<State>({
        todos: '',
        cards: []
      });
    
      return(<useStateContext.Provider value={{state, setState}}>
        {children}
      </useStateContext.Provider>)
}

export default useStateContext;
export { Provider };
  