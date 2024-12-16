import type { Meta, StoryObj } from "@storybook/react";
import Toggle from "@/components/toggle/toggle";

const meta: Meta<typeof Toggle> = {
  title: "Toggle",
  component: Toggle,
  parameters: {
    layout: "centered",
  },
  // tags: ["autodocs"],
  argTypes: {
    checked: { control: "boolean" },
    onChange: { action: "changed" },
  },
  args: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Unchecked: Story = {
  args: {
    onChange: (checked: boolean) => {
      console.log(`Toggle is now ${checked ? "checked" : "unchecked"}`);
    },
  },
};

export const Checked: Story = {
  args: {
    checked: true,
    onChange: (checked: boolean) => {
      console.log(`Toggle is now ${checked ? "checked" : "unchecked"}`);
    },
  },
};
