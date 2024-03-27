import { useListContext } from "../hooks/useListContext";
import List from "./List";

function DisplayList() {
    const { lists } = useListContext();
    const renderList = lists?.map(list=>{
        return <List key={list.value} eachList={list}/>
    });
    return <div> 
        <h1>List Display</h1>
        {lists.length > 0? renderList : "Empty List"}
    </div>
};

export default DisplayList;