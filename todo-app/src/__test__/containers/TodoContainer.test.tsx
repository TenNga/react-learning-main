import { render, screen } from "@testing-library/react";
import TodoContainer from "../../containers/TodoContainer";
import { TodoContext, TodoProvider } from "../../context/TodoContext";
import '@testing-library/jest-dom';
import exp from "constants";

test('Todo container renders all list of Todos', () => {
    const customContext = { 
        todos:[{name:'shopping', status: 'incomplete'}], 
        setTodos: jest.fn(), 
        filterTodos: [], 
        setFilterTodos:jest.fn(),
        filter: '',
        setFilter: jest.fn()
    };

    // Custom provider for testing
    const CustomProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => (
        <TodoContext.Provider value={customContext}>
            {children}
        </TodoContext.Provider>
    );

    //Render
    render(
        <CustomProvider>
            <TodoContainer />
        </CustomProvider>
    )

    //find element and actions
    const todos = screen.getAllByRole('listitem');
    const todoName = screen.getByTestId('todoName');
    const status = screen.getByRole('combobox')

    //asserts
    expect(todos[0]).toBeInTheDocument();
    expect(todoName).toBeInTheDocument();
    expect(status).toBeInTheDocument();

    expect(todos).toHaveLength(1);
    expect(status).toHaveValue('incomplete')

    expect(todoName.tagName).toBe('LABEL')
    expect(todoName).toHaveTextContent('shopping')


})