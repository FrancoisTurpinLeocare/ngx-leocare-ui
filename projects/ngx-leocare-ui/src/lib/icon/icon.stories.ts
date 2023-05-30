import type { Meta, StoryObj } from "@storybook/angular";
import { IconComponent } from "./icon.component";
import { EIconColor, EIconSize } from "./icon.config";

// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<IconComponent> = {
  title: "UI/Icon",
  component: IconComponent,
  argTypes: {
    baseIconUrl: { table: { disable: true } },
    iconStyles: { table: { disable: true } },
    iconSizeClasses: { table: { disable: true } },
    ngOnInit: { table: { disable: true } },
  },
  tags: ["autodocs"],
  render: (args: IconComponent) => ({
    props: {
      ...args,
      description: {
        component:
          "Composant d'icone, charge un svg depuis son nom, applique les couleurs du design system depuis son enum de config",
      },
    },
  }),
};

export default meta;
type Story = StoryObj<IconComponent>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const SquareXXL: Story = {
  args: {
    name: "cross",
    size: EIconSize.SQUARE_75PX,
    color: EIconColor.GREY_0,
  },
};
export const SquareXL: Story = {
  args: {
    name: "cross",
    size: EIconSize.SQUARE_50PX,
    color: EIconColor.GREY_0,
  },
};
export const SquareL: Story = {
  args: {
    name: "cross",
    size: EIconSize.SQUARE_24PX,
    color: EIconColor.GREY_0,
  },
};
export const SquareM: Story = {
  args: {
    name: "cross",
    size: EIconSize.SQUARE_20PX,
    color: EIconColor.GREY_0,
  },
};
export const SquareS: Story = {
  args: {
    name: "cross",
    size: EIconSize.SQUARE_16PX,
    color: EIconColor.GREY_0,
  },
};
export const SquareXS: Story = {
  args: {
    name: "cross",
    size: EIconSize.SQUARE_12PX,
    color: EIconColor.GREY_0,
  },
};
export const SquareXXS: Story = {
  args: {
    name: "cross",
    size: EIconSize.SQUARE_10PX,
    color: EIconColor.GREY_0,
  },
};
