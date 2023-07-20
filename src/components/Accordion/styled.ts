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

export const Title = styled.h3`
    margin: 0;
    font-size: ${FontTokens.FontSize.fs16};
    font-weight: ${FontTokens.FontWeight.bold};
    line-height: ${FontTokens.LineHeight.lh1_5};
`


export const AccordionItemStyled = styled.div<{outside?: boolean, expand?: boolean}>`
    ${({theme: {shapes}, outside = false, expand = false}) => css`  
        display: flex;
        flex-direction: column;
        border-radius: ${shapes.borderRadius.sm};
        ${expand && outside && css`
            /* // TODO: This will be diferent for different size 16(xl),12(lg),8(md),8(sm) : should be in a sahred file of consts*/
            gap: 8px; 
        `}
    `}
`

export const AccordionHeader = styled.div<{disabled?: boolean, outside?: boolean, expand?: boolean}>`
    ${({theme, disabled = false, outside = false, expand = false}) => css`
        cursor: pointer;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 8px 8px 8px 12px;
        border-radius: 8px;
        /* // TODO: move it to theme (primary bg) (bulma) based on light/dark theme */

        background-color: ${ColorTokens.Light.gohan}; 
        ${disabled && css`
            cursor: auto;
            color: ${theme.colors.text.body.secondary};
        `}

        ${expand && !outside && css`
            border-bottom-right-radius: 0;
            border-bottom-left-radius: 0;
        `}
    `}
`

export const AccordionContentStyled = styled.div<{expand?: boolean, outside?: boolean}>`
    ${({theme: {colors}, expand = false, outside = false}) => css`
        padding: 0px;
        max-height: 0px;
        overflow: hidden;
        border-radius: 8px;
        background-color: ${ColorTokens.Light.gohan}; // TODO: move it to theme (primary bg) (bulma) based on light/dark theme
        ${expand && css`
            height: auto;
            max-height: 1000px;
            padding: 8px 8px 8px 12px;
            ${outside ? css`
                border-top: none;
            ` : css`
                border-top: 1px solid ${colors.border};
            `}
            transition: max-height 3s ease-out;
        `}

        ${expand && !outside && css`
            border-top-right-radius: 0;
            border-top-left-radius: 0;
        `}
    `}
`

export const AccordionIconContainer = styled.div<{expand: boolean}>`
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all .3s ease-in;
    
    ${({expand = false}) => expand ? css`
        transform: rotate(180deg);
    ` : css`
        transform: rotate(0deg);
    `} 
`