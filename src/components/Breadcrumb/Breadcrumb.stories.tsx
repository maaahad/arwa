import React from "react";
import Breadcrumb from "./Breadcrumb";
import { Meta, StoryFn } from "@storybook/react";
import ArwaThemeProvider, { Theme } from "../../styles/themes";
import { Icons } from "../..";

export default {
  title: "Components/Breadcrumb",
  component: Breadcrumb,
  decorators: [
    (Story) => (
      <ArwaThemeProvider theme={Theme.Light}>
        <Story />
      </ArwaThemeProvider>
    ),
  ],
} as Meta<typeof Breadcrumb>;

const Template: StoryFn<typeof Breadcrumb> = (args) => {
  const breadcrumbs = [
    { label: "Page 1", url: "/search", icon: <Icons.ChevronDown /> },
    { label: "Page 2", url: "/webhp", icon: <Icons.ChevronDown /> },
    { label: "Page 3", url: "/doodles" },
  ];
  return <Breadcrumb {...args} breadcrumbs={breadcrumbs} />;
};

export const Default = Template.bind({});
Default.args = {
  baseUrl: "http://google.se",
};
