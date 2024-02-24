<<<<<<< HEAD
import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "../store";

function CarList() {
    const {name, cars} = useSelector(({cars: {data,searchTerm}, form})=>{
        const filteredCars = data.filter(car => car.name.toLowerCase().includes(searchTerm.toLowerCase()));
        return { name: form.name, cars: filteredCars};
    });

    const dispatch = useDispatch();

    const handleCarDelete = (car) => {
        dispatch(removeCar(car.id));
    }

    const renderCars = cars.map(car => {
        const boldName = name && car.name.toLowerCase().includes(name.toLowerCase());
        return (
            <div key={car.id} className={`panel ${boldName && 'bold'}`}>
                <p>
                    {car.name} - ${car.cost}        
                </p> 
                <button onClick={()=>handleCarDelete(car)} className="button is-danger">
                    Delete
                </button>   
            </div>
        );
    })
    return <div className="car-list">{renderCars} <hr /></div>
=======
import { useSelector } from "react-redux";

function CarList() {
    const {cars} = useSelector(state => state);
    // const renderCars = cars.map(car => <div>Car name: {car.name}, Price: {car.cost}</div>)
    return <div>renderCars</div>
>>>>>>> 3814c26d3103fc5e308b9f47ff379e680dacdadb
}

export default CarList;