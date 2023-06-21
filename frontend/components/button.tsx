import React from "react";

interface Props {
    children?: JSX.Element | string,
    onClick?: Function,
    className?: string | undefined,
}

const Button: React.FC<Props> = ({children, onClick, className}: Props): JSX.Element => {

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        if(onClick) {
            onClick();
        }
    }

    return (
        <button
            className={"bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded " + className}
            onClick={handleClick}
        >
            {children}
        </button>
    )
}

export default Button;
