module.exports = {
  presets: [
    require("./projects/lib-leocare-components/tailwind-base.config.js"),
  ],
  // ...
  theme: {
    extend: {
      borderRadius: {
        "6xl": "3rem",
      },
    },
  },
};
