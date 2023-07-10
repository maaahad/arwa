import React from "react";
import Accordion, {AccordionItem} from "./Accordion";
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
    children: (
        <>
            <AccordionItem>
                <div>Title1</div>
                <div>Content1</div>
            </AccordionItem>
            <AccordionItem>
                <div>Title2</div>
                <div>Content2</div>
            </AccordionItem>
            <AccordionItem>
                <div>Title3</div>
                <div>Content3</div>
            </AccordionItem>
        </>

    )
}