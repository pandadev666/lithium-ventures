import React from "react";

interface Props {
    value: string | undefined,
    onChange: Function | undefined,
    type: string | undefined,
    placeholder: string | undefined,
}

const Input: React.FC<Props> = ({value="", onChange, type="text", placeholder=""}: Props): JSX.Element => {
    return (
        <input
            value={value}
            type={type}
            placeholder={placeholder}
            onChange={(ev: React.ChangeEvent<HTMLInputElement>) => {
                if (onChange) onChange(ev.target.value)
            }}
            className="bg-gray-50 border-2 border-gray-300 text-purple-900 text-md rounded-lg focus-visible:outline-none focus-visible:ring-purple-500 focus-visible:border-purple-500 block w-full p-2.5 mb-2"
        />
    )
}

export default Input;
