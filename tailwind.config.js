/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        karla: ['Karla', 'sans-serif'],
        markazi: ['Markazi Text', 'serif'],
      },
      colors: {
        primaryGreen: '#495E57',
        primaryYellow: '#F4CE14',
        highlightWhite: '#EDEFEE',
      },
    },
  },
  plugins: [],
}

