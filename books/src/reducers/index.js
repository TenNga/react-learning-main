const reducer = (state, action) => {
    const FETCH_BOOK = 'FETCH_BOOK';
    const CREATE_BOOK = 'CREATE_BOOK';
    const DELETE_BOOK = 'DELETE_BOOK';
    const UPDATE_BOOK = 'UPDATE_BOOK';

    switch (action.type) {
        case FETCH_BOOK:
            return {...state,...action.payload};
        case CREATE_BOOK:
            return {...state,...action.payload};
        case DELETE_BOOK:
            return {...state,...action.payload};
        case UPDATE_BOOK:
            return {...state,...action.payload};
        default:
            return state;
    }
}

export { reducer };