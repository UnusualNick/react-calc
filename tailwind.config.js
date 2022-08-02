/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/*.html"
  ],
  theme: {
    extend: {
      colors: {
        'common-button' : '#1e1e1f',
        'special-button' : '#d76e28',
        'hovered-button' : '#3d3d3d'
      }
    }
  },
  plugins: [],
}
