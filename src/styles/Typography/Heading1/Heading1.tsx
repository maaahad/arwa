import React,  { PropsWithChildren } from "react";
import { styled, css } from "styled-components";
import { TypographyProps } from "../types";
import { getFontSize } from "../utils";

const H1 = styled.h1<TypographyProps>`
    ${({theme: {typography: {h1}}, size = '2xl'}) => {
        const fontSize = size === '2xl' ? h1.fontSize : getFontSize(size);
        return css`
            font-size: ${fontSize};
            font-weight: ${h1.fontWeight};
            line-height: ${h1.lineHeight};
        `
    }}
`

const Heading1:React.FC<PropsWithChildren<TypographyProps>> = ({children, size = '2xl'}) => {
    return (
        <H1 size={size}>
            {children}
        </H1>
    )
}


export default Heading1