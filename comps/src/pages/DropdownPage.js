import './index.css';
import Dropdown from '../components/Dropdown';
import { useState } from 'react';


function DropdownPage() {
    const [selectedValue, setSelectedValue] = useState(null);
    const [currentDrop, setCurrentDrop] = useState(null);

    const handleSelectChange = (val) => {
        setSelectedValue(val)
    }
    const options = [
        {label: 'Red', value: 'red'},
        {label: 'Green', value: 'green'},
        {label: 'Blue', value: 'blue'}
    ];

 return<div className='flex'>
     <Dropdown options={options} onChange={handleSelectChange} value={selectedValue}/>
    </div>
};

export default DropdownPage;