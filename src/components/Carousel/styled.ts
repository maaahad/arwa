import { styled, css } from "styled-components";


export const CarouselStyled = styled.div`
    position: relative;
    height: 200px;
    border: 1px solid red;
`
// TODO: a util for centerd by flex (centerize)
export const ControlButtonStyled = styled.button<{slot: 'left' | 'right', round?: boolean}>`
    cursor: pointer;
    position: absolute;
    width: 32px; // Configured
    height: 32px; // Configured
    top: 50%;
    transform: translateY(-50%);
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;

    ${({slot, round = false, theme: {colors, shapes, shadows}}) => css`
        border: 1px solid ${colors.border};
        border-radius: ${shapes.borderRadius.sm};
        box-shadow: ${shadows.xs};
        transition: all .3s ease-in; // Should come from theme
        ${round && css`
            border-radius: 50%;
        `}

        ${slot === 'left' ? css`
            left: 0px;
        ` : css`
            right: 0px;
        `}

        &:hover {
            background-color: ${colors.background};
        }
    `}

`

export const SlidersContainer = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 100%;
    grid-auto-rows: 100%;
    overflow-x: scroll;
    gap: 80px;
    & > * {
        border: 1px solid yellow;
        width:30%;
        height: 100%;
        background-color: green;
    }
`