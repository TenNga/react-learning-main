import React, { createContext, useCallback, useState } from "react";
import { listType, contextType } from "../share/types";

const ShopContext = createContext<contextType>({
    lists: [], 
    addList: () => void 0,
    removeList: () => void 0,
    toggleList: () => void 0
  });

interface Props {
    children?: React.ReactNode
}

function Provider({children}:Props) {
        const [ lists, setList ] = useState<listType[]>([]);

        const addList = useCallback((newList:listType)=>{
            console.log("NewList: ", newList);
            setList([...lists,newList])
        },[lists])

        const removeList = useCallback((value:string)=>{
            const updatedList = lists.filter(list => list.value != value)
            setList(updatedList)
        },[lists])

        const toggleList = useCallback((value:string)=>{
            const updatedList = lists.map(list => {
                if(list.value === value) {
                    return {...list, isDone: !list.isDone};
                } else {
                    return list;
                }

            })
            setList(updatedList)
        },[lists])

    return <ShopContext.Provider value={{lists, addList, removeList, toggleList}}>
        {children}
    </ShopContext.Provider>

}

export { Provider };
export default ShopContext;