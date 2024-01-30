import classNames from 'classnames';

function Panel({children,className, ...remainingProps}) {

    const AllClassNames = classNames('border rounded p-3 shadow bg-white w-full',className)
    return <div className={AllClassNames} {...remainingProps}>{children}</div>
}

export default Panel;