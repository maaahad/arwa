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
      <Tabs.Tab label="Tab 1">
        <Tabs.TabContent>This is tab content 1</Tabs.TabContent>
      </Tabs.Tab>
      <Tabs.Tab label="Tab 2">
        <Tabs.TabContent>This is tab content 2</Tabs.TabContent>
      </Tabs.Tab>
      <Tabs.Tab label="Tab 3">
        <Tabs.TabContent>This is tab content 3</Tabs.TabContent>
      </Tabs.Tab>
    </Tabs>
  );
};

export const Default = Template.bind({});
