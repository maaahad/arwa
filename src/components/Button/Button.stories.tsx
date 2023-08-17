import React from "react";
import Button from "./Button";
import { Meta, StoryFn } from "@storybook/react";
import ArwaThemeProvider, { Theme } from "../../styles/themes";

export default {
  title: "Components/Button",
  component: Button,
  decorators: [
    (Story) => (
      <ArwaThemeProvider theme={Theme.Light}>
        {" "}
        <Story />
      </ArwaThemeProvider>
    ),
  ],
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  label: "Primary Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Secondary Button",
  variant: "secondary",
};
