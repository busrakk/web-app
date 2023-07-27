/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      'fontxs': '0.75rem',
      'fontsm': '0.875rem',
      'fontmd': '1rem',
      'fontlg': '1.25rem',
      'fontxl': '2rem',
      'fontxxl': '3rem',
      'fontxxxl': '4rem',
    },
    extend: {
      fontFamily: {
        akaya: ['Akaya Telivigala', 'cursive'],
      },
    },
  },
  plugins: [],
}

