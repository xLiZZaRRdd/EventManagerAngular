/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors : {
        chartreuse : "#7FFF00",
        primary : {
          900: "#1D2A1D",
          800: "#293B29",
          700: "#354C35",
          600: "#415D41",
          500: "#4C6E4C",
          400: "#587F58",
          300: "#649064",
          200: "#A2C3A2",
          100: "#BFD4BF"
        }
      }
    },
  },
  plugins: [],
}

