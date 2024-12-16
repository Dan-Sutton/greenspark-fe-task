import type { Meta, StoryObj } from "@storybook/react";
import ColorSelect from "@/components/color-selector/color-select/color-select";

const meta: Meta<typeof ColorSelect> = {
  title: "Color Selector",
  component: ColorSelect,
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

export const Blue: Story = {
  args: {
    color: "blue",
    onChange: (checked: boolean) => {
      console.log(`Toggle is now ${checked ? "checked" : "unchecked"}`);
    },
  },
};

export const Green: Story = {
  args: {
    color: "green",
    onChange: (checked: boolean) => {
      console.log(`Toggle is now ${checked ? "checked" : "unchecked"}`);
    },
  },
};

export const Ivory: Story = {
  args: {
    color: "ivory",
    onChange: (checked: boolean) => {
      console.log(`Toggle is now ${checked ? "checked" : "unchecked"}`);
    },
  },
};

export const White: Story = {
  args: {
    color: "white",
    onChange: (checked: boolean) => {
      console.log(`Toggle is now ${checked ? "checked" : "unchecked"}`);
    },
  },
};

export const Black: Story = {
  args: {
    color: "black",
    onChange: (checked: boolean) => {
      console.log(`Toggle is now ${checked ? "checked" : "unchecked"}`);
    },
  },
};
