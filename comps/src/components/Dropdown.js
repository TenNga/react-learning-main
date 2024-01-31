import { useState, useEffect, useRef } from "react";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import Panel from './Panel';

function Dropdown({ options,value,onChange }) {
    
    const [isOpen, setIsOpen] = useState(false);
    const divRef = useRef();
        
    const handleClickTitle = () => {
        setIsOpen(current=> !current);
    }

    const handleSelect = (val) => {
        setIsOpen(current=>!current);
        onChange(val);
    }

    useEffect(()=>{
        const handleClick = (e) => {
            if(!divRef.current) return;

            if(!divRef.current.contains(e.target)){
                setIsOpen(false);
            }
        }
        document.addEventListener('click',handleClick,true);

        return ()=> document.removeEventListener('click',handleClick);
    },[])
  
    const renderedOptions = options.map(op => {
        return <div className="hover:bg-sky-100 rounded cursor-pointer p-1" key={op.value} onClick={()=>handleSelect(op.value)}>
            {op.label}
        </div>
    })

    return <div ref={divRef} className="w-48 relative">
            <Panel className="flex justify-between items-center cursor-pointer" onClick={handleClickTitle}>
                {value || 'Select...'} {isOpen? <GoChevronDown/> : <GoChevronUp />}
            </Panel>
        
            {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
        </div>
}

export default Dropdown;