import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import '@testing-library/jest-dom';
import TodoForm from "./TodoForm";


describe('Form component should', () => {
    it('render with input fields and button', () => {
        const mock = jest.fn;

        render(<TodoForm handleSubmit={mock} todos={[]} />);

        const input = screen.getByRole('textbox');
        const smtBtn = screen.getByRole('button');

        expect(input).toBeInTheDocument();
        expect(smtBtn).toBeInTheDocument();

        user.clear(input);
        user.keyboard('Test todo');
        user.click(smtBtn);

        expect(mock).toHaveBeenCalled();
        expect(mock).toHaveBeenCalledWith([{name: 'Test todo', status: 'incomplete'}])



    })
})