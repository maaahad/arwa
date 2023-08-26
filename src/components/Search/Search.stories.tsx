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
  const testSearchOptions = [
    "Muhammed ahad",
    "Arwa",
    "israt",
    "bangladesh",
    "Stockholm",
    "Arwa Ahad",
  ];
  const [value, setValue] = useState<string>("");
  const [searchOptions, setSearchOptions] = useState<string[]>([]);

  const handleSerchOptionSelect = (searchOption?: string) => {
    setValue("");
    setSearchOptions([]);

    // Note: Normally this result in redirection on client side
  };

  const handleValueChange = (value: string) => {
    setValue(value);
    // Note: search matching logic in implemented on Client side
    setSearchOptions(
      value ? testSearchOptions.filter((option) => option.includes(value)) : [],
    );
  };

  return (
    <Search
      {...args}
      searchOptions={searchOptions}
      value={value}
      onChange={handleValueChange}
      onSelectSearchOption={handleSerchOptionSelect}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  placeholder: "Type e.g Caming name",
};
