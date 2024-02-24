import React from "react";
import { TodoCard } from "../models";

interface props {
    card: TodoCard;
}
const Card:React.FC<props> = ({card}) => {
    const handleDelete:()=>void =() =>{
        
    }
    return <div>
            <li key={card.id}>{card.name}</li>
            <button onClick={handleDelete}>Delete</button>
        </div>
}

export default Card;