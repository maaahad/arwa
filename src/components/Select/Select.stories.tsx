import React from "react";
import ArwaThemeProvider, {Theme} from "../../styles/themes";
import Select from "./Select";

import { Meta, StoryFn } from "@storybook/react";

export default {
    title: 'Components/Select',
    component: Select, 
    decorators: [
        (Story) => (
            <ArwaThemeProvider theme={Theme.Light}><Story /></ArwaThemeProvider>
        )
    ]
} as Meta<typeof Select>;

const Template: StoryFn<typeof Select> = (args) => {
    return <Select {...args}/>
}

export const Default = Template.bind({})
Default.args = {
    
}