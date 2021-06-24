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
        red: colors.red,
        green: colors.emerald,
        yellow: colors.amber,
        blue: colors.blue,
        purple: colors.violet,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
