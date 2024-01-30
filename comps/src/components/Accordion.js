
import { useState } from "react";
import { GoChevronDown, GoChevronUp } from "react-icons/go";

function Accordion({ items }) {
    const [expendedIndex, setExpendedIndex] = useState(-1);

    const handleClick = (index) => {
        setExpendedIndex(current => {
            return current === index? -1 : index;
        })
    }

    const renderItems = items.map((item,index) => {
        const isExpensed = index === expendedIndex;
        const icon =<span className="text-2xl">{isExpensed? <GoChevronUp /> : <GoChevronDown/>}</span>;

        return (
            <div key={item.id}>
                <div onClick={()=>handleClick(index)} className="flex p-3 bg-gray-50 border-b cursor-pointer items-center">
                    {item.label} 
                    {icon}
                    </div>
                {isExpensed && <div className="border-b p-5">{item.content}</div>}
            </div>
        )
    });
    return <div className="border-x border-t rounded">{renderItems}</div>
}

export default Accordion;