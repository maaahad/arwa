import React, {Children, PropsWithChildren, PropsWithRef, ReactElement, ReactNode, useRef, createRef, RefObject, useState, useEffect} from "react";
import { CarouselStyled, ControlButtonStyled, SlidersContainer } from "./styled";
import { ChevronLeft, ChevronRight } from "../../styles/iconography";
import { getComponentRef } from "../../utils/components";
import { scrollIntoView } from "../../utils/window";

type Props = {
    autoSlideDelay?: number // later
    // TODO: is it possible to combine these two??
    withControls?: boolean
    roundControls?: boolean
    slides: ReactElement[],
    forceSlideTo?: number
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

// Write HOC named withRef, withPortal (To avoid repeatation)
const Carousel: React.FC<Props> = React.forwardRef<HTMLDivElement, PropsWithRef<Props>>(({forceSlideTo = 0, autoSlideDelay, slides = [], withControls = true, roundControls = false}, ref) : ReactNode=> {
    const carouselRef = useRef<HTMLDivElement>(null)
    const [currentIndex, setCurrentIndex] = useState<number>(forceSlideTo)
    const slidesLength = slides.length
    
    const slidesRef = useRef<RefObject<HTMLDivElement>[]>(
        Array.from({length: slides.length}, () => createRef<HTMLDivElement>())
    )

    const handleSlideTo = (slideTo: 'left' | 'right') => {
        if(slideTo === 'left') {
            currentIndex === 0 ? setCurrentIndex(slidesLength - 1) : setCurrentIndex(currentIndex - 1)
        } else {
            currentIndex === slidesLength - 1 ? setCurrentIndex(0) : setCurrentIndex(currentIndex + 1)
        }
    }

    const renderSlide = (slide: ReactElement, index: number) => {
        return (
            <div ref={slidesRef.current[index]}>
                {slide}
            </div>
        )
    }

    useEffect(() => {
        scrollIntoView(slidesRef.current[currentIndex].current)
    }, [currentIndex, slidesRef.current[currentIndex]])


    return (
        <CarouselStyled ref={getComponentRef(carouselRef, ref)}>
            {withControls && <Control onClick={handleSlideTo} roundControls={roundControls}/>}
            <SlidersContainer>
                {slides.map(renderSlide)}
            </SlidersContainer>
            {/* add indicators */}
        </CarouselStyled>
    )

})

export default Carousel
