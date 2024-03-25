import { useListContext } from "../hooks/useListContext";
function DisplayList() {
    const { lists } = useListContext();
    const renderList = lists?.map(list=>{
        return <p key={list.value}>Title: {list.value}</p>
    });
    return <div> 
        <h1>List Display</h1>
        {lists.length > 0? renderList : "Empty List"}
    </div>
};

export default DisplayList;