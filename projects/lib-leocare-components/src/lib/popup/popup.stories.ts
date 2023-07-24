import { CommonModule } from "@angular/common";
import {
  Meta,
  StoryObj,
  componentWrapperDecorator,
  moduleMetadata,
} from "@storybook/angular";
import { ButtonModule } from "../button/button.module";
import { IconModule } from "../icon/icon.module";
import { TextModule } from "../text/text.module";
import { PopupComponent } from "./popup.component";

// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<PopupComponent> = {
  title: "UI/Popups",
  component: PopupComponent,
  argTypes: {
    eIconColor: { table: { disable: true } },
    eTextColor: { table: { disable: true } },
    eTextSize: { table: { disable: true } },
    eTextFamily: { table: { disable: true } },
    eTextAlign: { table: { disable: true } },
    eIconSize: { table: { disable: true } },
    eButtonType: { table: { disable: true } },
    ePopupIconName: { table: { disable: true } },
    ePopupState: { table: { disable: true } },
    cancelEvent: { table: { disable: true } },
    validateEvent: { table: { disable: true } },
  },
  tags: ["autodocs"],
  decorators: [
    componentWrapperDecorator(
      (story) => `<div style="height: 50vh; transform: scale(1)">${story}</div>`
    ),
    moduleMetadata({
      //👇 Imports both components to allow component composition with Storybook
      declarations: [PopupComponent],
      imports: [CommonModule, TextModule, IconModule, ButtonModule],
    }),
  ],
  render: (args: PopupComponent) => ({
    props: {
      ...args,
    },
  }),
};

export default meta;
type Story = StoryObj<PopupComponent>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Default: Story = {
  args: {},
};

export const Toggle: Story = {
  render: (args) => ({
    props: args,
    template: `
    <leo-button text="Afficher / Masquer" (click)="isDisplayed = !isDisplayed"></leo-button>
    <leo-popup *ngIf="isDisplayed" (cancelEvent)="isDisplayed = !isDisplayed" (validateEvent)="isDisplayed = !isDisplayed"></leo-popup>
    `,
  }),
};
