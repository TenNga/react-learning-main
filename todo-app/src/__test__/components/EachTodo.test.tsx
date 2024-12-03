import { render } from "@testing-library/react";
import EachTodo from "../../components/EachTodo";
import { TodoContext } from "../../context/TodoContext";
import '@testing-library/jest-dom';

test('To has todo props is passed correctly', () => {
    // const testTodo = {
    //     name: 'shopping',
    //     status: 'incomplete'
    //   }
    // const mockContextValue = {
    //   todos: [], 
    //   setTodos: jest.fn(),
    //   filterTodos:[], 
    //   setFilterTodos: jest.fn(), 
    //   filter: '', 
    //   setFilter: jest.fn()
    // }
    // const {getByTestId} = render(
    //   <TodoContext.Provider value={mockContextValue}>
    //     <EachTodo todo={testTodo} />
    //   </TodoContext.Provider>
    // );
    // const todoName = getByTestId('todoName').textContent;
    // expect(todoName).toEqual('shopping');

})
