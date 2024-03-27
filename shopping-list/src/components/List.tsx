import React from "react";
import { listType } from "../share/types";
import { useListContext } from "../hooks/useListContext";

type propType = {
    eachList: listType
}

function List ({eachList}:propType) {
    const { removeList, toggleList } = useListContext();

    const handleDelete = (value:string) => {
        removeList(value)
    }

    const handleCheck = (value:string) => {
        toggleList(value)
    }
    
    return <div className="flex w-full justify-between border-b pb-2 border-b-black pt-2">
        <input type="checkbox" checked={eachList.isDone} onChange={()=>handleCheck(eachList.value)} className="mr-2"/>
        <span className={eachList.isDone? "line-through" : ""}>{eachList.value}</span>
        <button onClick={()=>handleDelete(eachList.value)} className="border rounded-full w-5 h-5 text-xs bg-red-500 text-white last-of-type:ml-auto">X</button>
    </div>
};

export default List;