
import React from "react";
import Heading1 from "./Heading1";
import ArwaThemeProvider, {Theme} from "../../themes";
import { Meta, StoryFn } from "@storybook/react";


export default {
    title: "Component/Typography",
    component: Heading1, 
    decorators: [Story => <ArwaThemeProvider theme={Theme.Light}> <Story /></ArwaThemeProvider>]

} as Meta<typeof Heading1>

const Template: StoryFn<typeof Heading1> = ({children}) => <Heading1>{children}</Heading1>

export const h1 = Template.bind({})
h1.args = {
    children: "I am a h1 tag"
}
