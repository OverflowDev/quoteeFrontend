/** @type {import('tailwindcss').Config} */
const defaultColors = require("tailwindcss/colors");

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        ...defaultColors,
        "lens": "#00501e"
      }, 

      fontFamily: {
        mynerve: ['Mynerve', ...defaultTheme.fontFamily.sans],
        quicksand: ['Quicksand', ...defaultTheme.fontFamily.sans],
      }

    },
  },
  plugins: [],
}