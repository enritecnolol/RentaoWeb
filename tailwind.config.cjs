/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
         'primary': '#134c3f',
         'secondary': '#29A387'
      }
    },
  },
  plugins: [],
}
