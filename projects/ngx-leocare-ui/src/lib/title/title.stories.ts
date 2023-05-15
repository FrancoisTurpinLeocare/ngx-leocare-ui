import type { Meta, StoryObj } from "@storybook/angular";
import { TitleComponent } from "../title/title.component";
import {
  EAtomTitleDisplayConfig,
  EAtomTitleLevel,
} from "../title/title.config";

// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<TitleComponent> = {
  title: "UI/Title",
  component: TitleComponent,
  tags: ["autodocs"],
  render: (args: TitleComponent) => ({
    props: {
      ...args,
    },
  }),
};

export default meta;
type Story = StoryObj<TitleComponent>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const H1: Story = {
  args: {
    level: EAtomTitleLevel.H1,
    text: "Je suis un titre H1",
    displayConfig: EAtomTitleDisplayConfig.DISPLAY_H1,
  },
};
export const H2: Story = {
  args: {
    level: EAtomTitleLevel.H2,
    text: "Je suis un titre H2",
    displayConfig: EAtomTitleDisplayConfig.DISPLAY_H2,
  },
};
export const H3: Story = {
  args: {
    level: EAtomTitleLevel.H3,
    text: "Je suis un titre H3",
    displayConfig: EAtomTitleDisplayConfig.DISPLAY_H3,
  },
};
export const H4: Story = {
  args: {
    level: EAtomTitleLevel.H4,
    text: "Je suis un titre H4",
    displayConfig: EAtomTitleDisplayConfig.DISPLAY_H4,
  },
};
