import { screen, render, waitFor, within } from "@testing-library/react";
import Filter from "../components/Filter";

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

expect.extend({toContainRole});

test('filter is render with correct categories', async() => {
    //render
    render(<Filter categories={categories} handleCtgChange={handleCtgChange}/>)
  
    
    // waitFor(()=>{
        //find
        const allFilter = await screen.findByRole('form');
        //assert
        expect(allFilter).toContainRole('checkbox',3)
    // })
  
  
    
  })