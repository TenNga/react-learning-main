import { createSlice, nanoid } from "@reduxjs/toolkit";


const carSlice = createSlice({
    name: 'cars',
    initialState: {
        searchTerm: '',
        data: []
    },
    reducers: {
        changeSearchTerm(state, action){
            state.searchTerm = action.payload;
        },
        addCar(state, action) {
            state.data.push({
                id: nanoid(),
                name: action.payload.name,
                cost: action.payload.cost
            })
        },
        removeCar(state, action) {
            const updated = state.data.filter(car=> car.id !== action.payload);
            state.data = updated;
        }
    }
})

export const { changeSearchTerm, addCar, removeCar } = carSlice.actions;
export const carsReducer  = carSlice.reducer;