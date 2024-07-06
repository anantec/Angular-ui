/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily:{
        monster:["Montserrat", 'sans-serif']
      }
    },
  },
  plugins: [],
}