import React from "react";
import Button from "./Button";
import { Meta, StoryFn } from "@storybook/react";


export default {
    title: "Components/Button",
    component: Button
} as Meta<typeof Button>

const Template: StoryFn<typeof Button> = (args) => <Button {...args}/>

export const Primary = Template.bind({})

Primary.args = {
    label: "Primary Button"
}