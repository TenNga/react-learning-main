import { ReactNode } from "react";
import { useListContext } from "../hooks/useListContext";

type propType = {
    data: string[] | undefined,
    clear: React.Dispatch<React.SetStateAction<string>>
}

function DisplaySearch ({data,clear}:propType) {
    const { addList } = useListContext();

    const handleSearchClick = (food:string) => {
        const newFood = {isDone: false, value: food}
        addList(newFood);
        clear('');
    }

    const renderSearchList = data?.map(food=>{
       return <li key={food} onClick={()=>handleSearchClick(food)} className="pl-2 hover:bg-gray-400 cursor-pointer">
                {food}
              </li>
    })

    return <ul className="absolute bg-white w-80 border">{renderSearchList}</ul>
}

export default DisplaySearch;