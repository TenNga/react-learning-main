import React from "react";
import { listType } from "../share/types";

type propType = {
    eachList: listType
}

function List ({eachList}:propType) {
    return <div>
        <input type="checkbox" checked={eachList.isDone}/>
        <span>{eachList.value}</span>
        <button>X</button>
    </div>
};

export default List;