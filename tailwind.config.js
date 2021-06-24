const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        primary: colors.emerald,
        dark: colors.coolGray,
        notblack: "#141414",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
