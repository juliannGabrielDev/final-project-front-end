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
  plugins: [
// Suggested code may be subject to a license. Learn more: ~LicenseLog:3457912325.
    function({ addUtilities }) {
      const newUtilities = {
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none',
        },
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
      };
      addUtilities(newUtilities);
    }
  ],
};

