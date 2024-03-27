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
    
    return <div className="flex w-full justify-between border-b pb-2 border-b-black">
        <input type="checkbox" checked={eachList.isDone} onChange={()=>handleCheck(eachList.value)} className="mr-2"/>
        <span>{eachList.value}</span>
        <button onClick={()=>handleDelete(eachList.value)} className="last-of-type:ml-auto">X</button>
    </div>
};

export default List;