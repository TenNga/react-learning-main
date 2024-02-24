import React from "react";
import { TodoCard } from "../models";
import Card from "./Card";

interface props {
    cards: TodoCard[],
    handleSetCards: React.Dispatch<React.SetStateAction<TodoCard[]>>
}

const ListToDos:React.FC<props> = ({cards, handleSetCards}) => {

    const renderCards:JSX.Element[] = cards.map(card => <Card card={card} />)

    return<div>{renderCards}</div>
}

export default ListToDos;