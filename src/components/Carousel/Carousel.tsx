import React, {PropsWithRef, ReactElement, ReactNode, useRef, createRef, RefObject, useState, useEffect} from "react";
import { CarouselStyled, ControlButtonStyled, SlidesContainer, Slide, IndicatorsStyled, IndicatorDot } from "./styled";
import { ChevronLeft, ChevronRight } from "../../styles/iconography";
import { getComponentRef } from "../../utils/components";
import { scrollIntoView } from "../../utils/window";
import type { OddNumber } from "../../utils/types";


type Direction = 'left' | 'right'

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
    scrollable?: boolean
    maxIndicators?: OddNumber<11>
}

type ControlProps = {
    onClick: (slideTo: Direction) => void
    roundControls?: boolean
    disabledRightControl?: boolean
    disabledLeftControl?: boolean
}

type ControlButtonProps = {
    slot: Direction
    round?: boolean
    onClick: (slideTo: Direction) => void
    disabled?: boolean
}

type IndicatorsProps = {
    selectedIndex: number
    total: number
    onSlide: (to: number) => void
    maxIndicators?: OddNumber<11>
}

const ControlButton: React.FC<ControlButtonProps> = ({slot, round = false, onClick, disabled = false}) => {
    return (
        <ControlButtonStyled slot={slot} round={round} onClick={() => onClick(slot)} disabled={disabled}>
            {slot === 'left' ? <ChevronLeft/>: <ChevronRight/>}
        </ControlButtonStyled>
    )
}

// TODO: ForwardRef
const Control: React.FC<ControlProps> = ({onClick, roundControls = false, disabledRightControl = false, disabledLeftControl = false}) => {
    return (
        <>
            <ControlButton onClick={onClick} slot="left" round={roundControls} disabled={disabledLeftControl}/>
            <ControlButton onClick={onClick} slot="right" round={roundControls} disabled={disabledRightControl}/>
        </>
    )
}

// TODO: ForwardRef
const Indicators:React.FC<IndicatorsProps> = ({selectedIndex, total, onSlide, maxIndicators = 5}) => {
    const ref = useRef<number>(selectedIndex)
    const [translate, setTranslate] = useState<number>(0)

    const max = Math.min(total, maxIndicators)
    const middleNumber = Math.ceil(max / 2)
    const gap = 4
    const size = 8
    const indicatorsWidth = max * size + (max - 1) * gap

    useEffect(() => {
        if(selectedIndex >= 0 && selectedIndex < total) {
            const mult = ref.current - selectedIndex
            // TODO: simplify + cover edge cases!!!
            if(total > max && selectedIndex + (mult > 0 ? 1 : 0) > middleNumber && selectedIndex + middleNumber + (mult > 0 ? 1 : 0) < total) {
                setTranslate(translate + mult * (size + gap))
            }
            ref.current = selectedIndex
        }

    }, [selectedIndex, ref, translate])


    return (
        <IndicatorsStyled size={size} width={indicatorsWidth} gap={gap}>
                {
                    Array.from({length: total}, (_v, index) => (
                        <IndicatorDot translate={translate} selected={index === selectedIndex} onClick={() => onSlide(index)}/>
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
    scrollable = false, 
    maxIndicators = 5,
}, ref) : ReactNode=> {
    const carouselRef = useRef<HTMLDivElement>(null)
    const slidesLength = slides.length
    const [currentIndex, setCurrentIndex] = useState<number>(forceSlideTo < slidesLength ? forceSlideTo : 0)
    const slidesRef = useRef<RefObject<HTMLDivElement>[]>(
        Array.from({length: slides.length}, () => createRef<HTMLDivElement>())
    )

    
    const isControlDisabled = (controlPosition: Direction) => {
        if(!loop) {
            if(controlPosition === 'left') return currentIndex === 0
            else return currentIndex === slidesLength - 1
        }

        return false
    }

    const handleSlideTo = (slideTo: Direction) => {
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
            <SlidesContainer scrollable={scrollable}>
                {slides.map(renderSlide)}
            </SlidesContainer>
            {withIndicators && <Indicators selectedIndex={currentIndex} total={slidesLength} onSlide={setCurrentIndex} maxIndicators={maxIndicators}/> }

        </CarouselStyled>
    )

})

export default Carousel
