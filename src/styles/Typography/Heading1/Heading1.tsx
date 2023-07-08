import React,  { PropsWithChildren } from "react";
import { styled, css } from "styled-components";
import { TypographyProps } from "../types";
import { getFontSize } from "../utils";

const H1 = styled.h1<TypographyProps>`
    ${({theme: {typography: {h1}, colors}, size = '2xl', secondary = false}) => {
        const fontSize = size === '2xl' ? h1.fontSize : getFontSize(size);
        return css`
            font-size: ${fontSize};
            font-weight: ${h1.fontWeight};
            line-height: ${h1.lineHeight};
            ${secondary && css`
                color: ${colors.text.body.secondary};
            `}
        `
    }}
`

const Heading1:React.FC<PropsWithChildren<TypographyProps>> = ({children, size = '2xl', secondary = false}) => {
    return (
        <H1 size={size} secondary={secondary}>
            {children}
        </H1>
    )
}


export default Heading1