import { setCompodocJson } from "@storybook/addon-docs/angular";
import type { Preview } from "@storybook/angular";
import docJson from "../documentation.json";
import leocareTheme from "./leocareTheme";

require("../src/styles.css");

setCompodocJson(docJson);

const preview: Preview = {
  parameters: {
    docs: {
      theme: leocareTheme,
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
