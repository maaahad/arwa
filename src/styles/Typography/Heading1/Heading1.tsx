
// base styles
import React,  { PropsWithChildren } from "react";
import { styled, css } from "styled-components";

const H1 = styled.h1`
    ${({theme}) => {
        return css`
            color: ${theme.colors.text.body};
            color: green;
        `
    }}
`

const Heading1:React.FC<PropsWithChildren<{}>> = ({children}) => {
    return (
        <H1>
            {children}
        </H1>
    )
}


export default Heading1