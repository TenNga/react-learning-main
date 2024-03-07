import React,{ useState, createContext } from "react";
import { TodoCard, StateContextType } from './models';

//state = [{id:'',todo:'',onDone:true}]
interface props {
    children: React.ReactNode
}
//   const [todo, setTodo] = useState<string>("");
const useStateContext = createContext<StateContextType | null>(null)

const Provider:React.FC<props> = ({children}) => {
    const [state, setState] = useState<TodoCard[]>([]);
    
      return(<useStateContext.Provider value={{state, setState}}>
        {children}
      </useStateContext.Provider>)
}

export default useStateContext;
export { Provider };
  