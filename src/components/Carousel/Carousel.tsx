import React, {PropsWithRef, ReactElement, ReactNode, useRef, createRef, RefObject, useState, useEffect} from "react";
import { CarouselStyled, ControlButtonStyled, SlidesContainer, Slide, IndicatorsStyled, IndicatorDot } from "./styled";
import { ChevronLeft, ChevronRight } from "../../styles/iconography";
import { getComponentRef } from "../../utils/components";
import { scrollIntoView } from "../../utils/window";


type SlideDirection = 'left' | 'right'

type Props = {
    withControls?: boolean
    roundControls?: boolean
    slides: ReactElement[],
    forceSlideTo?: number
    height: number
    autoSlide?: boolean
    autoSlideInterval?: number 
    withIndicators?: boolean
    loop?: boolean
}

type ControlProps = {
    onClick: (slideTo: SlideDirection) => void
    roundControls?: boolean
    disabledRightControl?: boolean
    disabledLeftControl?: boolean
}

type ControlButtonProps = {
    slot: SlideDirection
    round?: boolean
    onClick: (slideTo: SlideDirection) => void
    disabled?: boolean
}

type IndicatorsProps = {
    selectedIndex: number, 
    total: number
    onSlide: (to: number) => void
}

const ControlButton: React.FC<ControlButtonProps> = ({slot, round = false, onClick, disabled = false}) => {
    return (
        <ControlButtonStyled slot={slot} round={round} onClick={() => onClick(slot)} disabled={disabled}>
            {slot === 'left' ? <ChevronLeft/>: <ChevronRight/>}
        </ControlButtonStyled>
    )
}

const Control: React.FC<ControlProps> = ({onClick, roundControls = false, disabledRightControl = false, disabledLeftControl = false}) => {
    return (
        <>
            <ControlButton onClick={onClick} slot="left" round={roundControls} disabled={disabledLeftControl}/>
            <ControlButton onClick={onClick} slot="right" round={roundControls} disabled={disabledRightControl}/>
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
    withIndicators = false,
    loop = false,
}, ref) : ReactNode=> {
    const carouselRef = useRef<HTMLDivElement>(null)
    const slidesLength = slides.length
    const [currentIndex, setCurrentIndex] = useState<number>(forceSlideTo < slidesLength ? forceSlideTo : 0)
    const slidesRef = useRef<RefObject<HTMLDivElement>[]>(
        Array.from({length: slides.length}, () => createRef<HTMLDivElement>())
    )

    
    const isControlDisabled = (controlPosition: SlideDirection) => {
        if(!loop) {
            if(controlPosition === 'left') return currentIndex === 0
            else return currentIndex === slidesLength - 1
        }

        return false
    }

    const handleSlideTo = (slideTo: SlideDirection) => {
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
            {withControls && !autoSlide && <Control onClick={handleSlideTo} roundControls={roundControls} disabledRightControl={isControlDisabled('right')} disabledLeftControl={isControlDisabled('left')}/>}
            <SlidesContainer>
                {slides.map(renderSlide)}
            </SlidesContainer>
            {withIndicators && <Indicators selectedIndex={currentIndex} total={slidesLength} onSlide={setCurrentIndex}/> }

        </CarouselStyled>
    )

})

export default Carousel
