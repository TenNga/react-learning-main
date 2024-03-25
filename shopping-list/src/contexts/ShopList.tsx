import React, { createContext, useCallback, useState } from "react";
import { listType, contextType } from "../share/types";

const ShopContext = createContext<contextType>({
    lists: [], addList: () => void 0
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

    return <ShopContext.Provider value={{lists, addList}}>
        {children}
    </ShopContext.Provider>

}

export { Provider };
export default ShopContext;