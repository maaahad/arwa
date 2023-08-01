import { styled, css } from "styled-components";


export const CarouselStyled = styled.div`
    position: relative;
    display: grid;
    background-color: white;
    height: 500px;
    border: 1px solid green;
    width: 200px;
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