import { styled, css } from "styled-components";


export const CarouselStyled = styled.div`
    position: relative;
    display: grid;
    background-color: grey;
    height: 500px;
`

export const ControlStyled = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const ControlButton = styled.button`
    background-color: #cbcbcb;
    width: 40px; // Configured
    height: 40px; // Configured
`