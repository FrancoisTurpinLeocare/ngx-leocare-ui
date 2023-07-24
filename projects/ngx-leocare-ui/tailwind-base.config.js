module.exports = {
  important: true,
  content: [
    "./projects/lib-leocare-components/src/lib/**/*.{html,ts,mdx}",
    "./projects/lib-leocare-components/src/doc/**/*.mdx",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      purple: {
        95: "#F0ECFA",
        55: "#6F43D6",
        25: "#410079",
      },
      cyan: {
        90: "#D4FAF5",
        70: "#70EFDD",
      },
      yellow: {
        90: "#FFF6CB",
        55: "#ECD524",
        25: "#786B06",
      },
      grey: {
        100: "#FFF",
        95: "#F2F4F8",
        90: "#EBEBEB",
        80: "#C2D1D9",
        40: "#58627C",
        25: "#2E374D",
        0: "#000",
      },
      green: {
        95: "#E5FBE6",
        50: "#46C38E",
        30: "#287B53",
      },
      orange: {
        90: "#FFEDD2",
        65: "#FEB241",
        30: "#9A5D01",
      },
      red: {
        95: "#FFE0E0",
        70: "#F36D6D",
        40: "#B90B20",
      },
    },
    fontFamily: {
      paytone: ["Paytone One", "sans-serif"],
      steven: ["Steven", "sans-serif"],
      hole: ["Hole", "sans-serif"],
    },
    extend: {
      fontSize: {
        xxs: "0.625rem",
        "3.5xl": "2rem",
      },
    },
  },
  plugins: [],
};
