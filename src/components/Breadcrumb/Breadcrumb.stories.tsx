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
    <a href="">Page 1</a>,
    <a href="">Page 2</a>,
    <a href="">Page 3</a>,
  ];
  return <Breadcrumb {...args} breadcrumbs={breadcrumbs} />;
};

export const Default = Template.bind({});
Default.args = {};
