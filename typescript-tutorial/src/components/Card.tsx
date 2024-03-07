import React, { useContext } from "react";
import { TodoCard } from "../models";
import useStateContext from '../StateContext';
interface props {
    card: TodoCard;
}
const Card:React.FC<props> = ({card}) => {
    const { state, setState } = useContext(useStateContext);
    const handleDelete:()=>void =() =>{
        const updatedState = state.filter((c:TodoCard) => {
            return c.id !== card.id
        })
        setState(updatedState);
    }
    return <div>
            <li key={card.id}>{card.name}</li>
            <button onClick={handleDelete}>Delete</button>
        </div>
}

export default Card;