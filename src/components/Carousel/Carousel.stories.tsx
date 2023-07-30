import React from "react";
import Carousel from "./Carousel";
import { Meta, StoryFn } from "@storybook/react";
import ArwaThemeProvider, {Theme} from "../../styles/themes";

export default {
    title: 'Components/Carousel',
    component: Carousel,
    decorators: [Story => <ArwaThemeProvider theme={Theme.Light}><Story /></ArwaThemeProvider>]
} as Meta<typeof Carousel>

const Teamplate: StoryFn<typeof Carousel> = (args) => <Carousel {...args}/>

export const Default  = Teamplate.bind({})
Default.args = {
    
}