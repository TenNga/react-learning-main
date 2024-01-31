import useNavigation from '../hooks/use-navigation';
import classNames from 'classnames'

function Link({ to,children,className,activeClassName }) {
    const { navigate, currentPath } = useNavigation();
    const finalClassNames = classNames('text-blue-500',className, currentPath === to && activeClassName);

    const handleClik = (e) => {
        if(e.metaKey || e.ctrlKey) return;

        e.preventDefault();
        navigate(to);
    }

    return <a className={finalClassNames} href={to} onClick={handleClik}>{children}</a>
}

export default Link;