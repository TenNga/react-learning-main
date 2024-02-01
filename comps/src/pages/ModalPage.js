import Modal from '../components/Modal';
import Button from '../components/Button';
import { useState } from 'react';

function ModalPage(){
    const [showModal, setShowModal ] = useState(false);
    const handleToggle = () => {
        setShowModal(current => !current);
    }

    const modal = <Modal onToggleModal={handleToggle}>
        <p>Body text goes here...</p>
        <div className='flex justify-end'>
            <Button primary onClick={handleToggle}>Okay</Button>
        </div>
    </Modal>

    return <div className='relative'>
            <Button primary onClick={handleToggle}>Open Modal</Button>
            {showModal && modal}
        </div>
}

export default ModalPage;