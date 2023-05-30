import type { Meta, StoryObj } from "@storybook/angular";
import { TextComponent } from "./text.component";

// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<TextComponent> = {
  title: "UI/Text",
  component: TextComponent,
  argTypes: {
    TEXT_SIZE_CONFIG: { table: { disable: true } },
    TEXT_ALIGN_CONFIG: { table: { disable: true } },
    TEXT_FAMILY_CONFIG: { table: { disable: true } },
    TEXT_COLOR_CONFIG: { table: { disable: true } },
  },
  tags: ["autodocs"],
  render: (args: TextComponent) => ({
    props: {
      ...args,
    },
  }),
};

export default meta;
type Story = StoryObj<TextComponent>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Default: Story = {
  args: {
    text: "Je suis un text exemple",
  },
};
