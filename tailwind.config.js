/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#0b132b',
        'hover': '#1C2541',
        'richblack': '#251605',
        'brownsugar': '#c57b57'
      }
    },
  },
  plugins: [],
}