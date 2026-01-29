/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./team/*.html",
    "./js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        background: "#333333",
        foreground: "#ffffff",
      },
      fontFamily: {
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
