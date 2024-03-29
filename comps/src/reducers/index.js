import { INCREMENT_COUNT,
    DECREMENT_COUNT,
    ADD_INPUT_VALUE,
    ADD_CHANGE_VALUE } from '../share';
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

export { reducer };