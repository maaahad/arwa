import React from "react";
import Accordion, {AccordionItem, AccordionContent} from "./Accordion";
import { Meta, StoryFn } from "@storybook/react";
import ArwaThemeProvider, {Theme} from "../../styles/themes";

export default {
    title: 'Component/Accordion', 
    component: Accordion, 
    decorators: [Story => <ArwaThemeProvider theme={Theme.Light}><Story /></ArwaThemeProvider>]
} as Meta<typeof Accordion>

const Template: StoryFn<typeof Accordion> = (args) => {
    return (
        <Accordion {...args}>
            <AccordionItem title="Title1">
                <div>
                    akf alsf jalf alfjlafj af alfj alsfj alf alf
                    akf alsf jalf alfjlafj af alfj alsfj alf alf
                    akf alsf jalf alfjlafj af alfj alsfj alf alf
                    akf alsf jalf alfjlafj af alfj alsfj alf alf
                    akf alsf jalf alfjlafj af alfj alsfj alf alf
                </div>
            </AccordionItem>
            <AccordionItem title="Title 2">
                <div>
                    akf alsf jalf alfjlafj af alfj alsfj alf alf
                    akf alsf jalf alfjlafj af alfj alsfj alf alf
                    akf alsf jalf alfjlafj af alfj alsfj alf alf
                    akf alsf jalf alfjlafj af alfj alsfj alf alf
                    akf alsf jalf alfjlafj af alfj alsfj alf alf
                </div>
            </AccordionItem>
            <AccordionItem title="Title3">
                <div>
                    akf alsf jalf alfjlafj af alfj alsfj alf alf
                    akf alsf jalf alfjlafj af alfj alsfj alf alf
                    akf alsf jalf alfjlafj af alfj alsfj alf alf
                    akf alsf jalf alfjlafj af alfj alsfj alf alf
                    akf alsf jalf alfjlafj af alfj alsfj alf alf
                </div>
            </AccordionItem>
        </Accordion>
    )
}

export const Default = Template.bind({})

export const SingleOpen = Template.bind({})
SingleOpen.args = {
    singleOpen: true
}