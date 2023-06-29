import React from "react";
import { styled, css } from "styled-components";

const ButtonStyled = styled.button<{variant: "primary" | "secondary"}>`
    height: 40px;
    width: fit-content;
    cursor: pointer;

    ${({theme, variant}) => {
        console.log(theme)
        return css`
            background-color: ${theme.colors.accent[variant]};
            color: ${theme.colors.text.button[variant]};
            border: 1px solid ${theme.colors.border};
            border-radius: 4px;
            &:hover {
                color: ${theme.colors.hover[variant]};
            }
        `
    }}
`

export type ButtonProps = {
    label: string;
    disabled?: boolean,
    variant?: "primary" | "secondary" 
}

const Button = ( {label, disabled = false, variant = "primary"}: ButtonProps) => {
    const labelText: string = disabled ? `disabled: ${label}` : label
    return (
        <ButtonStyled variant={variant}>{labelText}</ButtonStyled>
    )

}

export default Button;