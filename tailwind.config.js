/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'inria-serif': ['"Inria Serif"', 'serif'],
        'inter': ['"Inter"', 'sans-serif'],
        'libre-baskerville': ['"Libre Baskerville"', 'serif'],
      }
    },
  },
  plugins: [],
}