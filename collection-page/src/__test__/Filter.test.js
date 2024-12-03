import { screen, render, waitFor, within } from "@testing-library/react";
import Filter from "../components/Filter";
import userEvent from "@testing-library/user-event";

const  categories = ["men's clothing", "women's clothing", "kid's clothing"];
const  handleCtgChange = jest.fn();

const toContainRole = (container, role, qty=1) => {
    const childElement = within(container).queryAllByRole(role);
    if(childElement.length === qty){    
        return {
            pass: true
        }
    }
    return {
        pass: false,
        message: ()=>`The role ${role} don't have quality ${qty}`
    }
}

const renderFilter = () => render(<Filter categories={categories} handleCtgChange={handleCtgChange}/>)

expect.extend({toContainRole});

test('filter is render with correct amount of categories', async() => {
    //render
    renderFilter();
        //find
        const allFilter = await screen.findByRole('form');
        //assert
        expect(allFilter).toContainRole('checkbox',3)
  })

test('Filter is render with correct categories' , async()=>{
    renderFilter();

    const firstCateg = await screen.findAllByTestId('cate-label')
    expect(firstCateg[0]).toBeInTheDocument();
    expect(firstCateg[0]).toHaveTextContent(/men's clothing/i)
})

test('Filter click call function', async () => {
    renderFilter();

    const firstCateg = await screen.findAllByRole('checkbox');
    const menClothCate = firstCateg.find(ctg => ctg.getAttribute("value") === "men's clothing")
    userEvent.click(menClothCate)
    expect(handleCtgChange).toHaveBeenCalledWith("men's clothing")
})