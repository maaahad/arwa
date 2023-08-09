import React from "react";
import Carousel from "./Carousel";
import { Meta, StoryFn } from "@storybook/react";
import ArwaThemeProvider, {Theme} from "../../styles/themes";

export default {
    title: 'Components/Carousel',
    component: Carousel,
    decorators: [Story => <ArwaThemeProvider theme={Theme.Light}><Story /></ArwaThemeProvider>]
} as Meta<typeof Carousel>

const style = {
    backgroundColor: '#708090',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}

const Template: StoryFn<typeof Carousel> = (args) => {
    const slides = Array.from({length: 15}, (_v, index) => (
        <div key={index} style={style}>{`Slide ${index}`}</div>
    ))

    return (
        <Carousel {...args} slides={slides}/>
    )
}

export const Default  = Template.bind({})
Default.args = {
    height: 400
}

export const Scrollable  = Template.bind({})
Scrollable.args = {
    height: 400,
    scrollable: true
}

export const RoundControls = Template.bind({})
RoundControls.args = {
    roundControls: true,
    height: 400
}

export const AutoSlide = Template.bind({})
AutoSlide.args = {
    autoSlide: true, 
    height: 400,
    withIndicators: true
}

export const WithIndicators = Template.bind({})
WithIndicators.args = {
    height: 400,
    withIndicators : true
}


export const ForceSlideTo = Template.bind({})

ForceSlideTo.args = {
    height: 400,
    withIndicators : true,
    forceSlideTo: 3
}

export const Loop = Template.bind({})

Loop.args = {
    height: 400,
    withIndicators : true,
    loop: true
}



