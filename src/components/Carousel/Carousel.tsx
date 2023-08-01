import React from "react";
import { CarouselStyled, ControlButtonStyled } from "./styled";
import { ChevronLeft, ChevronRight } from "../../styles/iconography";

type Props = {
    autoSlideDelay?: number
    withControls?: boolean
    roundControls?: boolean
}

type ControlProps = {
    onClick: (slideTo: 'left' | 'right') => void
    roundControls?: boolean
}

type ControlButtonProps = {
    slot: 'left' | 'right'
    round?: boolean
    onClick: (slideTo: 'left' | 'right') => void
}

// TODO: next Indicators (dots), can be used in case single per show only

// TODO: build on top of IconButton
const ControlButton: React.FC<ControlButtonProps> = ({slot, round = false, onClick}) => {
    return (
        <ControlButtonStyled slot={slot} round={round} onClick={() => onClick(slot)}>
            {slot === 'left' ? <ChevronLeft/>: <ChevronRight/>}
        </ControlButtonStyled>
    )
}

const Control: React.FC<ControlProps> = ({onClick, roundControls = false}) => {
    return (
        <>
            <ControlButton onClick={onClick} slot="left" round={roundControls}/>
            <ControlButton onClick={onClick} slot="right" round={roundControls}/>
        </>
    )
}

const Carousel: React.FC<Props> = ({autoSlideDelay, withControls = true, roundControls = false}) => {
    // TODO: Implement
    const handleSlideTo = (slideTo: 'left' | 'right') => {
        console.log('Sliding to : ', slideTo)
    }

    return (
        <CarouselStyled>
            {withControls && <Control onClick={handleSlideTo} roundControls={roundControls}/>}
            <div>This is the content of the Carousel</div>
        </CarouselStyled>
    )
}


export default Carousel
