import type { Meta, StoryObj } from "@storybook/angular";
import { ButtonComponent } from "./button.component";
import { EButtonSize, EButtonType } from "./button.config";

// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<ButtonComponent> = {
  title: "UI/Button",
  component: ButtonComponent,
  argTypes: {
    buttonTypeClasses: { table: { disable: true } },
    buttonSizeClasses: { table: { disable: true } },
    buttonIconSizeClasses: { table: { disable: true } },
    buttonIconColorClasses: { table: { disable: true } },
    EButtonSize: { table: { disable: true } },
    ngOnInit: { table: { disable: true } },
  },
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Button cliquable avec plusieurs état",
      },
    },
  },
  render: (args: ButtonComponent) => ({
    props: {
      ...args,
    },
  }),
};

export default meta;
type Story = StoryObj<ButtonComponent>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Primary: Story = {
  args: {
    text: "Valider",
    type: EButtonType.PRIMARY,
  },
};
export const Secondary: Story = {
  args: {
    text: "Suivant",
    type: EButtonType.SECONDARY,
  },
};
export const Warning: Story = {
  args: {
    text: "Refuser",
    type: EButtonType.WARNING,
  },
};
export const xs: Story = {
  args: {
    text: "Action",
    size: EButtonSize.XS,
  },
};
export const small: Story = {
  args: {
    text: "Action",
    size: EButtonSize.SMALL,
  },
};
export const medium: Story = {
  args: {
    text: "Action",
    size: EButtonSize.MEDIUM,
  },
};
export const large: Story = {
  args: {
    text: "Action",
    size: EButtonSize.LARGE,
  },
};
export const iconLabel: Story = {
  args: {
    text: "Action",
    iconPath: "./assets/img/icons/cross-grey-100.svg",
  },
};
export const iconButton: Story = {
  args: {
    iconPath: "./assets/img/icons/cross-grey-100.svg",
  },
};
export const loading: Story = {
  render: (args) => ({
    props: args,
    template: `
      <h2>Icon only</h2>
      <leo-button class="block mb-5" [isLoading]="true"></leo-button>
      <h2>With label</h2>
      <leo-button [isLoading]="true" text="Action"></leo-button>
    `,
  }),
};
export const disable: Story = {
  args: {
    text: "Texte",
    isDisable: true,
  },
};
