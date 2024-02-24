import { useDispatch, useSelector } from "react-redux";
import { changeName, changeCost, addCar } from "../store";

function CarForm() {
<<<<<<< HEAD
    const dispatch = useDispatch();
    const {name,cost} = useSelector(state => {
        return {
            name: state.form.name, 
            cost: state.form.cost
        }
    });


    const handleNameChange = (e) => {
        
        dispatch(changeName(e.target.value));
    }

    const handleCostChange = (e) => {
        const correctCost = parseInt(e.target.value) || 0;
        dispatch(changeCost(correctCost));
=======

    const dispatch =  useDispatch();
    const {name,cost} = useSelector(state=>state.form);
    const {cars} = useSelector(state => state)
    const handleNameChange = (e) => {
       dispatch(changeName(e.target.value));
    }
    const handleCostChange = (e) => {
        const intNumb = parseInt(e.target.value) || 0;
        dispatch(changeCost(intNumb));
>>>>>>> 3814c26d3103fc5e308b9f47ff379e680dacdadb
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addCar({name,cost}))
    }
    return <div className="car-form panel">
<<<<<<< HEAD
        <h4 className="subtitle is-3">Add Car</h4>
=======
        <h4 className="subtitle is-3">Add car</h4>
>>>>>>> 3814c26d3103fc5e308b9f47ff379e680dacdadb
        <form onSubmit={handleSubmit}>
            <div className="field-group">
                <div className="field">
                    <label className="label">Name</label>
<<<<<<< HEAD
                    <input className="input is-expended" value={name} onChange={handleNameChange} />
                </div>
                <div className="field">
                    <label className="label">Cost</label>
                    <input className="input is-expended" value={cost || ''} onChange={handleCostChange} />
                </div>
            </div>
=======
                    <input className="input is-expended" value={name} onChange={handleNameChange}/>
                </div>
                <div className="field">
                    <label className="label">Cost</label>
                    <input className="input is-expended" type="number" value={cost || ''} onChange={handleCostChange}/>
                </div>
            </div>

>>>>>>> 3814c26d3103fc5e308b9f47ff379e680dacdadb
            <div className="field">
                <button className="button is-link">Submit</button>
            </div>
        </form>
    </div>
}

export default CarForm;