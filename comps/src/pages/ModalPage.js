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
            <p>Lorem commodo dolor esse elit quis pariatur amet elit adipisicing nulla ut cupidatat. Incididunt magna aute nulla quis id occaecat. Ut non elit fugiat minim do pariatur id incididunt veniam. In nisi qui esse amet dolor anim. Laboris reprehenderit labore tempor in anim adipisicing cupidatat commodo reprehenderit magna.

Irure officia consequat aliqua ad elit velit irure officia voluptate aliqua veniam minim Lorem. Minim excepteur sint duis in cupidatat laboris adipisicing sit incididunt dolore excepteur laborum. Aliquip occaecat amet ex tempor labore eiusmod id laborum irure consequat culpa. Qui commodo fugiat consequat est esse Lorem dolore mollit amet et do.

Consectetur amet duis deserunt adipisicing deserunt anim non. Pariatur mollit duis id ea consectetur et eiusmod elit aliquip dolor adipisicing proident aute minim. Eu sit ullamco sint culpa non esse tempor deserunt consectetur aute. Laboris cupidatat occaecat commodo ullamco adipisicing fugiat consequat qui sint quis enim laborum ullamco labore.

Aliqua minim laboris exercitation consequat Lorem nisi laborum. Tempor ad pariatur amet esse adipisicing proident laboris. Reprehenderit sint aliqua Lorem cillum aliqua fugiat labore ipsum consectetur qui in minim ut tempor. Veniam incididunt cillum in magna sit tempor ea aute fugiat elit. Occaecat commodo ut ut non ut ut. Sunt nulla tempor minim consectetur enim quis laborum. Mollit incididunt anim nostrud aliqua do commodo qui commodo ex.

Ipsum qui sint voluptate minim cillum ut. Amet cupidatat sunt anim exercitation aliqua enim exercitation id veniam laboris cupidatat veniam. Et eu adipisicing excepteur et occaecat ad nostrud minim aute ipsum. Cupidatat labore proident officia ullamco ad eiusmod labore consectetur qui ea. Anim elit et elit ex amet dolor do minim proident veniam. Proident duis id nisi reprehenderit aliquip dolor sint do eu.

Ex dolor enim minim id non tempor pariatur sunt ipsum tempor consectetur dolor do. Eu anim deserunt deserunt excepteur cupidatat ea laboris. Duis veniam culpa irure adipisicing nostrud nisi laborum elit sunt ea dolore commodo.

Ipsum labore eu anim ad consequat eu dolore pariatur do quis. Ut tempor ex sint est do cillum ex ex. Voluptate pariatur cupidatat officia laborum laborum. Esse ad amet nostrud adipisicing adipisicing. Ad eiusmod laboris incididunt ea sit cillum cillum qui tempor pariatur occaecat elit proident.

Ipsum mollit veniam aliqua dolore. Do excepteur aliquip duis commodo consectetur qui labore nostrud amet veniam enim magna consectetur tempor. Lorem velit id laborum ea aliquip velit amet do nisi anim velit minim. Fugiat quis proident anim Lorem reprehenderit dolore irure minim laboris.

Do proident est Lorem eiusmod aliquip pariatur. Proident eu exercitation laborum sunt nostrud dolore do consequat fugiat est incididunt ipsum esse. Fugiat veniam cillum Lorem eu officia sint aute elit minim excepteur pariatur occaecat ea. Est eu enim aliqua aliqua. Ut ex non esse ullamco tempor nostrud fugiat culpa consectetur excepteur tempor. Commodo et tempor consectetur sunt fugiat. Ad tempor velit ex fugiat consectetur laborum magna dolore.

Enim sit enim ea labore culpa excepteur veniam. Sunt consectetur qui proident mollit adipisicing consequat eiusmod dolor et pariatur adipisicing nostrud. Laboris non amet labore ad in laborum ut nostrud non ad sunt fugiat. Dolore mollit sit culpa ad Lorem adipisicing id exercitation ex adipisicing tempor nostrud ut. Qui dolore culpa do quis ipsum non consequat nulla velit nulla cillum. Ad aute eiusmod sit ullamco laborum laborum. Enim nulla officia incididunt cupidatat.</p>
            <Button primary onClick={handleToggle}>Open Modal</Button>
            {showModal && modal}
        </div>
}

export default ModalPage;