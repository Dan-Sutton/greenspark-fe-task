import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Checkbox } from "./checkbox";

export default {
  title: "Example/Checkbox",
  component: Checkbox,
  argTypes: {
    checked: { control: "boolean" },
    onChange: { action: "changed" },
  },
} as Meta;

const Template: StoryFn<{
  checked: boolean;
  onChange: (checked: boolean) => void;
}> = (args: { checked: boolean; onChange: (checked: boolean) => void }) => (
  <Checkbox {...args} />
);

export const Unchecked = Template.bind({});
Unchecked.args = {
  checked: false,
};

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
};
