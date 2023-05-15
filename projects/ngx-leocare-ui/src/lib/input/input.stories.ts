import type { Meta, StoryObj } from "@storybook/angular";
import { InputComponent } from "./input.component";
import { EInputType } from "./input.config";

// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<InputComponent> = {
  title: "UI/Input",
  component: InputComponent,
  tags: ["autodocs"],
  render: (args: InputComponent) => ({
    props: {
      ...args,
    },
  }),
};

export default meta;
type Story = StoryObj<InputComponent>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Normal: Story = {
  args: {
    label: "Label",
    placeholder: "Un placeholder",
    type: EInputType.TEXT,
  },
};
export const Invalid: Story = {
  args: {
    label: "Label",
    placeholder: "Un placeholder",
    type: EInputType.TEXT,
    isInvalid: true,
  },
};
export const Valid: Story = {
  args: {
    label: "Label",
    placeholder: "Un placeholder",
    type: EInputType.TEXT,
    isValid: true,
  },
};
export const Disabled: Story = {
  args: {
    label: "Label",
    placeholder: "Un placeholder",
    type: EInputType.TEXT,
    isDisabled: true,
  },
};
export const Required: Story = {
  args: {
    label: "Label",
    placeholder: "Un placeholder",
    type: EInputType.TEXT,
    isRequired: true,
  },
};
