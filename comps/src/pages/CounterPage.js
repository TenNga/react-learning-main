
import { useReducer } from 'react';
import Button from '../components/Button';
import Panel from '../components/Panel';


function CounterPage({initialCount}) {
    const INCREMENT_COUNT = 'increment';
    const DECREMENT_COUNT = 'decrement';
    const ADD_INPUT_VALUE = 'add_input_value';
    const ADD_CHANGE_VALUE = 'add_change_value';

    const reducer = (state, action) => {
        switch (action.type) {
            case INCREMENT_COUNT:
                return {
                    ...state, count: state.count + 1
                }
            case DECREMENT_COUNT:
                return {
                    ...state, count: state.count - 1
                }
            case ADD_CHANGE_VALUE:
                return {
                    ...state,
                    addValue: action.payload
                }
            case ADD_INPUT_VALUE:
                return {
                    ...state, 
                    count: state.count + action.payload,
                    addValue: 0
                }
        
            default:
                return state;
        }
    }
    const [state,dispatch] = useReducer(reducer,{
        count: initialCount, addValue: 0
    })

   const increment = () => {
    dispatch({type: INCREMENT_COUNT})
   }
   const decrement = () => {
    dispatch({type: DECREMENT_COUNT})
   }
   const handleChange = (e) => {
        const value = parseInt(e.target.value) || 0;
        dispatch({type: ADD_CHANGE_VALUE, payload: value})
   }
   const handleAddValue = (e) => {
        e.preventDefault();
        dispatch({type: ADD_INPUT_VALUE, payload: state.addValue})
   }
    return <Panel className="m-3">
        <h1 className='text-lg'>Count is {state.count}.</h1>
        <div className='flex flex-row'>
            <Button primary onClick={increment}>Increment</Button>
            <Button danger onClick={decrement}>Decrement</Button>
        </div>
        <form>
            <label>Add a lot!</label>
            <input className='p-1 m-3 bg-grey-50 border border-grey-300' value={state.addValue || ''} type="number" onChange={handleChange} />
            <Button onClick={handleAddValue}>Add it!</Button>
        </form>
    </Panel>
}

export default CounterPage;