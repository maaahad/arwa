import React, { useState } from "react";
import ArwaThemeProvider, { Theme } from "../../styles/themes";
import Search from "./Search";
import { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Components/Search",
  component: Search,
  decorators: [
    (Story) => (
      <ArwaThemeProvider theme={Theme.Light}>
        <Story />
      </ArwaThemeProvider>
    ),
  ],
} as Meta<typeof Search>;

const Template: StoryFn<typeof Search> = (args) => {
  const [value, setValue] = useState<string>("");

  return <Search {...args} value={value} onChange={setValue} />;
};

export const Default = Template.bind({});
Default.args = {
  placeholder: "Type e.g Caming name",
  searchResults: [],
};

export const WithSearchResults = Template.bind({});
WithSearchResults.args = {
  placeholder: "Type e.g Caming name",
  searchResults: ["option 1", "option 2"],
};
