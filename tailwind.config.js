/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': {min:'400px'},
        'mmd':{min:'900px'}
      },
    },
  },
  plugins: [],
}