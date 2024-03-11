/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'fredoka': ['Fredoka One', 'sans-serif'],
        'cub':['Cubano', 'sans-serif'],
        'gil':['Gilroy','sans-serif'],
        'gill':['Gilroyl','sans-serif'],
      },
    },
  },
  plugins: [],
}

