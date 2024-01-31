import Link from './Link';

function Sidebar() {

    const links = [
        {text: 'Dropdown', path: '/'},
        {text: 'Accordion', path: '/accordion'},
        {text: 'Buttons', path: '/buttons'},
        {text: 'Modal', path: '/modal'},
    ]

    const renderLinks = links.map(link=>{
        return <Link key={link.text} to={link.path} className='mp-3' activeClassName="font-bold border-1-4 border-blue-500 pl-2">{link.text}</Link>
    })

    return <div className='sticky top-0 overflow-y-scroll flex flex-col items-start'>
        {renderLinks}
    </div>

}

export default Sidebar;