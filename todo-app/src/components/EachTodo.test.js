import { render } from "@testing-library/react";
import EachTodo from "./EachTodo";

test('To has todo props is passed correctly', () => {
    const testTodo = {
        name: 'shopping',
        status: 'incomplete'
      }
    const {getByTestId} = render(<EachTodo todo={testTodo} />);
    const todoName = getByTestId('todoName').textContent;
    expect(todoName).toEqual('shopping');

})
