import React from "react";
import Accordion from "./Accordion";
import { Meta, StoryFn } from "@storybook/react";
import ArwaThemeProvider, {Theme} from "../../styles/themes";


export default {
    title: 'Component/Accordion', 
    component: Accordion, 
    decorators: [Story => <ArwaThemeProvider theme={Theme.Light}><Story /></ArwaThemeProvider>]
} as Meta<typeof Accordion>

const Template: StoryFn<typeof Accordion> = (args) => <Accordion {...args}/>

export const Default = Template.bind({})

Default.args = {

}