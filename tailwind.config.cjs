/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: '#00FFDE',
        secondary: '#00BFA6',
        back: '#090015',
        lighter: '#2F2E41'
      }
    },
  },
  plugins: [],
}
