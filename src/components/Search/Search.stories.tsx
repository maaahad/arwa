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
  const testSearchHints = [
    {
      label: "Muhammed ahad",
      key: 10,
    },
    {
      label: "Arwa",
      isOptional: true,
    },
    {
      label: "Arwa Ahad",
    },
    {
      label: "Israt Jahan",
    },
    {
      label: "Israt",
    },
    {
      label: "Storckholm",
    },
  ];
  const [value, setValue] = useState<string>("");
  const [searchHints, setSearchHints] = useState<typeof testSearchHints>([]);

  const handleSerchOptionSelect = (hint?: (typeof testSearchHints)[number]) => {
    setValue("");
    setSearchHints([]);

    // Note: Normally this result in redirection on client side
    console.log(hint);
  };

  const handleValueChange = (value: string) => {
    setValue(value);
    // Note: search matching logic in implemented on Client side
    setSearchHints(
      value ? testSearchHints.filter((hint) => hint.label.includes(value)) : [],
    );
  };

  return (
    <Search
      {...args}
      searchHints={searchHints}
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

export const ResponsiveWidth = Template.bind({});

ResponsiveWidth.args = {
  placeholder: "Type e.g Caming name (responsive width)",
  width: [300, 400, 500, 600, "100%"],
};
