import { CommonModule } from "@angular/common";
import { StoryObj, moduleMetadata, type Meta } from "@storybook/angular";
import { ButtonModule } from "primeng/button";
import { ButtonPrimeComponent } from "./button-prime.component";

// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<ButtonPrimeComponent> = {
  title: "UI/Button/PrimeNG",
  component: ButtonPrimeComponent,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Surcouche composant prime NG (cf https://www.primefaces.org/primeng-v14-lts/button)",
      },
      previewSource: "open",
    },
  },
  decorators: [
    moduleMetadata({
      //👇 Imports both components to allow component composition with Storybook
      declarations: [ButtonPrimeComponent],
      imports: [CommonModule, ButtonModule],
    }),
  ],
  render: (args: ButtonPrimeComponent) => ({
    props: {
      ...args,
    },
  }),
};

export default meta;
type Story = StoryObj<ButtonPrimeComponent>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Primary: Story = {
  args: {
    label: "Button",
  },
};
