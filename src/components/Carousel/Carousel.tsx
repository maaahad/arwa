import React, {PropsWithRef, ReactElement, ReactNode, useRef, createRef, RefObject, useState, useEffect} from "react";
import { CarouselStyled, ControlButtonStyled, SlidesContainer, Slide, IndicatorsStyled, IndicatorDot } from "./styled";
import { ChevronLeft, ChevronRight } from "../../styles/iconography";
import { getComponentRef } from "../../utils/components";
import { scrollIntoView } from "../../utils/window";

type Props = {
    withControls?: boolean
    roundControls?: boolean
    slides: ReactElement[],
    forceSlideTo?: number
    height: number
    autoSlide?: boolean
    autoSlideInterval?: number 
    withIndicators?: boolean
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

type IndicatorsProps = {
    selectedIndex: number, 
    total: number
    onSlide: (to: number) => void
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

const Indicators:React.FC<IndicatorsProps> = ({selectedIndex, total, onSlide}) => {
    return (
        <IndicatorsStyled>
            {
                Array.from({length: total}, (_v, index) => (
                    <IndicatorDot selected={index === selectedIndex} onClick={() => onSlide(index)}/>
                ))
            }
        </IndicatorsStyled>
    )
}

// Write HOC named withRef, withPortal (To avoid repeatation)
const Carousel: React.FC<Props> = React.forwardRef<HTMLDivElement, PropsWithRef<Props>>(({
    autoSlideInterval = 3000, 
    autoSlide = false, 
    height, 
    forceSlideTo = 0, 
    slides = [], 
    withControls = true, 
    roundControls = false,
    withIndicators = false
}, ref) : ReactNode=> {
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
            <Slide ref={slidesRef.current[index]}>
                {slide}
            </Slide>
        )
    }

    useEffect(() => {
        scrollIntoView(slidesRef.current[currentIndex].current)
    }, [currentIndex, slidesRef.current[currentIndex]])


    useEffect(() => {
        if(autoSlide) {
            setInterval(() => handleSlideTo('right'), autoSlideInterval)
        }
    }, [handleSlideTo, autoSlide])

    return (
        <CarouselStyled ref={getComponentRef(carouselRef, ref)} height={height}>
            {withControls && !autoSlide && <Control onClick={handleSlideTo} roundControls={roundControls}/>}
            <SlidesContainer>
                {slides.map(renderSlide)}
            </SlidesContainer>
            {withIndicators && <Indicators selectedIndex={currentIndex} total={slidesLength} onSlide={setCurrentIndex}/> }

        </CarouselStyled>
    )

})

export default Carousel
