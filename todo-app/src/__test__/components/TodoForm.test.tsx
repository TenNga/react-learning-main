import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import '@testing-library/jest-dom';
import TodoForm from "../../components/TodoForm";
import React from "react";
import { createContext } from "vm";
import { TodoContext } from "../../context/TodoContext";
import userEvent from "@testing-library/user-event";

describe('Form component should', () => {
    it('render with input fields and button', () => {
        // const CustomContextValue = {
        //     todos: [],
        //     setTodos: jest.fn(),
        //     filterTodos: [], 
        //     setFilterTodos: jest.fn(), 
        //     filter: '', 
        //     setFilter: jest.fn()
        // }
        // render(
        // <TodoContext.Provider value={CustomContextValue}>
        //     <TodoForm />
        // </TodoContext.Provider>
        // )

        // const form = screen.getByRole('form');
        // const input = screen.getByRole('textbox', {
        //     name: 'Enter Todo Task'
        // });
        // const button = screen.getByRole('button', {
        //     name: 'Add'
        // });
        // expect(form).toBeInTheDocument();
        // expect(input).toBeInTheDocument();
        // expect(button).toBeInTheDocument();

        // userEvent.click(input);
        // userEvent.keyboard('testing');
        // userEvent.click(button);

        // expect(input).toHaveValue('')
        
    })
})