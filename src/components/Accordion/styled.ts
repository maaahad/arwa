import { css, styled } from "styled-components";
import { ColorTokens } from "../../tokens"

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


export const AccordionItemStyled = styled.div`
    ${({theme: {shapes}}) => css`
        border-radius: ${shapes.borderRadius.sm};
        background-color: ${ColorTokens.Light.gohan}; // TODO: move it to theme (primary bg) (bulma) based on light/dark theme
    `}
`

export const AccordionHeader = styled.div`
    ${({theme}) => css`
        cursor: pointer;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 8px 8px 8px 12px;
    `}
`

export const AccordionDetails = styled.div<{expanded?: boolean}>`
    ${({theme: {colors}, expanded = false}) => css`
        padding: 0px;
        height: 0px;
        overflow: hidden;
        ${expanded && css`
            height: fit-content;
            padding: 8px 8px 8px 12px;
            border-top: 1px solid ${colors.border};
            transition: height 1s ease-in; // TODO: use from theme, not working
        `}
    `}
`

export const AccordionIconContainer = styled.div<{expanded: boolean}>`
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all .3s ease-in;
    
    ${({expanded = false}) => expanded ? css`
        transform: rotate(180deg);
    ` : css`
        transform: rotate(0deg);
    `} 
`