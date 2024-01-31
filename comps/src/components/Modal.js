import Button from './Button';
import { useEffect } from 'react';

function Modal({onToggleModal, children}){
    const handleClick = () => {
        onToggleModal()
    }
    useEffect(()=>{
        document.body.classList.add('overflow-hidden');
        return ()=>document.body.classList.remove('overflow-hidden');
    },[])

    return <div>
        <div onClick={handleClick} className="fixed inset-0 bg-gray-300 opacity-80"></div>
        <div className="fixed inset-40 p-10 bg-white">
            <div className='flex flex-col justify-between h-full'>
                {children}
            </div>
        </div>
    </div>
}

export default Modal;