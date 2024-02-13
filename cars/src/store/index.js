import { configureStore } from "@reduxjs/toolkit";
import { carReducer, changeSearchTerm, addCar, removeCar } from "./carSlice";
import { formReducer, changeName, changeCost } from "./formSlice";

const store = configureStore({
    reducer: {
        form: formReducer,
        cars: carReducer
    }
});

export { store,changeSearchTerm, addCar, removeCar, changeName, changeCost };



