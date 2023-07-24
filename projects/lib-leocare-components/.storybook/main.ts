import type { StorybookConfig } from "@storybook/angular";
const path = require("path");

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/angular",
    options: {},
  },
  staticDirs: [{ from: "../src/assets", to: "/assets" }],
  docs: {
    autodocs: "tag",
  },
};
export default config;
