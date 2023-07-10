import { css, styled } from "styled-components";
import { FontTokens, ColorTokens } from "../../tokens"

export const AccordionStyled = styled.div`
    ${({theme: {shapes, colors}}) => css`
        padding: 16px; // TODO: move to a const file
        border-radius: ${shapes.borderRadius.sm};
        background-color: ${colors.background};
        display: flex;
        flex-direction: column;
        align-items: stretch;
        gap: 8px;
    `}
`


export const AccordionItem = styled.div`
    ${({theme: {shapes}}) => css`
        border-radius: ${shapes.borderRadius.sm};
        padding: 8px 8px 8px 12px; // TODO: move to a const file
        background-color: ${ColorTokens.Light.gohan}; // TODO: move it to theme (primary bg) (bulma) based on light/dark theme
        & > *:first-child {
            border-bottom: 1px solid red;
        }
    `}
`

