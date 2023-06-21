import React from "react";

interface ButtonProps {
    className?: string,
    children?: JSX.Element | string,
    onClick?: Function,
}

const Button: React.FC<ButtonProps> = ({
    className = "",
    children = <></>,
    onClick,
}: ButtonProps): JSX.Element => {
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
