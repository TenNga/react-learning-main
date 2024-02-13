import { useSelector } from "react-redux";

function CarList() {
    const {cars} = useSelector(state => state);
    // const renderCars = cars.map(car => <div>Car name: {car.name}, Price: {car.cost}</div>)
    return <div>renderCars</div>
}

export default CarList;