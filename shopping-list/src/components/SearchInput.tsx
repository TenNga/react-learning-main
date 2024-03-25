import React, { useState } from "react";
import { useListContext } from "../hooks/useListContext";

function SearchInput () {
    const [search, setSearch] = useState("");
    const { addList } = useListContext();
    
    const handleOnSearchChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const searchValue = e.target.value;
        setSearch(searchValue)
    }

    const handleOnSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("before submit: ",{value: search, isDone: false})
        addList({value: search, isDone: false})
        
    }

    return <div>
        <form onSubmit={handleOnSearchSubmit}>
            <input onChange={handleOnSearchChange} type="text" placeholder="Search Item" value={search}/>
        </form>
    </div>
}

export default SearchInput;