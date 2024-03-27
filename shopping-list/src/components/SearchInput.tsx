import React, { useState } from "react";
import { useListContext } from "../hooks/useListContext";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

function SearchInput () {
    const [search, setSearch] = useState("");
    const [foods, setFoods] = useState<string[]>([""]);
    const { addList } = useListContext();

    const useFetchFood = async() => {
        const resp = await axios.get<string[]>(`https://api.frontendeval.com/fake/food/${search}`)
        return resp.data;
    }

    const { data } = useQuery({
        queryKey: ['food',search],
        queryFn: useFetchFood
    });
    
    const handleOnSearchChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const searchValue = e.target.value;
        setSearch(searchValue);
    }

    const handleOnSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("before submit: ",{value: search, isDone: false})
        addList({value: search, isDone: false})
        setSearch('');
    }

    return <div>
        <form onSubmit={handleOnSearchSubmit}>
            <input onChange={handleOnSearchChange} type="text" placeholder="Search Item" value={search}/>
        </form>
        <ul>{data?.map(food=><li key={food}>{food}</li>)}</ul>
    </div>
}

export default SearchInput;