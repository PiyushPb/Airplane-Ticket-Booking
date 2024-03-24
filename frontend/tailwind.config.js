/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // Set Poppins as the default font
        montserrat: ["Montserrat", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        ...colors,
        primaryColor: "#3D5CB8",
        primaryDark: "#334C99",
        textDark: "#0F172A",
        textLight: "#64748B",
        extraLight: "#F1F5F9",
      },
    },
  },
  plugins: [],
};
