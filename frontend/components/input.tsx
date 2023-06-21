import React from "react";

interface InputProps {
    value?: string,
    type?: string,
    placeholder?: string,
    className?: string,
    onChange?: Function,
}

const Input: React.FC<InputProps> = ({
    value = "",
    type = "text",
    placeholder = "",
    className="",
    onChange
}: InputProps): JSX.Element => {
    return (
        <input
            className={`bg-gray-50 border-2 border-gray-300 text-purple-900 text-md rounded-lg focus-visible:outline-none focus-visible:ring-purple-500 focus-visible:border-purple-500 block w-full p-2.5 ${className}`}
            value={value}
            type={type}
            placeholder={placeholder}
            onChange={(ev: React.ChangeEvent<HTMLInputElement>) => {
                if (onChange) onChange(ev.target.value)
            }}
        />
    )
}

export default Input;
