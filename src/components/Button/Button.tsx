import React from "react";


export type ButtonProps = {
    label: string;
    disabled?: boolean
}

const Button = ( {label, disabled = false}: ButtonProps) => {
    const labelText: string = disabled ? `disabled: ${label}` : label
    return <button>{labelText}</button>
}

export default Button;