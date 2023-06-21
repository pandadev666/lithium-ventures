import React from "react";

interface Props {
    children?: JSX.Element | string,
    onClick?: Function,
    className?: string | undefined,
}

const Button: React.FC<Props> = ({children, onClick, className}: Props): JSX.Element => {

    return (
        <button
            className={`bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded ${className}`}
            onClick={() => {if(onClick) {onClick();}}}
        >
            {children}
        </button>
    )
}

export default Button;
