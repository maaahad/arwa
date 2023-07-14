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
        </>

    )
}