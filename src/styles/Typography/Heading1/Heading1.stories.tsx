
import React from "react";
import Heading1 from "./Heading1";
import ArwaThemeProvider, {Theme} from "../../themes";
import { Meta, StoryFn } from "@storybook/react";


export default {
    title: "Component/Typography",
    component: Heading1, 
    decorators: [Story => <ArwaThemeProvider theme={Theme.Light}> <Story /></ArwaThemeProvider>]

} as Meta<typeof Heading1>

const Template: StoryFn<typeof Heading1> = ({children, ...props}) => <Heading1 {...props}>{children}</Heading1>

export const Default = Template.bind({})
Default.args = {
    children: "I am a h1 tag",
    size: '7xl'
}

export const SecondaryXS = Template.bind({})

SecondaryXS.args = {
    children: "Secondary Heading1",
    secondary: true,
    size: 'xs'
}
