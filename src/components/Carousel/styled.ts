import { styled, css } from "styled-components";


export const CarouselStyled = styled.div<{height: number}>`
    position: relative;
    overflow: hidden; 
    ${({theme: {shapes}, height}) => css`
        border-radius: ${shapes.borderRadius.sm};
        height: ${height}px;
    `}
`

export const ControlButtonStyled = styled.button<{slot: 'left' | 'right', round?: boolean, disabled?: boolean}>`
    cursor: pointer;
    position: absolute;
    width: 32px; // TODO: Configured
    height: 32px; // TODO: Configured
    top: 50%;
    transform: translateY(-50%);
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;

    ${({slot, round = false, disabled = false, theme: {colors, shapes, shadows}}) => css`
        border: 1px solid ${colors.border};
        border-radius: ${shapes.borderRadius.sm};
        box-shadow: ${shadows.xs};
        transition: all .3s ease-in; // TODO: Should come from theme
        ${round && css`
            border-radius: 50%;
        `}

        ${slot === 'left' ? css`
            left: 0px;
        ` : css`
            right: 0px;
        `}

        ${disabled && css`
            cursor: auto;
            /* TODO: Fix style : DisabeldButton */
        `}

        &:hover {
            background-color: ${colors.background};
        }
    `}

`

export const SlidesContainer = styled.div`
    height: 100%;
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 100%;
    overflow-x: hidden;
`

export const Slide = styled.div`
     & > * {
        height: 100%;
    }
`

export const IndicatorsStyled = styled.div`
    position: absolute;
    bottom: 16px; // Should come from configuration
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;
`

export const IndicatorDot = styled.button<{selected?: boolean}>`
    all: unset;
    cursor: pointer;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    transition: all .3s ease-in;
    ${({theme:{colors}, selected = false}) => selected ? css`
        opacity: .4;
        background-color: ${colors.background};
    ` : css`
        background-color: ${colors.background};
    `}
`