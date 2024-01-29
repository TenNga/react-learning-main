import classnames from 'classnames';
import { twMerge } from 'tailwind-merge';

function Button({children,primary, secondary, success, warning, danger}) {

    const classes = twMerge(
        classnames('px-3 py-1.5 border',{
            'border-blue-600 bg-blue-500 text-white':primary,
            'border-gray-900 bg-gray-900 text-white':secondary,
            'border-green-500 bg-green-500 text-white':success,
            'border-yellow-400 bg-yellow-400 text-white':warning,
            'border-red-500 bg-red-500 text-white':danger,
        })
    );

    return <button className={classes}>{children}</button>
}

Button.prototype = {
    checkVariationValue: ({primary, secondary, success, warning, danger}) =>{
        const count = Number(!!primary)
        + Number(!!secondary)
        + Number(!!success)
        + Number(!! warning)
        + Number(!!danger)

        if(count > 1){
            return new Error("Only on variation allowed!")
        }
    }
}

export default Button;