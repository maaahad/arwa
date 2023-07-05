
// base styles
import React,  { PropsWithChildren } from "react";
import { styled, css } from "styled-components";

const H1 = styled.h1`
    ${({theme: {typography: {h1}}}) => {
        return css`
            font-size: ${h1.fontSize};
            font-weight: ${h1.fontWeight};
            line-height: ${h1.lineHeight};
        `
    }}
`


// add size props (optional)
const Heading1:React.FC<PropsWithChildren<{}>> = ({children}) => {
    return (
        <H1>
            {children}
        </H1>
    )
}


export default Heading1