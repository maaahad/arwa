import React from "react";
import ArwaThemeProvider, { Theme } from "../../styles/themes";
import Tabs from "./Tabs";
import { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Components/Tab",
  compoennt: Tabs,
  decorators: [
    (Story) => (
      <ArwaThemeProvider theme={Theme.Light}>
        <Story />
      </ArwaThemeProvider>
    ),
  ],
} as Meta<typeof Tabs>;

const Template: StoryFn<typeof Tabs> = (args) => {
  return (
    <Tabs {...args}>
      <div>Implementing</div>
    </Tabs>
  );
};

export const Default = Template.bind({});
