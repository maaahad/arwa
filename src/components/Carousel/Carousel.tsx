import React from "react";
import { CarouselStyled, ControlStyled, ControlButton } from "./styled";


type Props = {
    autoSlideDelay?: number
    withControls?: boolean
}

type ControlProps = {
    onClick: (slideTo: 'left' | 'right') => void
}

// ControlButton would an separate component (IconButton like)
const Control: React.FC<ControlProps> = ({onClick}) => {
    return (
        <ControlStyled onClick={() => console.log('I should not be invoked: Need Different approach')}>
            <ControlButton onClick={() => onClick('left')}/>
            <ControlButton onClick={() => onClick('right')}/>
        </ControlStyled>
    )
}

const Carousel: React.FC<Props> = ({autoSlideDelay, withControls = true}) => {
    // TODO: Implement
    const handleSlideTo = (slideTo: 'left' | 'right') => {
        console.log('Sliding to : ', slideTo)
    }

    return (
        <CarouselStyled>
            {withControls && <Control onClick={handleSlideTo}/>}
            <div>This is the content of the Carousel</div>
        </CarouselStyled>
    )
}


export default Carousel
