import React, { useState } from "react";
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
  const [activeTab, setAtiveTab] = useState<string>("Tab 1");

  return (
    <Tabs {...args} value={activeTab} onChange={setAtiveTab}>
      <Tabs.List variant="segment">
        <Tabs.Tab value="Tab 1">
          <p>Tab one</p>
        </Tabs.Tab>
        <Tabs.Tab value="Tab 2">
          <p>Tab two</p>
        </Tabs.Tab>
        <Tabs.Tab value="Tab 3">
          <p>Tab three</p>
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panels>
        <Tabs.Panel value="Tab 1">
          <p>Content of Tab 1</p>
        </Tabs.Panel>
        <Tabs.Panel value="Tab 2">
          <p>Content of Tab 2</p>
        </Tabs.Panel>
        <Tabs.Panel value="Tab 3">
          <p>Content of Tab 3</p>
        </Tabs.Panel>
      </Tabs.Panels>
    </Tabs>
  );
};

export const Default = Template.bind({});
