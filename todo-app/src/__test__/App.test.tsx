import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom';
import App from "../App";
import { TodoContext, TodoProvider } from "../context/TodoContext";
import { ReactNode, useState } from "react";
import { todoType } from "../types";


describe('<App /> component ',()=> {
    it('should display todo textbox with submit button', () => { 
        render(<App />,
         {
            wrapper: TodoProvider
         });
    
        const todoInput = screen.getByRole('textbox');
        expect(todoInput).toBeInTheDocument();
        
        const todoSubmitBtn = screen.getByRole('button',{
            name: /Add/i
        });
        expect(todoSubmitBtn).toBeInTheDocument();       
     })

     it('should add new todo list on submit', () => {
        render(<App />,
        {
         wrapper: TodoProvider
        }
        );
    
        const todoInput = screen.getByRole('textbox');
        const todoSubmitBtn = screen.getByRole('button',{
            name: /Add/i
        });

        userEvent.click(todoInput);
        userEvent.keyboard('Shopping');
        userEvent.click(todoSubmitBtn);
        
        const todoList = screen.getByText('Shopping');
        expect(todoList).toBeInTheDocument();
     })

     it('should clear input after submit',() => {
      render(<App />,
         {
          wrapper: TodoProvider
         }
         );
    
        const todoInput = screen.getByRole('textbox');
        expect(todoInput).toBeInTheDocument();
        
        const todoSubmitBtn = screen.getByRole('button',{
            name: /Add/i
        });
        expect(todoSubmitBtn).toBeInTheDocument();

        userEvent.click(todoInput);
        userEvent.keyboard('Shopping');
        userEvent.click(todoSubmitBtn);
        
        expect(todoInput).toHaveTextContent('')
     })
} )
