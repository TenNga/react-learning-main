import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom';
import App from "../App";
import { TodoContext } from "../context/TodoContext";
import { ReactNode, useState } from "react";
import { todoType } from "../types";


describe('<App /> component ',()=> {
    it('should display todo textbox with submit button', () => { 
        const customContext = {
            filterTodos: [], 
            setFilterTodos:jest.fn(),
            filter: '',
            setFilter: jest.fn()
        }

        
        const CustomProvider = ({children}:{children: ReactNode}) => {
            const [todos, setTodos] = useState<todoType[]>([]);
            return (
                <TodoContext.Provider value={{...customContext,todos,setTodos}}>
                    {children}
                </TodoContext.Provider>
            )
        }

        render(
        <CustomProvider>
            <App />
        </CustomProvider>
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
        
        const todoList = screen.getByText('Shopping');
        expect(todoList).toBeInTheDocument();
        
     })
} )
