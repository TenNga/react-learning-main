import React, { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'

export const useTodos = () => {
    const todoContext = useContext(TodoContext)
    if(!todoContext){
        throw new Error('Error using todo context');
    }
    return todoContext;
}