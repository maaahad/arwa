import React from "react";
import Breadcrumb from "./Breadcrumb";
import { Meta, StoryFn } from "@storybook/react";
import ArwaThemeProvider, {Theme} from "../../styles/themes";

export default {
    title: 'Components/Breadcrumb', 
    component: Breadcrumb, 
    decorators: [
        (Story) => (
            <ArwaThemeProvider theme={Theme.Light}>
                <Story />
            </ArwaThemeProvider>
        )
    ]
} as Meta<typeof Breadcrumb>

const Template: StoryFn<typeof Breadcrumb> = (args) => {
    const breadcrumbs = [
        {label: 'Page 1', path: ''},
        {label: 'Page 2',  path: ''},
        {label: 'Page 3',  path: ''},
        {label: 'Page 4',  path: ''},
        {label: 'Page 5',  path: ''},
    ]
    return <Breadcrumb {...args} breadcrumbs={breadcrumbs}/>
}

export const Default = Template.bind({});
Default.args = {
}