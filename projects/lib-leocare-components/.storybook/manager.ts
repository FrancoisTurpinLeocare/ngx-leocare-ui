// .storybook/manager.js

import { addons } from "@storybook/manager-api";
import leocareTheme from "./leocareTheme";

addons.setConfig({
  theme: leocareTheme,
});
